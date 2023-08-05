import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VanDetails = () => {
  const [vanDetail, setVanDetail] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);
  console.log(vanDetail);
  return (
    <div>
      <h1>VanDetails Component</h1>
      <div
        style={{
          width: "70%",
          height: "70%",
          textAlign: "center",
          border: "2px solid green",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <h1 style={{ width: "100%", height: "100%" }}>{vanDetail.name}</h1>
        <img
          src={vanDetail.imageUrl}
          alt='van'
          style={{ width: "70%", height: "90%" }}
        />
        <h3>{vanDetail.description}</h3>
        <h2>Price :{vanDetail.price}</h2>
      </div>
    </div>
  );
};

export default VanDetails;
