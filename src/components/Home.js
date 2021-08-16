import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/mari-logo.svg";

import $ from "jquery";

import "./Home.css";

import logo from "../assets/mari-logo.svg";
import apo from "../assets/apo.svg";
import aquaLogo from "../assets/aqua-logo.svg";

import one from "../assets/ban-imgs/one.jpg";
import two from "../assets/ban-imgs/two.jpg";
import three from "../assets/ban-imgs/three.jpg";
import four from "../assets/ban-imgs/four.jpg";
import five from "../assets/ban-imgs/five.jpg";
import six from "../assets/ban-imgs/six.jpg";
import seven from "../assets/ban-imgs/seven.jpg";
import eight from "../assets/ban-imgs/eight.jpg";

import bio1 from "../assets/bio-pics/one.jpg";

let slideImages = [one, two, three, four, five, six, seven, eight];

let images = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

function Home(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      let newIdx = (index + 1) % slideImages.length;
      setIndex(newIdx);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <>
      <div className="logo">
        <img src={apo} />
      </div>
      <div
        className="hero-block"
        style={{ backgroundImage: `url(${slideImages[4]})` }}
      >
        <p className="text">
          At Mariposa Wellness I combine a variety of manual medicine modalities
          to treat the whole person. With an expertise in Pelvic Health and
          almost 20 years experience as a physical therapist my goal is to
          provide treatment to enhance your overall movement and function while
          empowering you with knowledge regarding your body and particular
          condition and techniques for self care.
        </p>
        <div className="button-cont">
          <Link to="/contact">
            <button className="book">New Patients</button>
          </Link>

          <a href="https://bchwbooking.clientsecure.me/">
            <button className="book">Book an Appointment</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
