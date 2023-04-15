import React, { useEffect, useState } from 'react'
import CustomerList from './CustomerList';
import Header from './Header';

function Users() {
  const [user, setuser] = useState([])
  const getuser = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://localhost:7185/api/users/", {
      method: "GET",
      headers: headersList
    });

    let data = await response.json();
   // console.log(data);
    return data

  }
  useEffect(() => {
    getuser().then((data) => {
      setuser(data)
      //console.log(data)
    })
  }, [])
  return (
    <>
    <Header/>
    <div>
          {user &&    <CustomerList userobj={user}/> }
    </div>
    </>
  )
}

export default Users
