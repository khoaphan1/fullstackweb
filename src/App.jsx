import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Checkout from "./pages/Checkout";
import {Route, Routes, Navigate } from 'react-router-dom';
// import Success from "./pages/Success";
import Success from "./components/Success/Success"
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user?.currentUser);
  console.log(user)
  return (
    
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element= {<Shop/>}/>
        <Route path="/blogs" element= {<Blogs/>}/>
        <Route path="/blog/:id"  element= {user? <BlogDetail/> : <Navigate  to = "/login"/>}/>
        <Route path="/profile/:id" element= {user? <Profile/> : <Navigate  to = "/login"/>}/>
        <Route path="/product/:id" element= {user? <ProductDetail/> : <Navigate  to = "/login"/>}/>
        <Route path="/login"  element= {user? <Navigate  to = "/"/> : <Login/>} />
        <Route path="/register"  element= {user? <Navigate  to = "/"/> : <Register/>}/>
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/checkout" element= {user? <Checkout/> : <Navigate  to = "/login"/>}/>
        <Route path="/success" element= {<Success/>}/>
    </Routes>
  );
}

export default App;
