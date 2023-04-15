import React from 'react'
import img from '../img/logo.jpg'
import Header from './Header'
import './Dashboard.css'


function Dashboard() {

  return (
    <><Header />
      <div className='container mt-5'>
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">

          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>


          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={img} className="d-block w-100" alt="Sunset Over the City" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h1>My BookCollection</h1>
                <p>efficient,flexible,easy to use.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img} className="d-block w-100" alt="Canyon at Nigh" />
              <div className="carousel-caption d-none d-md-block pt-5">
                <h2>About books</h2>
                <p>play a quintessential role in every student’s life by introducing them to a world of imagination, providing knowledge of the outside world, improving their reading, writing and speaking skills as well as boosting memory and intelligence. The importance of books in our life cannot be undermined for they not only help in broadening our horizons but also act as doorways to connecting us with the world around us. They function as survival kits, they influence us and leave an impact on us. Want to know the benefits of books and the importance of reading? Curious about how books impact our lives? Read this blog to know all about the importance of books in a student’s life, essays on the importance of reading books, quotes and more!.</p>
                <p>Books are packed with knowledge, they give you life lessons, and they teach you about hardships, love, fear, and every little thing that is a part of life. Books have been here for centuries and contain the knowledge of our past, civilizations, and cultures.</p>
              </div>
            </div>


            <div className="carousel-item">
              <img src={img} className="d-block w-100" alt="Cliff Above a Stormy Sea" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Important Of Books</h2>
                <ul className='pt-5'>
                  <li>Books are our best friends.</li>
                    <li> Books illuminate your imagination.</li>
                    <li> Books help you form your unique perspective of the world around you.</li>
                    <li> Books build confidence.</li>
                   <li> Books help you grow mentally and emotionally.</li>
                    <li> Books enhance your vocabulary.</li>
                    <li> Books help you learn new languages.</li>
                    <li> Books inculcate analytical skills in you.</li>
                   <li> Books are therapeutic and offer wonderful recluses.</li>
                    <li> Books impart crucial life lessons.</li>
                    <li> Books sharpen your ingenuity.</li>
                </ul>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
