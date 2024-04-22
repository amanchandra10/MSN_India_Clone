import React from 'react'
import "../styles/Cards.css"
import Banner from './Banner'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    <div>
          <div className="main2">
          <div id="slider1">
            <Link to={"#"} className="cursor-pointer">
              <Banner />
            </Link>
          </div>
        
        
        <div className="con">
            <div className="cards">
              <img src="/resources/Pic1.jpg" alt="" className="cardimg1" />
              <div class="container1">
                <h4>
                  <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</b>
                </h4>
                <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span> 
              </div>
            </div>
            <div className="cards">
              <img src="/resources/Pic2.png" alt="" className="cardimg1" />
              <div class="container1">
                <h4 >
                  <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</b>
                </h4>
                <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span> 
              </div>
            </div>
            <div className="cards">
              <img src="/resources/Pic3.jpg" alt="" className="cardimg1" />
              <div class="container1">
                <h4>
                  <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</b>
                </h4>
                <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span> 
              </div>
            </div>
            <div className="cards">
              <img src="/resources/Pic4.jpg" alt="" className="cardimg1" />
              <div class="container1">
                <h4>
                  <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</b>
                </h4>
                <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span> 
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Cards