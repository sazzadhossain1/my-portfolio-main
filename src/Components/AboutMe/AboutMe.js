import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-div">
      <h1 data-aos="fade-down-right" className="about text-5xl m-20">
        About <span className="text-primary"> Me</span>
      </h1>
      <div class="hero  ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            data-aos="zoom-in-down"
            src="https://www.seekpng.com/png/detail/289-2895407_clip-art-portfolio-categories-1designshop-page-man-on.png"
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="ml-40">
            <h1 data-aos="zoom-in-left" class="text-5xl font-bold">
              I am a MERN Stack Developer
            </h1>
            <p data-aos="zoom-in-left" class="py-6">
              Hi there, This is{" "}
              <span className="text-primary text-2xl mr-2">
                Sazzad Hossain Tomal
              </span>
              I am a expert in JavaScript, React Js, MongoDB, Node Js, Express
              Js, HTML, Css3 Responsiveness and other essential tools. I am
              currently learning more new programing technology and I have
              fallen in love with programing technology.I love to develop
              interesting and unique design.I also like to challenge myself to
              learn new things and i crave for new experiences and challenges.
              new technologies are being discovered and their demand and
              popularity are increasing, I actually prefer to work with those
              new technologies, but the web development profession is above all
              my preferences.Thanks a lot for visiting my portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
