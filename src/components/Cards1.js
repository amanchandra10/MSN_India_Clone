import React from 'react'
import "../styles/Cards1.css"
import Banner from './Banner'
import { Link } from 'react-router-dom'

const Cards1 = () => {
  return (
    <div>
    <div className="main2">
    <div id="slider1">
      <Link to={"#"} className="cursor-pointer">
      <div className="mainright">

<div className="ioverlay-card io-card-2">
 <div className="card-content">
  <span className="card-title">Card Title Lorem ipsum dolor sit amet consectetur adipisi.</span>
  <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span>                      
</div>       

<img src="./resources/imgcard1.jpg" alt="" />
</div>

<div className="ioverlay-card io-card-2">
 <div className="card-content">
  <span className="card-title">Card Title Lorem ipsum dolor sit amet consectetur adipisi.</span>
  <span className='cardspan'>
  <img className='newsicon' src="/resources/TOI.png" alt="" />
  <p className="card-text">
      Times of India                      
  </p>
  </span>                        
</div>       

<img src="./resources/imgcard.jpg" alt="" />
</div>
</div>
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
    </div>
    </div>
</div>
  )
}

export default Cards1