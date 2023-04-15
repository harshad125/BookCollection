import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login.js';
import Register from './component/Registration.js';
import Header from './component/Header.js';
import Cart from './component/Cart.js'
import Dashboard from './component/Dashboard.js'
import BookDisplay from './component/BookDisplay.js'
import CustomerList from './component/CustomerList.js'
import AddBook from './component/AddBook';
import Updatebook from './component/Updatebook';
import Test from './component/Test';
import Users from './component/Users';
import MyCollection from './component/MyCollection';
import Userprofile from './component/Userprofile';
import Temp from './component/Temp.js';
import About from './component/About.js'



function App() {
//   const [isAuthenticated , setIsAuthenticated] = useState(true);
//   let isauth
//   let auth=localStorage.getItem("token");
//  useEffect(()=>{
//    //const auth=localStorage.getItem("token");
//     //isauth=auth._id;
//     console.log(auth)
//     if(auth == null){
//      setIsAuthenticated(false);
//      isauth = false;
//     }else {
//      isauth = true;
//      setIsAuthenticated(true);
//     }
//     console.log(isauth)
//  },[auth])
  return (
    <div className="App">
       <React.Fragment>
    <main>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/addbook' element={<AddBook/>}></Route>
        {/*<Route exact path='/cart' element={<Cart/>}></Route>*/}
        {/*<Route exact path='/test' element={<Temp/>}></Route>*/}
        <Route exact path='/update/:id' element={<Updatebook/>}></Route>
        <Route exact path='/booklist' element={<BookDisplay/>}></Route>
        <Route exact path='/userlist' element={<Users/>}></Route>
        <Route exact path='/userprofile' element={<Userprofile/>}></Route>
        <Route exact path='/mycollection' element={<MyCollection/>}></Route>
      </Routes>
    </main>
  </React.Fragment>
    </div>
  );
}

export default App;
