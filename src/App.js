import AdminFrames from "./pages/AdminFrames/AdminFrames";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Comment from "./pages/Comment/Comment";
import Order from "./pages/Order/Order";
import Product from "./pages/Product/Product";
import Blog from "./pages/Blog/Blog";
import User from "./pages/User/User";

function App() {

  var admin = false;
  const admin1 = useSelector((state) => state.user.currentUser);
  if(admin1){
    admin = admin1.user.isAdmin
  }
  // const admin = 1
  // if(useSelector((state) => state.user.currentUser.user.isAdmin)){
  //   return admin = useSelector((state) => state.user.currentUser.user.isAdmin)
  // }
  
  return (
    <BrowserRouter>
      <>
        <>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          {admin && (
            <Routes>
              <Route path="/" element= {admin? <AdminFrames/> : <Navigate  to = "/login"/>}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/comment" element={<Comment />}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/blog" element={<Blog/>}></Route>
            </Routes>
          )}
        </>
      </>
    </BrowserRouter>
  );
}

export default App;
