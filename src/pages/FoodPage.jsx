import { useNavigate } from "react-router-dom";

function FoodPage(){

const addToCart=(food)=>{

const existing=
JSON.parse(
localStorage.getItem("cart")
) || [];

existing.push(food);

localStorage.setItem(
"cart",
JSON.stringify(existing)
);

alert("Added To Cart");

};

return(

<div>

<div>

<h1>biriyani</h1>
<p>₹120</p>

<button
onClick={()=>
addToCart({
name:"biriyani",
price:120
})
}
>

Add To Cart

</button>

</div>


<div>

<h1>Pizza</h1>
<p>₹300</p>

<button
onClick={()=>
addToCart({
name:"Pizza",
price:300
})
}
>

Add To Cart

</button>

</div>

</div>

)

}

export default FoodPage;