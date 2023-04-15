import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../img/logo.jpg'

function Header() {
  const navigate = useNavigate();
  const id=localStorage.getItem("token")
  const logoutuser = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-black bg-black ">

        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={img}
                height="30"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#" onClick={()=>navigate("/")}>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#" onClick={()=>navigate("/about")}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#" onClick={()=>navigate("/booklist")}>Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#" onClick={()=>navigate("/mycollection")}>MyCollection</a>
              </li>
            </ul>

          </div>

          <div className="d-flex align-items-center">

            {(!id) && <button type="button" className="btn btn-primary px-3 me-2" onClick={()=>navigate("/login")}>
              Login</button>}
            {(!id) && <button type="button" className="btn btn-primary me-3" onClick={()=>navigate("/register")}>
              Sign up for free
            </button>}

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/userprofile")}>My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={logoutuser}>Logout</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="" onClick={()=>navigate("/mycollection")}>Mycoolection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="" onClick={()=>navigate("/userprofile")}>Myprofile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <button type="button" className="btn btn-primary" onClick={logoutuser}>logout</button>
      </div> */}
    </>
  )
}

export default Header
