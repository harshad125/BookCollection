import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import img from '../img/logo.jpg'
import Header from './Header'
import Temp from './Temp'

function Updatebook() {
    const _id=useParams().id
    const navigate = useNavigate()
   // const navigate=useNavigate()
   useEffect(()=>{
    const tk=localStorage.getItem("token")
  if(tk==null)
  {
    navigate("/login")
  }
  },[])
    const [flag1,setflag1]=useState(false);
    const [book, setbook] = useState({
        name: "",
        description: "",
        author: "",
        publishyear: "",
        isbNnumber: "",
        price: "",
        book_url: "",
    })
    const handleChange = (e) => {
        setbook((pre) => ({
            ...pre, [e.target.name]: e.target.value
        }))
    }
    const fetch1 = async () => {
        console.log(_id)
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer "+localStorage.getItem("token")
        }

        let response = await fetch(`https://localhost:7185/api/Books/${_id}`, {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        // console.log(data);
        return data

    }
    useEffect(() => {
        fetch1().then((data) => {
            setbook({
                name: data.name,
                description: data.description,
                author: data.author,
                publishyear: data.publishyear,
                isbNnumber: data.isbNnumber,
                price: data.price,
                book_url: data.book_url,
            })

        }).catch(()=>{
            console.log("somthing want to wrong")
        })
    }, [])
   // console.log(book)
    const updatebook = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer "+localStorage.getItem("token"),
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "id": _id,
            "name": book.name,
            "description": book.description,
            "author": book.author,
            "publishyear": book.publishyear,
            "isbNnumber": book.isbNnumber,
            "price": book.price,
            "book_url": book.book_url,
        });

        let response = await fetch(`https://localhost:7185/api/Books/${_id}`, {
            method: "PUT",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);
        return data

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        updatebook().then((data)=>{
            setflag1(true)
        });
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
            <div className=''><h2>UPDATE-BOOK DETAILS</h2></div>
            <form >
              <div class="mb-3 row">
                <label for="a" class="col-sm-2 col-form-label">bookname</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="a"  name="name" onChange={handleChange} value={book.name}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="b" class="col-sm-2 col-form-label">description</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="b" name="description" onChange={handleChange} value={book.description}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="c" class="col-sm-2 col-form-label">author</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="c" name="author" onChange={handleChange} value={book.author}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="d" class="col-sm-2 col-form-label">Publishyear</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="d" name="publishyear" onChange={handleChange} value={book.publishyear}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="e" class="col-sm-2 col-form-label">isbNumber</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="e" name="isbNnumber" onChange={handleChange} value={book.isbNnumber}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="g" class="col-sm-2 col-form-label">price</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="g" name="price" onChange={handleChange} value={book.price}/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="h" class="col-sm-2 col-form-label">bookurl</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="h" name="book_url" onChange={handleChange} value={book.book_url}/>
                </div>
              </div>

              <button className="btn btn-primary shadow d-block w-100" type='button' onClick={handleSubmit}>Update</button>

            </form>
          </div>
        </div>
        {flag1 && <div className=''><Temp val={true} tx="congratulations!your data is successfully updated"/></div>}
      </div>
      </>
    )
}

export default Updatebook
