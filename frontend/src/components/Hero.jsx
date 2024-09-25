import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to MediFusion | Your Trusted Healthcare Platform

MediFusion is a state-of-the-art platform designed specifically for small clinics across India, dedicated to providing comprehensive healthcare services with compassion and expertise. Our intuitive platform empowers healthcare providers to deliver personalized care tailored to each patient’s needs. At MediFusion, we prioritize your well-being, ensuring a seamless and harmonious experience towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
