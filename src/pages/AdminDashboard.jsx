import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import api from "../services/api";
import "../styles/AdminDashboard.css";

function AdminDashboard(){

const navigate=useNavigate();

const [users,setUsers]=useState([]);
const [foods,setFoods]=useState([]);
const [orders,setOrders]=useState([]);

useEffect(()=>{

loadData();

},[]);


const loadData=async()=>{

try{

const userRes=
await api.get("/users");

const foodRes=
JSON.parse(
localStorage.getItem("foods")
)||[];

const orderRes=
JSON.parse(
localStorage.getItem("orders")
)||[];

setUsers(userRes.data);
setFoods(foodRes);
setOrders(orderRes);

}

catch(error){

console.log(error);

}

};


const totalRevenue=

orders.reduce(

(sum,order)=>

sum+order.total,

0

);


const foodCount={};

orders.forEach(order=>{

order.items?.forEach(item=>{

foodCount[item.name]=

(foodCount[item.name]||0)+1;

});

});

const mostPurchased=

Object.keys(foodCount)
.reduce(

(a,b)=>

foodCount[a]>foodCount[b]
?a
:b,

"No Orders"

);


return(

<>

<Navbar/>

<div className="admin-container">

<h1 className="admin-title">

Admin Dashboard

</h1>

<p className="sub">

Live Customer Activity

</p>


<div className="dashboard-grid">

<div className="card">

<h2>👤 Users</h2>

<h1>{users.length}</h1>

</div>


<div className="card">

<h2>🍔 Foods</h2>

<h1>{foods.length}</h1>

</div>


<div className="card">

<h2>📦 Orders</h2>

<h1>{orders.length}</h1>

</div>


<div className="card">

<h2>💰 Revenue</h2>

<h1>₹{totalRevenue}</h1>

</div>


<div className="card">

<h2>🔥 Most Purchased</h2>

<h1>{mostPurchased}</h1>

</div>

</div>


<h2 className="section-title">

Registered Users

</h2>


<div className="users-grid">

{

users.map(user=>(

<div
className="user-card"
key={user.id}
>

<h3>

{user.fullName}

</h3>

<p>

📧 {user.email}

</p>

<p>

👤 {user.role}

</p>

</div>

))

}

</div>


<button
className="manage-btn"
onClick={()=>navigate("/restaurant")}
>

Manage Restaurant

</button>


<h2 className="section-title">

Recent Orders

</h2>


<div className="orders">

{

orders.map(order=>(

<div
className="order-card"
key={order.id}
>

<h3>

Order #{order.id}

</h3>

<p>

{order.user}

</p>

<p>

{
order.items
.map(i=>i.name)
.join(", ")
}

</p>

<h4>

₹{order.total}

</h4>

</div>

))

}

</div>

</div>

<Footer/>

</>

);

}

export default AdminDashboard;