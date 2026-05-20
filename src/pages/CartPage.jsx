import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Cart.css";

function CartPage(){

const navigate=useNavigate();

const [step,setStep]=useState(1);
const [payment,setPayment]=useState("UPI");

const user=
JSON.parse(
localStorage.getItem("user")
) || {};

const items=
JSON.parse(
localStorage.getItem("cart")
) || [];

const subtotal=

items.reduce(

(sum,item)=>

sum+

(
Number(item.price)*
(item.qty||1)
),

0

);

const delivery=40;

const tax=

Math.floor(
subtotal*0.05
);

const total=

subtotal+
delivery+
tax;


const placeOrder=()=>{

const existingOrders=

JSON.parse(
localStorage.getItem("orders")
) || [];


const newOrder={

id:Date.now(),

time:
new Date()
.toLocaleString(),

items,

total,

user:user.fullName

};

existingOrders.push(
newOrder
);

localStorage.setItem(

"orders",

JSON.stringify(
existingOrders
)

);

localStorage.setItem(

"cart",

JSON.stringify([])

);

setStep(4);

};


return(

<>

<Navbar/>

<div className="checkout-container">

<h1 className="title">

Checkout

</h1>


<div className="progress">

<div className={`circle ${step>=1?"active":""}`}>

{step>1?"✓":"1"}

</div>


<div className={`line ${step>=2?"active-line":""}`}></div>


<div className={`circle ${step>=2?"active":""}`}>

{step>2?"✓":"2"}

</div>


<div className={`line ${step>=3?"active-line":""}`}></div>


<div className={`circle ${step>=3?"active":""}`}>

3

</div>

</div>


<div className="content">

<div className="left">


{/* STEP 1 */}

{step===1 &&(

<div className="card">

<h2>

Delivery Address

</h2>


<div className="address-box">

<p>

Full Name

</p>

<span>

{user.fullName || "No Name"}

</span>

</div>



<div className="address-box">

<p>

Phone Number

</p>

<span>

{user.phone || "Not Added"}

</span>

</div>



<div className="address-box">

<p>

Delivery Address

</p>

<span>

{user.address || "Address Not Added"}

</span>

</div>


<button

className="next-btn"

onClick={()=>
setStep(2)
}

>

Continue To Order Summary

</button>

</div>

)}



{/* STEP 2 */}

{step===2 &&(

<div className="card">

<h2>

Order Summary

</h2>

{

items.map(

(item,index)=>(

<div
className="food-row"
key={index}
>

<span>

{item.name}

x {item.qty||1}

</span>


<span>

₹

{item.price*
(item.qty||1)}

</span>

</div>

)

)

}


<div className="button-row">

<button

className="back-btn"

onClick={()=>
setStep(1)
}

>

Back

</button>


<button

className="next-btn"

onClick={()=>
setStep(3)
}

>

Continue To Payment

</button>

</div>

</div>

)}



{/* STEP 3 */}

{step===3 &&(

<div className="card">

<h2>

Payment Method

</h2>


<div

className={`payment-option ${payment==="UPI"?"selected":""}`}

onClick={()=>
setPayment("UPI")
}

>

UPI

</div>


{

payment==="UPI" &&(

<div className="payment-box">

<img

className="qr"

src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=hotpot@upi"

alt="qr"

/>

<p>

Scan QR to pay

</p>

<h3>

UPI ID:
hotpot@upi

</h3>

</div>

)

}



<div

className={`payment-option ${payment==="Card"?"selected":""}`}

onClick={()=>
setPayment("Card")
}

>

Card

</div>


{

payment==="Card" &&(

<div className="payment-box">

<input

className="payment-input"

placeholder="Card Number"

/>


<input

className="payment-input"

placeholder="Card Holder Name"

/>


<input

className="payment-input"

placeholder="Expiry MM/YY"

/>


<input

className="payment-input"

placeholder="CVV"

/>

</div>

)

}



<div

className={`payment-option ${payment==="Wallet"?"selected":""}`}

onClick={()=>
setPayment("Wallet")
}

>

Wallet

</div>


{

payment==="Wallet" &&(

<div className="payment-box">

<select
className="payment-input"
>

<option>

Paytm

</option>

<option>

PhonePe Wallet

</option>

<option>

Amazon Pay

</option>

</select>

</div>

)

}



<div

className={`payment-option ${payment==="COD"?"selected":""}`}

onClick={()=>
setPayment("COD")
}

>

Cash On Delivery

</div>


{

payment==="COD" &&(

<div className="payment-box">

<h3>

Pay when order arrives 🚚

</h3>

</div>

)

}


<div className="button-row">

<button

className="back-btn"

onClick={()=>
setStep(2)
}

>

Back

</button>


<button

className="place-btn"

onClick={placeOrder}

>

Place Order ₹{total}

</button>

</div>

</div>

)}



{/* STEP 4 */}

{step===4 &&(

<div className="confirm-card">

<div className="success">

✓

</div>

<h1>

Order Confirmed

</h1>

<p>

Thank you for your order

</p>


<div className="info">

<div>

<p>

Order ID

</p>

<h3>

ORD001

</h3>

</div>


<div>

<p>

Delivery Time

</p>

<h3>

30-35 mins

</h3>

</div>

</div>


<div className="button-row">

<button

className="track-btn"

onClick={()=>
navigate("/orders")
}

>

Track Order

</button>


<button

className="home-btn"

onClick={()=>
navigate("/")
}

>

Back Home

</button>

</div>

</div>

)}

</div>



<div className="price-card">

<h2>

Price Details

</h2>


<div className="price-row">

<span>

Subtotal

</span>

<span>

₹{subtotal}

</span>

</div>


<div className="price-row">

<span>

Delivery Fee

</span>

<span>

₹{delivery}

</span>

</div>


<div className="price-row">

<span>

Tax

</span>

<span>

₹{tax}

</span>

</div>

<hr/>


<div className="total-row">

<span>

Total

</span>

<span>

₹{total}

</span>

</div>

</div>

</div>

</div>

</>

);

}

export default CartPage;