import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill-title">
      <div className="mt-20 text-div">
        <h3
          className="text-3xl font-bold m-5 text-primary"
          data-aos="fade-down-right"
        >
          Learning is Life
        </h3>
        <h2 className="text-4xl font-bold m-5" data-aos="fade-down-left">
          My Skills
        </h2>
        <h1 className="text-5xl font-bold m-5 mb-20" data-aos="zoom-in">
          I Develop <span className="text-primary">Skills</span> Regularly{" "}
          <span className="text-primary">.</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 max-w-7xl mx-auto mt-20 ">
        <div data-aos="fade-right">
          <p className="ml-5 font-bold">HTML</p>
          <progress
            class="progress progress-info progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">CSS3</p>
          <progress
            class="progress progress-primary progress-bar"
            value="100"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">Java Script</p>
          <progress
            class="progress progress-success progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">React Js</p>
          <progress
            class="progress progress-warning progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">Node Js</p>
          <progress
            class="progress progress-success progress-bar"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="child-div" data-aos="fade-left">
          <p className="ml-5 font-bold">Express Js</p>
          <progress
            class="progress progress-info progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">Tailwind Css</p>
          <progress
            class="progress progress-primary progress-bar"
            value="100"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">Bootstrap</p>
          <progress
            class="progress progress-success progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="ml-5 font-bold">Daisy Ui</p>
          <progress
            class="progress progress-warning progress-bar"
            value="70"
            max="100"
          ></progress>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Skill;
