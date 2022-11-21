import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [repassword, setRePassword] = useState("");

  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const { email, username, password, repassword } = formValue;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="bg-light p-4">
            <form className="row g-3" onSubmit={handleSignup}>
              <h4>Sign up</h4>
              <div className="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label>Re-type Password</label>
                <input
                  type="password"
                  name="repassword"
                  value={repassword}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark me-3">
                  Sign up
                </button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none"
                >
                  Reset
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Have account? <Link to="/form/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
