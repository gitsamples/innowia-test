import React from "react";
import { Route, NavLink } from "react-router-dom";

function Home() {
  document.title = "React Examples";

  return (
    <div>
      <h1 className="display-5 d-flex text-primary justify-content-center">
        React Examples
      </h1>
      <Route exact path="/">
        <div className="container">
          <div className="row justify-content-center text-center my-5">
            <div className="col-12 col-sm col-md-4">
              <div className="rounded shadow py-3">
                <h5>Crud Demo</h5>
                <NavLink to="/crud" className="nav-link">
                  Click here
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-sm col-md-4">
              <div className="rounded shadow py-3">
                <h5>Form Demo</h5>
                <NavLink to="/form" className="nav-link">
                  Click here
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default Home;
