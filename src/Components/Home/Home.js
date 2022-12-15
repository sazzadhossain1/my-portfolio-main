import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="zoom-in-up"
            src="https://bryan.infinitysoftway.com/wp-content/uploads/2022/01/04.png"
            className="max-w-sm rounded-lg "
            alt=""
          />
          <div className="mb-64">
            <h1
              className="text-4xl font-bold text-primary mb-6"
              data-aos="fade-up-right"
            >
              Hello, I'm
            </h1>
            <h1
              className="text-6xl font-bold text-black"
              data-aos="fade-up-right"
            >
              Sazzad Hossain
            </h1>
            <h1
              className="text-4xl font-bold text-black mt-5"
              data-aos="fade-up-right"
            >
              A <span className="text-web">Creative Web developer</span> From{" "}
              <span className="bangladesh">Bangladesh</span>
            </h1>
            <p className="text-2xl mt-5" data-aos="fade-up-right">
              I'm creative web developer based in Bangladesh, and I'm very
              passionate and dedicated to my work.
            </p>

            <button className="btn font wid" data-aos="fade-up-right">
              <a
                href=" https://drive.google.com/file/d/1xxMQjLcyu49TfBunbBwNCTjkP1Ty3meS/view?usp=sharing"
                target="blank"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="parent-div"></div>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Skill></Skill>
      {/* <Service></Service> */}
    </div>
  );
};

export default Home;
