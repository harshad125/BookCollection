import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomerList(props) {
    console.log(props.userobj)
    const userobj=props.userobj
   const navigate=useNavigate()

    const user1=userobj.map((user,index)=>{return (<tr><td>{index}</td><td>{user.user_Name}</td><td>{user.email}</td><td>{user.mobile}</td></tr> )})
  return (
    <div>
      <table className="table table-striped table-hover mt-5">
        <thead className='table-dark'>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
          </tr>
        </thead>

        <tbody>
            {user1}
        </tbody>
      </table>

    </div>
  )
}
