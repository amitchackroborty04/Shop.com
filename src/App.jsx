import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Pages/Home";
import Product_detail from "./Pages/Product_detail";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Sign_in from "./Pages/Sign_in";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route
        path="/"
        element={<Product_detail title="productdetail" />}
      ></Route>
      <Route path="/shop" element={<Shop title="Shop" />}></Route>
      <Route path="/contact" element={<Contact title="Contact" />}></Route>
      <Route path="/about" element={<About title="About" />}></Route>
      <Route path="/signin" element={<Sign_in />}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
