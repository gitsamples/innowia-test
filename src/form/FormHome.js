import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

import "./form.css";

import About from "./components/About";
import UserList from "./components/UserList";
import Login from "./components/Login";
import Signup from "./components/Signup";
function formHome() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/form/"
          className="d-flex align-items-center mb-3 mb-md-0 pe-3 border-end text-dark text-decoration-none"
        >
          <span className="fs-4">React Form Demo</span>
        </Link>
        <ul className="nav nav-pills me-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/form/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/form/user-list" className="nav-link">
              User List
            </NavLink>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/form/login" className="nav-link link-dark px-2">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form/signup" className="nav-link link-dark px-2">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form/login" className="nav-link link-dark px-2">
              Log out
            </Link>
          </li>
        </ul>
      </header>
      <Route exact path="/form/">
        <h1
          className="display-4 d-flex align-items-center justify-content-center"
          style={{ height: "calc(100vh - 110px)" }}
        >
          Form Example with <br />
          Login / Logout and Registration
        </h1>
      </Route>
      <Route exact path="/form/about" component={About} />
      <Route exact path="/form/user-list" component={UserList} />
      <Route exact path="/form/login" component={Login} />
      <Route exact path="/form/signup" component={Signup} />
    </div>
  );
}

export default formHome;