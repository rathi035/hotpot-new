import "../styles/Tracking.css";

function Tracking(){

return(

<div className="tracking-container">

<div className="track-card">

<h2>Live Order Tracking</h2>


<div className="map-area">

<div className="red-dot"></div>

<div className="driver-btn">
🚴 Driver
</div>

<div className="location">
📍 Your Location
</div>

<div className="green-dot"></div>

</div>


<div className="bottom-track">


<div className="timeline">


<div className="timeline-item">

<div className="timeline-left">

<div className="icon green">
✓
</div>

<div className="timeline-text">

<h3>Order Placed</h3>

<p>🕒 2:15 PM</p>

</div>

</div>

<div className="right-check">
✓
</div>

</div>



<div className="timeline-item">

<div className="timeline-left">

<div className="icon green">
📦
</div>

<div className="timeline-text">

<h3>Preparing</h3>

<p>🕒 2:20 PM</p>

</div>

</div>

<div className="right-check">
✓
</div>

</div>



<div className="timeline-item">

<div className="timeline-left">

<div className="icon orange">
🚴
</div>

<div className="timeline-text">

<h3>Out for Delivery</h3>

<p>🕒 2:35 PM</p>

</div>

</div>

<div className="progress">
In Progress
</div>

</div>



<div className="timeline-item">

<div className="timeline-left">

<div className="icon gray">
📍
</div>

<div className="timeline-text">

<h3>Delivered</h3>

<p>🕒 Est. 2:50 PM</p>

</div>

</div>

</div>

</div>



<div className="eta-box">

<div>

<p>Estimated Arrival</p>

<h1>15 minutes</h1>

</div>


<div className="driver-card">

<h3>Driver: John D.</h3>

<p>⭐4.9 (2341 deliveries)</p>

</div>

</div>


</div>

</div>

</div>

)

}

export default Tracking;