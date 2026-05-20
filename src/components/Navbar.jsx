import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){

const navigate=useNavigate();

const user=

JSON.parse(
localStorage.getItem("user")
);

return(

<div className="navbar">

<div
className="logo"
onClick={()=>navigate("/")}
>

🔥 HotPot

</div>


<ul>

<li>
<Link to="/">
Home
</Link>
</li>

<li>
<Link to="/menu">
Menu
</Link>
</li>

<li>
<Link to="/orders">
Orders
</Link>
</li>

<li>
<Link to="/admin-login">
Admin
</Link>
</li>

</ul>



<input
type="text"
placeholder="Search for dishes..."
/>



<div className="nav-icons">

<button>

🔔

</button>


<button
onClick={()=>navigate("/cart")}
>

🛒

</button>



<button

className="user-icon"

onClick={()=>{

if(user){

navigate("/profile");

}

else{

navigate("/login");

}

}}

>

{

user?

user.fullName
.charAt(0)
.toUpperCase()

:

"👤"

}

</button>

</div>

</div>

);

}

export default Navbar;