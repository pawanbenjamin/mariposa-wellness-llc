import React from "react";
import "./About.css";

import one from "../assets/bio-pics/one.jpg";
import two from "../assets/bio-pics/two.jpg";
import three from "../assets/bio-pics/three.jpg";
import four from "../assets/bio-pics/four.jpg";

import test from "../assets/three-yellows.svg";
import blueWave from "../assets/blue-wave.svg";
import greenButterfly from "../assets/green-butterfly.svg";

function About(props) {
  return (
    <div className="about">
      <div className="head-cont">
        <img src={test} className="yellow-thing" />
        <h1>About Marisa</h1>
        <span>(She/Ella)</span>
      </div>

      <div className="container">
        {/* <img src={greenButterfly} className="bio-pic" /> */}
        <div className="image-cont">
          <img src={one} />
        </div>
        <div className="bio1">
          <p>
            My whole life, I have known that my path in this lifetime is to
            support others thrive in their journey toward healing and wholeness.
            My interest in manual therapy started when I was eight and my dad
            herniated a disc in his back. For a week he was mainly bedridden. I
            would bring him hot packs in bed and try to lift his spirits. When
            multiple spine specialists reported that surgery was the only
            option, my mom, a physical therapist, asked 2 of her manual physical
            therapist buddies to help out. They would come to the house, throw a
            mat on the floor, and treat my dad. I would watch in fascination as
            my dad was able to move better and better after every session. He
            was diligent with his exercises and now, over 30 years later he is
            active, strong, and never needed surgery! This was the start of my
            curiosity, deep awe, and respect for the bodys innate ability to
            heal.
          </p>
        </div>
        <div className="image-cont-2">
          <img src={three} width="300px" />
        </div>
        <div className="withRic">
          <img src={blueWave} className="blue-wave" />
          <p className="bio1">
            As a college student I studied physical therapy at the University of
            Connecticut graduating in 2004. At school I was always passionate
            about advocating for women???s health and women???s right to choose and
            be informed about all aspects of their health. Also, as one of the
            only Latina???s and POC folks in the physical therapy and allied
            health department, I was acutely aware of the disparities in health
            research and access to healthcare among BIPOC communities. I
            completed my graduation thesis and published my research in the
            Journal of Strength and Conditioning in Psychosocial Barriers to
            Physical Activity in Puerto Rican Women. I also gave lectures at
            local conferences on the importance of healthcare practitioners
            recognizing the racial and ethic differences when developing
            treatment plans.
          </p>
        </div>

        <div className="image-cont">
          <img
            src={four}
            style={{
              clipPath:
                "polygon(75% 0, 100% 28%, 100% 100%, 29% 100%, 0 68%, 0% 0%)",
            }}
          />
        </div>

        <p className="bio1">
          Knowing that I wanted to focus my career in pelvic health, I completed
          the course work through the Herman & Wallace Pelvic Rehabilitation
          Institute and began a fulfilling career as a pelvic floor physical
          therapist. I have worked at the National Rehabilitation Institute,
          Kirk Center for Health Living in the Chicagoland region, a specialty
          clinic for pelvic floor dysfunction, and in 2012 I was the co-founder
          and co-owner of Body Connect Health and Wellness in Washington DC. At
          Body Connect one of our main missions was not only to provide
          exceptional care for all persons with pelvic floor dysfunction but
          also to empower the community through community education classes on
          topics ranging from work ergonomics, pre and postpartum wellness, to
          sexual health throughout the lifespan.
        </p>
        <div className="final">
          <div className="image-cont">
            <img src={two} />
          </div>
          <p className="bio1">
            After 8 years, 3 kids (between my business partner and myself),
            cross country moves, a global pandemic we decided it was time to
            close Body Connect. I started Mariposa Wellness to continue serving
            the DC community in the areas of pelvic health, chronic pain, and
            full body integrative healing. When I am not treating, I love
            spending time with my family and friends, being in nature, exploring
            the world, eating delicious food, dancing and listening to live
            music.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
