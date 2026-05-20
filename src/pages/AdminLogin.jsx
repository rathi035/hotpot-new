import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function AdminLogin(){

const navigate=useNavigate();

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleLogin=()=>{

if(
username==="admin" &&
password==="1234"
){

navigate("/admindashboard");

}
else{

alert("Invalid Admin Credentials");

}

};

return(

<div className="login-container">

<div className="login-box">

<h1>Admin Login</h1>

<input
type="text"
placeholder="Enter Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default AdminLogin;