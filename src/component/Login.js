
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import "./login.css";
import img from '../img/logo.jpg'
import Temp from './Temp';

function Login() {
    const navigate = useNavigate();
    const [flag,setflag]=useState(false)
    const [input, setinput] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setinput((prv) => ({
            ...prv, [e.target.name]: e.target.value

        }))
    }

    const sendrequiest = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "email":input.email,
             "password":input.password
           });
           
           let response = await fetch("https://localhost:7185/api/Auth/Login", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
          let st=await response.status
           let data = await response.text();
           if(st==400)
           {
            return st;
           }

           return data;
           

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let token=await sendrequiest();
        console.log(token)
        let check=400
        if(token==check)
        {
            setflag(true)
        }else{
            localStorage.setItem("token",token)
          navigate("/")
        }
        
    }

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="logo">
                    <img src={img} alt=""/>
                </div>
                <div className="text-center mt-4 name">
                    Book-Collection
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="email" onChange={handleChange} value={input.email} id="userName" placeholder="Username"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password"  onChange={handleChange} value={input.password} id="pwd" placeholder="Password"/>
                    </div>
                    <button className="btn mt-3" onClick={handleSubmit}>Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="#">Forget password?</a> or <a href="#" onClick={()=>navigate("/register")}>Sign up</a>
                </div>
            </div>
            {flag && <div className=''><Temp val={true} tx="invalid username and password"/></div>}
        </>

    )

}

export default Login
