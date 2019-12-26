import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Register";
import Signin from "./Signin";
import ProfilePag from "./ProfilePag";
import Home from "./Home";

const Navbar = () => {
  return (
    <Router>
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

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/ProfilePag">
            <ProfilePag />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
