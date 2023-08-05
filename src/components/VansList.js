import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VansList = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans/")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div>
      <h1>VansList Component</h1>
      {vans.map((van) => (
        <Link to={`/vans/${van.id}`} key={van.id}>
          <div
            style={{
              width: "30%",
              height: "30%",
              textAlign: "center",
              border: "2px solid green",
              borderRadius: "20px",
              margin: "20px",
            }}
          >
            <h1 style={{ width: "100%", height: "100%" }}>{van.name}</h1>
            <img
              src={van.imageUrl}
              alt='van'
              style={{ width: "50%", height: "50%" }}
            />
            <h2>Price :{van.price}</h2>
            <button
              style={{ width: "50%", height: "50%", background: "orange" }}
            >
              LOAD MORE
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VansList;
