import React, { useEffect, useState } from "react";
import one from "../assets/ban-imgs/one.jpg";
import two from "../assets/ban-imgs/two.jpg";
import three from "../assets/ban-imgs/three.jpg";
import four from "../assets/ban-imgs/four.jpg";
import five from "../assets/ban-imgs/five.jpg";
import six from "../assets/ban-imgs/six.jpg";
import seven from "../assets/ban-imgs/seven.jpg";
import eight from "../assets/ban-imgs/eight.jpg";

let slideImages = [one, two, three, four, five, six, seven, eight];

function BannerImgs(props) {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        width: "500px",
      }}
    >
      <img src={slideImages[index]} />
    </div>
  );
}

export default BannerImgs;
