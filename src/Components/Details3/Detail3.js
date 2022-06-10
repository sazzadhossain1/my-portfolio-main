import React from "react";
import picture7 from "../../images/screen short/Screenshot_7.png";
import picture8 from "../../images/screen short/Screenshot_8.png";
import picture9 from "../../images/screen short/Screenshot_9.png";

const Detail3 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-20 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture7} alt="" />
          </figure>
          <div class="card-body">
            <p> Used Email Password Authentication from firebase..</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture8} alt="" />
          </figure>
          <div class="card-body">
            <p>Used Google sign-in from firebase.</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture9} alt="" />
          </figure>
          <div class="card-body">
            <p> Error will be shown if the password does not match.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail3;
