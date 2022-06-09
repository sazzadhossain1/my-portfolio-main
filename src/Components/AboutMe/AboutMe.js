import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div>
      <h1 className="about text-5xl">
        About <span className="text-primary"> Me</span>
      </h1>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://www.seekpng.com/png/detail/289-2895407_clip-art-portfolio-categories-1designshop-page-man-on.png"
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="ml-40">
            <h1 class="text-5xl font-bold">What I Know</h1>
            <p class="py-6">
              Hi there, This is{" "}
              <span className="text-primary">Sazzad Hossain Tomal</span>I am now
              a private company which is situated in the Dhaka,Bangladesh and 26
              years old. Bangladesh is my motherland. I am currently learning
              more new programing technology and I have fallen in love with
              programing technology. I have been working for a long time with
              great success on how to handle projects with clients, leadership
              skills, communication skills and a number of other skills. As the
              days go by, new technologies are being discovered and their demand
              and popularity are increasing, I actually prefer to work with
              those new technologies, but the web development profession is
              above all my preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
