import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div>
        <div className="secondnav">
          <ul className="ulnav">
            <NavLink to={"#"}><li className="linav">Cricket WC</li></NavLink>
            <NavLink to={"#"}><li className="linav">Lucknow / 30°C</li></NavLink>
            <NavLink to={"#"}><li className="linav">News</li></NavLink>
            <NavLink to={"#"}><li className="linav">Entertainment</li></NavLink>
            <NavLink to={"#"}><li className="linav">Gaming</li></NavLink>
            <NavLink to={"#"}><li className="linav">Money</li></NavLink>
            <NavLink to={"#"}><li className="linav">Lifestyle</li></NavLink>
            <NavLink to={"#"}><li className="linav">Health</li></NavLink>
            <NavLink to={"#"}><li className="linav">SPORTS</li></NavLink>
            <NavLink to={"#"}><li className="linav">Food</li></NavLink>
            <NavLink to={"#"}><li className="linav">Travel</li></NavLink>
            <NavLink to={"#"}><li className="linav">Health</li></NavLink>
            <NavLink to={"#"}><li className="linav">SPORTS</li></NavLink>
            <NavLink to={"#"}><li className="linav">Food</li></NavLink>
            <NavLink to={"#"}><li className="linav">...</li></NavLink>
         
          </ul>
        </div>
    </div>
  )
}

export default Nav2