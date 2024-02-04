import React, {useState} from 'react'
import '../CSS/Login.css'
//import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
 // const [otp, setOtp] = useState(" ");

  const navigate =useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/login", {
        username: username,
        password: password,
        //username,password
      },{ withCredentials: true }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Invalid Email or Password") {
          alert("Invalid Email or Password");
        }
        else if (res.data.message === "logged in successfully") {
          alert("Login successful");
          navigate("/users")
        }
        else {
          alert("Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }
    catch (err) {
      alert(err);
    }

  }

  // const SendOtp = (e) =>{
  //   e.preventDefault();
  //   if(email === " "){
  //     toast.error("Enter Your Email");
  //   }
  //   else if(!email.includes('@')){
  //     toast.error("Enter Your Email");
  //   }
  //   else{
  //     toast.success("email sent");
  //   }
  // };

  return (
    <div className='main-div'>
      <center><h1>Login Page</h1></center>
      <div className='form-div'>
        <form >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} name="password" required />
                {/* <label htmlFor="OTP">OTP:</label> */}
                {/* <input type="number" id="username" onChange={(e)=>setOtp(e.target.value)} name="password" required /> */}
                {/* <input type="submit" value="Send OTP" onClick={SendOtp}/> */}
                <input type="submit" value="Login" onClick={login}/>
                <input type="submit" value="Google"/>
        </form>
        {/* <ToastContainer/> */}
      </div>
    </div>
  )
}

export default Login
