import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import "./login.css";
import img from '../img/logo.jpg'

function Registration() {
  const navigate = useNavigate()
  const [data1, setdata] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  })
  const handleChange = (e) => {
    setdata((pre) => ({
      ...pre, [e.target.name]: e.target.value
    }))
  }
  const registration = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "user_Name": data1.username,
       "email": data1.email,
       "password": data1.password,
       "mobile": data1.mobile,
       "books":[]
     });
     
     let response = await fetch("https://localhost:7185/api/Auth/Register", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registration().then(() => navigate("/"));
  }

  return (
    <>
      <Header />
      <div className="wrapper ">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="text-center mt-4 name">
          Book-Collection
        </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="username" onChange={handleChange} value={data1.username} id="userName" placeholder="Username" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-envelope"></span>
            <input type="text" name="email" onChange={handleChange} value={data1.email} id="email" placeholder="email" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" onChange={handleChange} value={data1.password} id="pwd" placeholder="Password" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span  className="fa-light fa-mobile"></span>
            <input type="text" name="mobile" onChange={handleChange} value={data1.mobile} id="mobile" placeholder="mobile" />
          </div>
          <button className="btn mt-3" onClick={handleSubmit}>Register</button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="#" onClick={() => navigate("/login")}>Login</a>
        </div>
      </div>
    </>
  )
}

export default Registration
