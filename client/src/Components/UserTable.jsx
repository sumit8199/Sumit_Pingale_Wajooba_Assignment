import React, { useState ,useEffect} from "react";
import axios from "axios";
import "../CSS/Table.css";
import { Link ,useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

const UserTable = () => {
  const [user, setUser] = useState([]);
  const [cookies, setCookies, removeCookie] = useCookies([]);
  const navigate =useNavigate();
  useEffect(() => {
    const token = cookies.gettoken;
    // Fetch names from the backend API
    axios
      .get("http://localhost:8080/api/getData", 
      { headers: {
          'Authorization': `Bearer ${token}`
      }
      , withCredentials: true 
    })
      .then((res) => {
        const details = res.data;
        setUser([...details]);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);

  const deleteUser =(id)=>{
    //navigate(`/users/${id}`);
    setCookies("id", id, { path: "/" });
    axios.delete("http://localhost:8080/api/deleteData", { withCredentials: true })
      .then((res) => {
        navigate(`/users`);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
      
  }
  const updateRecord =(id)=>{
    setCookies("uid", id, {path: "/"});
  }

  const cleanUp = ()=>{
    removeCookie("id");
    removeCookie("uid");
  }
  return (
    <div className="users-table">
      <div className="table">
        <center>
          <button className="btn center">
            <Link to="/create" className="btn-success">
              Add User
            </Link>
          </button>
          <button className="btn" onClick={cleanUp()}>
            <Link to="/">LogOut</Link>
          </button>
        </center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th className="expand">Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td className="expand">{user.email}</td>
                  <td>
                    
                    <button className="btn" onClick={()=> updateRecord(user._id)}>
                      <Link to="/update">Update</Link>
                    </button>
                    <button className="btn" onClick={() => deleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
