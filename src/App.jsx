import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Menu from "./pages/Menu";
import Restaurant from "./pages/Restaurant";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";

function App(){

return(

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/login"
element={<LoginPage/>}
/>

<Route
path="/signup"
element={<SignupPage/>}
/>

<Route
path="/menu"
element={<Menu/>}
/>

<Route
path="/restaurant"
element={<Restaurant/>}
/>

<Route
path="/admin-login"
element={<AdminLogin/>}
/>

<Route
path="/cart"
element={<CartPage/>}
/>

<Route
path="/orders"
element={<OrderPage/>}
/>

<Route
path="/admindashboard"
element={<AdminDashboard/>}
/>

<Route
path="/profile"
element={<ProfilePage/>}
/>

</Routes>

);

}

export default App;