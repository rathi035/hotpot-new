import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Orders.css";

function OrderPage(){

const [orders,setOrders]=useState([]);

const navigate=useNavigate();

useEffect(()=>{

const savedOrders=

JSON.parse(
localStorage.getItem("orders")
)||[];

setOrders(savedOrders);

},[]);


const orderAgain=(items)=>{

const oldCart=

JSON.parse(
localStorage.getItem("cart")
)||[];

const updated=[

...oldCart,
...items

];

localStorage.setItem(

"cart",

JSON.stringify(updated)

);

alert(
"Items added to cart ✅"
);

navigate("/cart");

};


return(

<>

<Navbar/>

<div className="orders-container">

<h1 className="orders-title">

My Orders

</h1>


{

orders.length===0 ?

(

<div className="empty-order">

<h2>

No Orders Yet 😔

</h2>

<p>

Place an order first

</p>

<button
className="menu-btn"
onClick={()=>
navigate("/menu")
}
>

Go To Menu

</button>

</div>

)

:

orders.map((order,index)=>(

<div
className="order-card"
key={index}
>

<div className="order-top">

<div>

<h2>

Order #{order.id}

</h2>

<p>

{order.time}

</p>

</div>

</div>


{

(order.items || []).map((food,i)=>(

<div
className="food-row"
key={i}
>

<span>

{food.name}

</span>

<span>

₹{food.price}

</span>

</div>

))

}


<div className="bottom-row">

<h2>

Total : ₹{order.total}

</h2>

<button
className="again-btn"
onClick={()=>
orderAgain(
order.items
)
}
>

Order Again

</button>

</div>

</div>

))

}

</div>

<Footer/>

</>

);

}

export default OrderPage;