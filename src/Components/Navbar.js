import React, { Fragment } from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";


const Navbar = () => {

  return (

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Signin">Signin</Link>
            </li>
            <li>
              <Link to="/ProfilePag">ProfilePag</Link>
            </li>
          </ul>
        </nav>
      </div>
  
  );
};

export default Navbar;
