import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../CSS/createuser.css'

const UpdateDetail = () => {
  const [user, setUser] = useState({});
  //const [cookies, setCookies, removeCookie] = useCookies([]);
  
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.name);
  const [email, setEmail] = useState(user.name);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch names from the backend API
    axios
      .get("http://localhost:8080/api/getDataById", { withCredentials: true })
      .then((res) => {
        const details = res.data;
        console.log(details);
        setUser(details);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    async function upCrud() {
      try {
        //const token = cookies.gettoken;
    
        const response = await axios.patch(
          "http://localhost:8080/api/updateData",
          { name: name, phone: phone, email: email },
          {
        withCredentials: true }
        );
        navigate(`/users`);
      } catch (error) {
        console.log("error", error);
      }
    }
    upCrud();
  }
  
  
  return (
    //<div>user.name</div>
    <div className='container'>
      <div className='form'>  
        <form onSubmit={handleSubmit}>
            <h2>Update Details</h2>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name'  onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='Enter Phone'  onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <center><button className='btn'>Submit</button></center>
        </form>
      
      </div>
    </div>
  )
}

export default UpdateDetail
