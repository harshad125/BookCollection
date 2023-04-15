import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Header from './Header';

function MyCollection() {
  //const id = localStorage.getItem("userid");
  const navigate=useNavigate()
 // const tk=localStorage.getItem("token")
  useEffect(()=>{
    const tk=localStorage.getItem("token")
  if(tk==null)
  {
    navigate("/login")
  }
  },[])
  const [books, setbooks] = useState([])
  //const navigate=useNavigate()
  const mycollection = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer "+localStorage.getItem("token")
    }

    let response = await fetch(`https://localhost:7185/api/users/`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.json();
    //console.log(data);
    return data;
  }
  useEffect(() => {
    mycollection().then((data) => {
      //console.log(data.boos.publishyear)
      setbooks(data.books)
    }).catch((error) => { console.log(error) })
  }, [])
  return (
    <div>
      <Header/>
      <div><button type="button" className="btn btn-success d-flex mx-5 mt-5" onClick={()=>navigate("/addbook")}>Create New Collection</button></div>
      <div className='container-fluid mt-4'>
        <div className='row mx-3'>
          <h2>MY COLLECTION</h2>
          {books && books.map((book, index) => { return <Cart key={index} _id={book.id} name={book.name} description={book.description} author={book.author} pyear={book.publishyear} isbNumber={book.isbNnumber} image={book.image} price={book.price} book_url={book.book_url} isuser={true}></Cart> })}
        </div>
      </div>
    </div>
  )
}

export default MyCollection
