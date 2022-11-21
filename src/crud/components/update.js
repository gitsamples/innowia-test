import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);
  
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value") === "true");
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    if(firstName && lastName){
        axios
        .put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
          firstName,
          lastName,
          checkbox,
        })
        .then(() => {
          history.push("/crud/read");
        });
    } else {
        alert('Fill the all input value...')
      }
  };
  return (
    <div>
      <form className="col-4">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={checkbox ? 1 : 0}
            onChange={() => setCheckbox(!checkbox)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={updateAPIData}
        >
          Update
        </button>
        <button
          type="button"
          className="btn ms-3 text-danger"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
