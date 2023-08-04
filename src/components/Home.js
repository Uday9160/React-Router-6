import React from "react";
import r1 from "../images/route1.jpg";
import r2 from "../images/route2.jpg";
import r3 from "../images/route3.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <img src={r1} alt='van' />
        <h1>VanLife</h1>
        <button type='submit'>Load more</button>
      </div>
    </div>
  );
};

export default Home;
