import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);
  
  const postData = (e) => {
    e.preventDefault();
    if(firstName && lastName){
      axios
        .post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
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
      <form className="col-4" onSubmit={postData}>
        <div className="mb-3 row">
          <label className="col-form-label col-sm-4">First Name</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-form-label col-sm-4">Last Name</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(e) => setCheckbox(!checkbox)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
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
