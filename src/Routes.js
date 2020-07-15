import React from "react";
import { Home } from "./Components/home";
import { Item } from "./Components/item";
import { Products } from "./Components/products";
import { About } from "./Components/about";
import { Navbar } from "./Components/navbar";
import { NotFound} from "./Components/notFound";
import { ProductIndex} from "./Components/productIndex";



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const RouterConfig = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />}>
          <Route  path="/" element={<ProductIndex />}/>
          <Route path=":slug" element={<Item/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};
