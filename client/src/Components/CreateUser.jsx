import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/createuser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    async function postCrud() {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/adduser",
          { name: name, phone: phone, email: email },
          { withCredentials: true }
        );
        navigate(`/users`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
  }

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Create User</h2>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone No"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <center>
            <button className="btn">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
