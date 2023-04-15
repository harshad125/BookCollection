import React from 'react'
import Cart from './Cart';
import { useState,useEffect } from 'react';
import Header from './Header.js'
import { useNavigate } from 'react-router-dom';


function BookDisplay() {
  const [books,setbooks]=useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    const tk=localStorage.getItem("token")
  if(tk==null)
  {
    navigate("/login")
  }
  },[])
  const sendRequest=async()=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer "+localStorage.getItem("token")
     }
     
     let response = await fetch("https://localhost:7185/api/Books/", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.json();
     //console.log(data);
     return data
     
  }
  useEffect(()=>{
     sendRequest().then((data)=>setbooks(data));
     console.log(books);
  },[])
  return (
    <>
    <Header/>
    <div className='container-fluid mt-5'>
      <div className='row mx-3'>
        <h2>ALL BOOK-COLLECTION</h2>
      {books && books.map((books ,index)=>{return <Cart key={index} name={books.name} description={books.description} author={books.author} pyear={books.publishyear} isbNumber={books.isbNnumber} image={books.image} price={books.price} book_url={books.book_url} isuser={false}/>})}
      </div>
      
    </div>
    </>
  )
}

export default BookDisplay

