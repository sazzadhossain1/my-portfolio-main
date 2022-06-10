import React from "react";
import "./Details2.css";
import picture4 from "../../images/screen short/Screenshot_4.png";
import picture5 from "../../images/screen short/Screenshot_5.png";
import picture6 from "../../images/screen short/Screenshot_6.png";

const Details2 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-20 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture4} alt="" />
          </figure>
          <div class="card-body">
            <p> Items can be added from the add items space.</p>
            <p>
               Shown some Error if email, user name, and password does not
              match
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture5} alt="" />
          </figure>
          <div class="card-body">
            <p>
               I have created a login page and signup page and Google social
              button with firebase authentication.
            </p>
            <p> Used Email Password Authentication from firebase.</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture6} alt="" />
          </figure>
          <div class="card-body">
            <p>
               Clicking on the Update button will take you to another page and
              you can increase or decrease the amount of product on that page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details2;
