import "../styles/Analytics.css";

function Analytics() {

return(

<div className="analytics-container">

<div className="analytics-filter">

<select className="days-select">

<option>Last 7 Days</option>
<option>Last 30 Days</option>

</select>

</div>


<h1 className="analytics-title">

Analytics Dashboard

</h1>


<div className="stats-grid">

<div className="stats-card">

<div className="stats-icon">
💲
</div>

<h2>$67,250</h2>

<p>Total Revenue</p>

<span>↗ +12.5%</span>

</div>


<div className="stats-card">

<div className="stats-icon">
📦
</div>

<h2>455</h2>

<p>Total Orders</p>

<span>↗ +8.2%</span>

</div>


<div className="stats-card">

<div className="stats-icon">
👥
</div>

<h2>1,234</h2>

<p>Active Users</p>

<span>↗ +5.7%</span>

</div>


<div className="stats-card">

<div className="stats-icon">
⭐
</div>

<h2>4.8</h2>

<p>Avg Rating</p>

<span className="red">
↘ -0.2
</span>

</div>

</div>



<div className="chart-grid">

<div className="chart-card">

<h3>Sales Analytics</h3>

<img
src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[4000,3500,5000,6200,8000,9500,8700],fill:true}]}}"
/>

</div>


<div className="chart-card">

<h3>Average Order Price</h3>

<img
src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[12,13,15,17,15,14,13]}]}}"
/>

</div>


<div className="chart-card">

<h3>Revenue By Day</h3>

<img
src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[6000,5500,7500,9000,12000,14000,13000]}]}}"
/>

</div>


<div className="chart-card">

<h3>Category Distribution</h3>

<img
src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Asian','Italian','Mexican','American'],datasets:[{data:[35,25,20,15]}]}}"
/>

</div>

</div>



<div className="dish-section">

<h3>Top Performing Dishes</h3>


<div className="dish-item">

<div>
<h4>1 Thai Beef Salad</h4>
<p>156 orders</p>
</div>

<span>$2340 ↗12%</span>

</div>


<div className="dish-item">

<div>
<h4>2 Margherita Pizza</h4>
<p>142 orders</p>
</div>

<span>$1988 ↗8%</span>

</div>


<div className="dish-item">

<div>
<h4>3 Chicken Tacos</h4>
<p>128 orders</p>
</div>

<span>$1536 ↘3%</span>

</div>


<div className="dish-item">

<div>
<h4>4 Sushi Roll Platter</h4>
<p>115 orders</p>
</div>

<span>$2875 ↗15%</span>

</div>

</div>

</div>

);

}

export default Analytics;