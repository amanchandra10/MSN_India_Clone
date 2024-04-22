import React from "react";
import {NavLink,Link } from "react-router-dom";
import "../../styles/Nav.css";


const Header = () => {



  return (
    <>
      <div className="nav1">
        <div className="nav11">
          <ul className="ul1">
            <li className="li1">
            </li>
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <img
                  src="./resources/navlogo.jpg"
                  alt="logo"
                  className="img1 icon-size"
                />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="schwrap">

        <div className="searchinput">
          <span className="searchspan"><input className="schinput" type="search" name="" id="" /><button className="schbtn" type="submit"><img src="./resources/search.png" alt="" className="schicon" /></button></span>
        </div>
          <span className="recentsch"><h6><span style={{color:"gray"}}>Recent Searches: </span> 
             <Link className="Linkunder" href="#">msn </Link>  
             <Link className="Linkunder" href="#">icons </Link> 
             <Link className="Linkunder" href="#">color </Link> 
             <Link className="Linkunder" href="#">picker </Link> 
             <Link className="Linkunder" href="#">logo </Link>
             <Link className="Linkunder" href="#">msn </Link> 
             <Link className="Linkunder" href="#">flaticon </Link> 
             </h6></span>
        </div>

        <div className="nav12">
          <div className="forul">
            <ul className="ul111">
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <img
                  src="./resources/medal.png"
                  alt="logo"
                  className="img2 icon-size"
                />
              </NavLink>
            </li>
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <img
                  src="./resources/user.png"
                  alt="gmail-logo"
                  className="img2 icon-size"
                />
              </NavLink>
            </li>
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <img
                  src="./resources/bell.png"
                  alt="gmail-logo"
                  className="img2 icon-size"
                />
              </NavLink>
            </li>
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <img
                  src="./resources/settings.png"
                  alt="gmail-logo"
                  className="img2 icon-size"
                />
              </NavLink>
            </li>
            <li className="li1">
              <NavLink href="mailto:" className="a1">
                <span className="langspam"><img
                  src="./resources/globe.png"
                  alt="gmail-logo"
                  className="img2 icon-size"
                /><h3>EN</h3> </span>
              </NavLink>
            </li>
      
            </ul>
          
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;
