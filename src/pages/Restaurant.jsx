import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/restaurant.css";

function Restaurant() {

const [foods,setFoods]=useState([]);

useEffect(()=>{

const savedFoods=

JSON.parse(
localStorage.getItem("foods")
) || [];

setFoods(savedFoods);

},[]);


const addFood=()=>{

const name=prompt(
"Enter food name"
);

if(!name) return;

const price=prompt(
"Enter food price"
);

if(!price) return;


const imageMap={

pizza:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000",

burger:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",

biriyani:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000",

dosa:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000",

parotta:"https://images.unsplash.com/photo-1628294895950-9805252327bc?w=1000",

idly:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000",

"fried chicken":"https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=1000",

fries:"https://images.unsplash.com/photo-1576107232684-1279f390859f?w=1000"

};

const image=

imageMap[
name.toLowerCase()
]

||

"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000";


const newFood={

id:Date.now(),

name,

price,

image

};


const updatedFoods=[

...foods,
newFood

];

setFoods(updatedFoods);

localStorage.setItem(

"foods",
JSON.stringify(updatedFoods)

);

alert(
"Food Added Successfully ✅"
);

};


const updateFood=(id)=>{

const updated=foods.map(food=>{

if(food.id===id){

const newName=prompt(
"Edit food name",
food.name
);

const newPrice=prompt(
"Edit price",
food.price
);

return{

...food,

name:newName || food.name,

price:newPrice || food.price

};

}

return food;

});

setFoods(updated);

localStorage.setItem(

"foods",
JSON.stringify(updated)

);

};


const deleteFood=(id)=>{

const updated=

foods.filter(

food=>food.id!==id

);

setFoods(updated);

localStorage.setItem(

"foods",
JSON.stringify(updated)

);

};


return(

<>

<Navbar/>

<div className="restaurant-container">

<h1 className="restaurant-title">

Restaurant Dashboard

</h1>

<button
className="restaurant-add-btn"
onClick={addFood}
>

+ Add Food

</button>

<div className="food-grid">

{

foods.map(food=>(

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

<div className="btn-group">

<button
className="edit-btn"
onClick={()=>
updateFood(food.id)
}
>

Edit

</button>

<button
className="delete-btn"
onClick={()=>
deleteFood(food.id)
}
>

Delete

</button>

</div>

</div>

))

}

</div>

</div>

<Footer/>

</>

);

}

export default Restaurant;