import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Menu.css";

function Menu(){

const [foods,setFoods]=useState([]);
const [search,setSearch]=useState("");

useEffect(()=>{

const savedFoods=

JSON.parse(
localStorage.getItem("foods")
)

||[];

setFoods(savedFoods);

},[]);



const addToCart=(food)=>{

const cart=

JSON.parse(
localStorage.getItem("cart")
)

||[];


cart.push({

...food,
qty:1

});


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


alert(
"Added To Cart ✅"
);

};



const filteredFoods=

foods.filter(

food=>

food.name
.toLowerCase()
.includes(

search.toLowerCase()

)

);



return(

<>

<Navbar/>

<div className="menu-container">

<h1 className="menu-title">

Food Menu

</h1>


<div className="header">

<input

className="search-box"

placeholder="Search food..."

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

/>

</div>



<div className="food-grid">

{

filteredFoods.map(

food=>(

<div
className="food-card"
key={food.id}
>

<img
src={food.image}
alt=""
/>

<h2>

{food.name}

</h2>

<p>

₹{food.price}

</p>


<button

className="cart-btn"

onClick={()=>
addToCart(food)
}

>

Add To Cart

</button>

</div>

)

)

}

</div>

</div>

<Footer/>

</>

);

}

export default Menu;