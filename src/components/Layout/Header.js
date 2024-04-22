import React, { useEffect, useState } from "react";
import { Form, NavLink, useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/Nav.css";
// import { Checkbox } from "antd";
// import axios from "axios";
// import SearchInput from "../../components/Form/SearchInput.js";
// import {Badge} from 'antd'
// import { useCart } from "../../context/cart";

const Header = () => {
  // const navigate = useNavigate();
  // const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


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
