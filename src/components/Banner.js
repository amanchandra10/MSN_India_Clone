import React from 'react'
import { pic1, pic2, pic3,pic4 } from '../images';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div style={{borderRadius:'2px',boxSizing:"border-box"}}>
      <Carousel>
        <Carousel.Item>
          <img
            style={{borderRadius:"5px"}}
            className="d-block h-75 w-100 sliderImg"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* {/* <h3>First slide label</h3> */}
            <h3 className='hover:underline' style={{fontSize:"1.3rem",fontWeight:"700"}}>This site is under development Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio id eaque </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{borderRadius:"5px"}}
            className="d-block h-75 w-100 sliderImg"
            src={pic2}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <h3 className='hover:underline' style={{fontSize:"1.3rem",fontWeight:"700"}}>This site is under development Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio id eaque </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{borderRadius:"5px"}}
            className="d-block h-75 w-100 sliderImg"
            src={pic3}
            alt="Third slide"
          />

          <Carousel.Caption>
           <h3 className='hover:underline' style={{fontSize:"1.3rem",fontWeight:"700"}}>This site is under development Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio id eaque </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{borderRadius:"5px"}}
            className="d-block h-75 w-100 sliderImg"
            src={pic4}
            alt="Third slide"
          />

          <Carousel.Caption>
           <h3 className='hover:underline' style={{fontSize:"1.3rem",fontWeight:"700"}}>This site is under development Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio id eaque </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner
