import React from "react";
import "./style.css";
import env from "../../helper/env";
// import Avenger from "../../img/avenger.jpg";

// const angger = {
//   nama: "angger",
//   umur: 50,
// };

// const { umur } = angger;

// console.log(">>>>>>>>>>>>>>>>>>>>>>>", umur);
// console.log(">>>>>>>>>>>>>>>>>>>>>>>", angger?.umur);

const { assetUrl } = env;

const card = ({ data }) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>", `${assetUrl}${data?.poster_path}`);

  return (
    <div
      className="__container-card"
      style={{ backgroundImage: `url(${assetUrl}${data?.poster_path})` }}
    >
      <div className="__card-gradient"></div>
      <div className="__card-detail">
        <h3>{data?.title}</h3>
        <div className="__card-detail-description">
          <p>{data?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
