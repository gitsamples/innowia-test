import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function CrudA() {
  document.title = "React CRUD Demo";

  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/crud/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">React CRUD Demo</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/crud/create" className="nav-link">
              Create
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/crud/read" className="nav-link">
              Read
            </NavLink>
          </li>
          {/* <li className="nav-item">
              <NavLink to="/update" className="nav-link">
                Update
              </NavLink>
            </li> */}
        </ul>
      </header>
      <Route exact path="/crud/">
        <h1
          className="display-4 d-flex align-items-center justify-content-center"
          style={{ height: "calc(100vh - 110px)" }}
        >
          CRUD Operations
        </h1>
      </Route>
      <Route exact path="/crud/create" component={Create} />
      <Route exact path="/crud/read" component={Read} />
      <Route exact path="/crud/update" component={Update} />
    </div>
  );
}

export default CrudA;
