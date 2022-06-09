import React from "react";
import "./Projects.css";
import picture1 from "../../images/1.png";
import picture2 from "../../images/2.png";
import picture3 from "../../images/3.png";

const Projects = () => {
  return (
    <div className="">
      <h2
        className="text-5xl font-bold projects"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        My Amazing <span className="text-primary">Works</span>
      </h2>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-20">
        <div
          class="card w-96 glass "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure>
            <a href="https://auto-parts-place.web.app" target="blank">
              <img className="img-siz" src={picture1} alt="" />
            </a>
          </figure>
          <div class="card-body">
            <h2 class="text-3xl font-bold">Technology Used </h2>
            <p>
              React || React-Router || Tailwind || Firebase || MongoDB ||
              DaisyUI ||
            </p>
          </div>
        </div>

        <div
          class="card w-96 glass"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure>
            <a href="https://bike-bangladesh.web.app" target="blank">
              <img className="img-siz" src={picture2} alt="" />
            </a>
          </figure>
          <div class="card-body">
            <h2 class="text-3xl font-bold">Technology Used</h2>
            <p>React || React-Router || Bootstrap || Firebase || MongoDB ||</p>
          </div>
        </div>

        <div
          class="card w-96 glass"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure>
            <a
              href=" https://wedding-photography-c1317.firebaseapp.com/"
              target="blank"
            >
              <img className="img-siz" src={picture3} alt="" />
            </a>
          </figure>
          <div class="card-body">
            <h2 class="text-3xl font-bold">Technology Used</h2>
            <p> React || React-Router || Bootstrap || Firebase || MongoDB ||</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
