import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setAPIData(response.data);
  //     });
  // }, []);
  
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, { cancelToken: source.token })
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
        setIsLoading(false)
        if(!response.data.length){
          setIsError(true)
        }
      })
      .catch(err => {
        console.log(err)
      })      
    return () => {
      source.cancel("Cancelling in cleanup");
    };
  }, []);  

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    if (window.confirm("Delete the item?")) {
      axios
        .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
          getData();
        });
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checkbox Value</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.checkbox ? "Checked" : "Unchecked"}</td>
                <td>
                  <Link to="/crud/update">
                    <button onClick={() => setData(data)}>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isError && <div>Data not avaliable</div> }
      {isLoading && (
        <div className="d-flex align-items-center flex-column">
          <div className="spinner-border"></div>
          <strong>Loading...</strong>
        </div>
      )}
    </div>
  );
}
