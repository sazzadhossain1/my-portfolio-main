import React from "react";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://bryan.infinitysoftway.com/wp-content/uploads/2022/01/04.png"
            className="max-w-sm rounded-lg "
          />
          <div className="mb-64">
            <h1 className="text-5xl font-bold text-primary">Hello, I'm</h1>
            <h1 className="text-6xl font-bold text-black">Sazzad Hossain</h1>
            <h1 className="text-4xl font-bold text-black m-3">
              A <span className="text-web">Creative Web developer</span> From{" "}
              <span className="bangladesh">Bangladesh</span>
            </h1>
            <p className="text-2xl m-5">
              I'm creative web developer based in Bangladesh, and I'm very
              passionate and dedicated to my work.
            </p>

            <button className="btn font wid">Download Resume</button>
          </div>
        </div>
      </div>
      <Projects></Projects>
    </div>
  );
};

export default Home;
