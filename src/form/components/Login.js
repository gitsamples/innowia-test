import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (    
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="bg-light p-4">
            <form className="row g-3">
              <h4>Login</h4>
              <div className="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    {" "}
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Have not account yet? <Link to="/form/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
