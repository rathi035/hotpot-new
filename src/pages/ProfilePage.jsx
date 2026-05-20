import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Profile.css";

function ProfilePage(){

const navigate=useNavigate();

const existingUser=

JSON.parse(
localStorage.getItem("user")
)||{};

const[edit,setEdit]=useState(false);

const[user,setUser]=useState(existingUser);


const saveProfile=()=>{

const updatedUser={

...user,

memberSince:
user.memberSince ||
new Date().toLocaleDateString()

};

localStorage.setItem(

"user",

JSON.stringify(updatedUser)

);

setUser(updatedUser);

alert("Profile Updated");

setEdit(false);

};


const logout=()=>{

localStorage.removeItem("user");
localStorage.removeItem("token");

navigate("/login");

};


return(

<>

<Navbar/>

<div className="profile-container">

<div className="profile-card">

<div className="avatar">

👤

</div>

<h2>

{user.fullName||"User"}

</h2>

<p className="badge">

⭐ Foodie Lover

</p>



<div className="detail">

<label>Email</label>

<p>

{user.email}

</p>

</div>



<div className="detail">

<label>Phone</label>

{

edit?

<input

value={user.phone||""}

onChange={(e)=>

setUser({

...user,

phone:e.target.value

})

}

/>

:

<p>

{user.phone||"Not Added"}

</p>

}

</div>



<div className="detail">

<label>Address</label>

{

edit?

<textarea

value={user.address||""}

onChange={(e)=>

setUser({

...user,

address:e.target.value

})

}

/>

:

<p>

{user.address||"Not Added"}

</p>

}

</div>



<div className="detail">

<label>Member Since</label>

<p>

{user.memberSince||"Today"}

</p>

</div>



{

edit?

<button
className="save-btn"
onClick={saveProfile}
>

Save Profile

</button>

:

<button
className="edit-btn"
onClick={()=>setEdit(true)}
>

✏ Edit Profile

</button>

}



<button
className="logout-btn"
onClick={logout}
>

↪ Logout

</button>


</div>

</div>

<Footer/>

</>

);

}

export default ProfilePage;