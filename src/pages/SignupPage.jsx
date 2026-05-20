import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../services/api";
import "../styles/login.css";

function SignupPage(){

const navigate=useNavigate();

const [formData,setFormData]=useState({

fullName:"",
email:"",
password:"",
role:"CUSTOMER"

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
"/auth/register",
formData
);

console.log(response.data);

alert("Signup successful");

navigate("/login");

}

catch(error){

console.log(error.response?.data);

alert(
JSON.stringify(
error.response?.data
)
);

}

}

return(

<div className="login-container">

<div className="login-card">

<h1>🔥 HotPot</h1>

<h2>Create Account</h2>

<p>Signup to continue</p>

<form onSubmit={handleSubmit}>

<input
type="text"
name="fullName"
placeholder="Full Name"
value={formData.fullName}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Password"
value={formData.password}
onChange={handleChange}
required
/>

<select
name="role"
value={formData.role}
onChange={handleChange}
>

<option value="CUSTOMER">
Customer
</option>

<option value="RESTAURANT_OWNER">
Restaurant Owner
</option>

</select>

<button type="submit">

Signup

</button>

</form>

<p>

Already have account?

<Link to="/login">

Login

</Link>

</p>

</div>

</div>

)

}

export default SignupPage;