import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import VansList from "./components/VansList";
import VanDetails from "./components/VanDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link style={{ padding: "40px" }} to='/'>
            #VANLIFE
          </Link>
          <Link style={{ padding: "40px" }} to='/about'>
            ABOUT
          </Link>
          <Link style={{ padding: "40px" }} to='/vans'>
            VANS
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VansList />} />
          <Route path='/vans/:id' element={<VanDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
