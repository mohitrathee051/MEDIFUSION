import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          We are a team of passionate innovators dedicated to transforming the healthcare experience for small clinics across India. With a focus on efficiency, accuracy, and accessibility, our solution automates key processes, helping clinics deliver better care while minimizing manual errors. We believe in leveraging technology to empower healthcare providers, ensuring they can focus on what matters most—providing quality patient care.
          </p>
          <p>
            Our Mission:
          </p>
          <p>
          To modernize clinic management by offering a digital platform that automates essential clinic operations, enhances patient experiences, and supports healthcare professionals in delivering high-quality care.
          </p>
          <p>Our Vision:</p>
          <p>A future where every clinic, regardless of size, has access to modern technology, enabling them to operate efficiently and improve patient outcomes.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
