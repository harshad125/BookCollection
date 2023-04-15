import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import bg from '../img/bg.jpg'
import Header from './Header';
import Temp from './Temp';
import image1 from '../img/image4.jpg'

function Userprofile(props) {
   // const id=localStorage.getItem("userid")
   const navigate=useNavigate()
   useEffect(()=>{
    const tk=localStorage.getItem("token")
  if(tk==null)
  {
    navigate("/login")
  }
  },[])
    const [user ,setuser]=useState({
      username:"",
      email:"",
      mobile:""
    })
    const [flag1,setflag1]=useState(false);
   // const navigate=useNavigate()
    const [flag,setflag]=useState(false)
    const handleChange=(e)=>{
        setuser((pre)=>({
          ...pre,[e.target.name]:e.target.value
        }))
      }
    const userfetch=async()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer "+localStorage.getItem("token")
           }
           
           let response = await fetch("https://localhost:7185/api/users/", { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.text();
           console.log(data);
            setuser(JSON.parse(data))           
           
    }
    const userdel=async()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer "+localStorage.getItem("token")
           }
           
           let response = await fetch(`https://localhost:7185/api/users`, { 
             method: "DELETE",
             headers: headersList
           });
           
           let data = await response.text();
           console.log(data);
           return navigate("/")
           
    }
    useEffect(()=>{
        userfetch();
    },[])
    const handleupdate=async ()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer "+localStorage.getItem("token"),
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "id": user.id,
             "user_Name": user.user_Name,
             "email": user.email,
             "password":user.password,
             "mobile": user.mobile
           });
           
           let response = await fetch(`https://localhost:7185/api/users`, { 
             method: "PUT",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.text();
           console.log(data);
           return data ;

           
    }
    const handleup=()=>{
        handleupdate().then(()=>{
            setflag1(true)
            setflag(false)
        })
    }
    const show=()=>{
        setflag(!flag)
    }
    // useEffect(()=>{
    // },[flag])
    return (
        <>
        <Header/>
        <div className="container m-5">
            <div className="card " style={{marginTop:"11rem"}} >
                <div className="row g-0 ">
                    <div className="col-md-4 mt-3">
                        <img src={bg} className="img-fluid rounded-start p-2 m-0" alt="..." />
                    </div>
                    <div className="col-md-8 mt-3">
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">UserName</label>
                                <div className="col-sm-10">
                                   {!flag &&  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.user_Name}/> }
                                   {flag &&  <input className="form-control" type="text" name="user_Name" onChange={handleChange} value={user.user_Name} placeholder="Username" /> }
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                {!flag &&  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.email}/> }
                                   {flag &&  <input className="form-control" type="email" name="email" onChange={handleChange} value={user.email} placeholder="Username" /> }
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mobile</label>
                                <div className="col-sm-10">
                                {!flag &&  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.mobile}/> }
                                   {flag &&  <input className="form-control" type="text" name="mobile" onChange={handleChange} value={user.mobile} placeholder="Username" /> }
                                </div>
                            </div>
                            <button className="btn btn-primary shadow mx-3" type='button' onClick={!flag?show:handleup}>update</button>
                           {/* <button className="btn btn-primary shadow disabled" type='button' onClick={userdel}>delete</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            {flag1 && <div className=''><Temp val={true} tx="congratulations!your data is successfully updated"/></div>}
        </div>
        </>
    )
}

export default Userprofile
