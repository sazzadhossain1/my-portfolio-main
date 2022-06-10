import React from "react";
import "./Details.css";
import picture1 from "../../images/screen short/Screenshot_1.png";
import picture2 from "../../images/screen short/Screenshot_2.png";
import picture3 from "../../images/screen short/Screenshot_3.png";

const Details = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-20 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture1} alt="" />
          </figure>
          <div class="card-body">
            <p> User can provide reviews.</p>
            <p>
               Once a user orders an item order details will be stored in the
              backend.When the user logs in, the user's name will be displayed
              and there will be a profile inside the dashboard showing his
              details
            </p>
            <p> The user can choose the product and order it .</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture2} alt="" />
          </figure>
          <div class="card-body">
            <p>
              If you add a product from the Purchase page, that product will
              show up in the Dashboard section of the My order page.
            </p>
            <p>
               I have created a login page and signup page and Google social
              button with firebase authentication and shown some Error if the
              user name, password, email does not match.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture3} alt="" />
          </figure>
          <div class="card-body">
            <p>
               I used nested rout in the Dashboard component.When the user
              gives a review, it will show on the home page.
            </p>
            <p>
               If someone adds a product and adds a review, it will go to
              MongoBD and if it is deleted, it will be deleted from MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
