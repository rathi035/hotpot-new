import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../services/api";
import "../styles/login.css";

function LoginPage(){

const navigate=useNavigate();

const [formData,setFormData]=useState({

email:"",
password:""

});

const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

})

}

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const response=await API.post(

"/auth/login",
formData

);

localStorage.setItem(

"token",
response.data.token

);

localStorage.setItem(

"user",
JSON.stringify(
response.data.user
)

);

alert("Login success");

navigate("/");

}

catch(error){

console.log(error);

alert("Invalid credentials");

}

};

return(

<div className="login-container">

<div className="login-card">

<h1>🔥 HotPot</h1>

<h2>Welcome Back</h2>

<p>Login to continue</p>

<form onSubmit={handleSubmit}>

<input
type="email"
name="email"
placeholder="Enter Email"
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Enter Password"
onChange={handleChange}
required
/>

<button type="submit">

Login

</button>

</form>

<p>

Don't have account?

<Link to="/signup">

Sign Up

</Link>

</p>

</div>

</div>

)

}

export default LoginPage;