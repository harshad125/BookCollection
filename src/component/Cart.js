import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Temp from './Temp'
import image1 from '../img/image1.jpg'
import image4 from '../img/image4.jpg'


export default function Cart(props) {
  const navigate = useNavigate()
  const { _id, name, description, author, pyear, isbNumber, image, price, book_url, isuser } = props

  const [flag1,setflag1]=useState(false);
  const delbook = async () => {
    console.log(_id)
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer "+localStorage.getItem("token")
    }

    let response = await fetch(`https://localhost:7185/api/Books/${_id}`, {
      method: "DELETE",
      headers: headersList
    });

    let data = await response.text();
    console.log(data);
    return data;

  }
  function handledel() {
    delbook().then((data) => {
      setflag1(true)
    }).then(()=>navigate("/mycollection")).catch(error => console.log(error))
  }

  return (
    <>
        <div className='col-md-3 mb-5'>
          <div className="card " style={{ width: "19rem" }}>
            <img src={image1} className="card-img-top" alt={image4} />
            <div className="card-body">
              <h5 className="card-title">Book:-{name}</h5>
              <p className="card-text">Description:-{description}</p>
            </div>
            <ul className="list-group list-group-light list-group-small">
              <li className="list-group-item ">Author:- {author}</li>
              <li className="list-group-item ">IsbNumber:-{isbNumber}</li>
              <li className="list-group-item ">Price:-{price}/-</li>
              <li className="list-group-item ">Publish-year:-{pyear}</li>
              <li className="list-group-item ">BookUrl:-<a href={book_url} alt="">{name}</a></li>
            </ul>
            {isuser && <div className="card-body">
              <a href="#" className="btn btn-primary mx-3" onClick={() => navigate(`/update/${_id}`)}>Update</a>
              <a href="#" className="btn btn-primary" onClick={handledel}>delete</a>
            </div>}
          </div>
        </div>
        {flag1 && <div className=''><Temp val={true} tx="your data is  deleted successfully"/></div>}
      
    </>
  )
}
