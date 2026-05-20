import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {

const navigate=useNavigate();

const [open,setOpen]=useState(false);

const [message,setMessage]=useState("");

const [chat,setChat]=useState(
JSON.parse(localStorage.getItem("chat")) || [

{
sender:"bot",
text:"Hi 👋 I'm HotPot AI. Ask me about food."
}

]
);

useEffect(()=>{

localStorage.setItem(
"chat",
JSON.stringify(chat)
);

},[chat]);

const sendMessage=()=>{

if(message.trim()==="") return;

const userMessage={

sender:"user",
text:message

};

let botReply="";

const msg=message.toLowerCase();

if(msg.includes("pizza")){

botReply=
"🍕 I recommend Pepperoni Pizza or Farmhouse Pizza";

}

else if(msg.includes("burger")){

botReply=
"🍔 Try Double Cheese Burger";

}

else if(msg.includes("healthy")){

botReply=
"🥗 Try salads and grilled food";

}

else if(msg.includes("spicy")){

botReply=
"🌶 Try spicy chicken wings";

}

else{

botReply=
"🤖 Ask me about Pizza, Burgers, Healthy foods etc";

}

const botMessage={

sender:"bot",
text:botReply

};

setChat([

...chat,
userMessage,
botMessage

]);

setMessage("");

};

return(

<>

<div className="hero">

<div className="hero-left">

<div className="tag">
⚡ AI-Powered Food Delivery
</div>

<h1>
Delicious Food,<br/>
Delivered Fast
</h1>

<p>
Experience the future of food delivery with real-time
tracking and AI recommendations.
</p>

<div className="hero-buttons">

<button
className="order-btn"
onClick={()=>navigate("/menu")}
>
Order Now →
</button>

<button
className="menu-btn"
onClick={()=>navigate("/menu")}
>
View Menu
</button>

</div>

<div className="stats">

<div className="stat-box">
<div className="stat-icon">⏰</div>
<h2>15 min</h2>
<p>Avg Delivery</p>
</div>

<div className="stat-box">
<div className="stat-icon">🛡</div>
<h2>100%</h2>
<p>Safe & Fresh</p>
</div>

<div className="stat-box">
<div className="stat-icon">⚡</div>
<h2>4.9★</h2>
<p>User Rating</p>
</div>

</div>

</div>

<div className="hero-right">

<img
src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
alt=""
/>

<img
src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg"
alt=""
/>

<img
src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
alt=""
/>

<img
src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg"
alt=""
/>

<div className="offer">

<h2>20% OFF</h2>
<p>On your first order</p>

</div>

</div>


<div
className="chat-icon"
onClick={()=>setOpen(!open)}
>
💬
</div>

{
open && (

<div className="chat-container">

<div className="chat-header">
HotPot AI
</div>

<div className="chat-body">

{
chat.map(
(item,index)=>(

<div
key={index}
className={
item.sender==="user"
?
"user-message"
:
"bot-message"
}
>

{item.text}

</div>

))
}

</div>

<div className="chat-footer">

<input
type="text"
placeholder="Type message..."
value={message}
onChange={(e)=>
setMessage(e.target.value)
}
/>

<button onClick={sendMessage}>
➤
</button>

</div>

</div>

)
}

</div>


{/* RECOMMENDED SECTION */}

<div className="recommend-section">

<h2>🔥 Recommended For You</h2>

<div className="recommend-grid">

<div className="recommend-card">

<img
src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
alt=""
/>

<h3>Pepperoni Pizza</h3>

<p>₹299</p>

<button onClick={()=>navigate("/menu")}>
View In Menu
</button>

</div>


<div className="recommend-card">

<img
src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
alt=""
/>

<h3>Cheese Burger</h3>

<p>₹199</p>

<button onClick={()=>navigate("/menu")}>
View In Menu
</button>

</div>


<div className="recommend-card">

<img
src="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg"
alt=""
/>

<h3>Biriyani</h3>

<p>₹250</p>

<button onClick={()=>navigate("/menu")}>
View In Menu
</button>

</div>

</div>

</div>

</>

);

}

export default Hero;