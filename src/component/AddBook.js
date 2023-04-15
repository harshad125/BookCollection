import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../img/logo.jpg'
import Header from './Header'
import { TextField } from '@mui/material'

function AddBook() {
  const navigate = useNavigate()
  //const navigate=useNavigate()
  useEffect(()=>{
    const tk=localStorage.getItem("token")
  if(tk==null)
  {
    navigate("/login")
  }
  },[])
 
  const [data1, setdata] = useState({
    name: "",
    description: "",
    author: "",
    publishyear: "",
    isbNnumber: "",
    price: "",
    book_url: "",
  })
  const handleChange = (e) => {
    setdata((pre) => ({
      ...pre, [e.target.name]: e.target.value
    }))
  }
  const addbooks = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer "+localStorage.getItem("token"),
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": data1.name,
      "description": data1.description,
      "author": data1.author,
      "publishyear": data1.publishyear,
      "isbNnumber": data1.isbNnumber,
      "price": data1.price,
      "book_url": data1.book_url,
    });

    let response = await fetch("https://localhost:7185/api/Books/", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.text();
    console.log(data);
    return JSON.parse(data)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await  addbooks().then(() => navigate("/mycollection"));
  }
  return (
    <>
      <Header />
     
      <div className='container m-3'>
        <div className='row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <div className='col-6 d-flex'>
            <img src={img} style={{ width: "100%" }} className="mx-0"></img>
          </div>
          <div className='col-6'>
            <div className=''><h2>ADD-BOOK DETAILS</h2></div>
            <form >
              <div class="mb-3 row">
                <label for="a" class="col-sm-2 col-form-label">bookname</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="a"  name="name" onChange={handleChange} value={data1.name}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="b" class="col-sm-2 col-form-label">description</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="b" name="description" onChange={handleChange} value={data1.description}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="c" class="col-sm-2 col-form-label">author</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="c" name="author" onChange={handleChange} value={data1.author}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="d" class="col-sm-2 col-form-label">Publishyear</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="d" name="publishyear" onChange={handleChange} value={data1.publishyear}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="e" class="col-sm-2 col-form-label">isbNumber</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="e" name="isbNnumber" onChange={handleChange} value={data1.isbNnumber}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="g" class="col-sm-2 col-form-label">price</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="g" name="price" onChange={handleChange} value={data1.price}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="h" class="col-sm-2 col-form-label">bookurl</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="h" name="book_url" onChange={handleChange} value={data1.book_url}/>
                </div>
              </div>

              <button className="btn btn-primary shadow d-block w-100" type='button' onClick={handleSubmit}>ADD</button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBook
