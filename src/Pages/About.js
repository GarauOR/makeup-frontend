import React from "react";

function About(props) {
  return (
    <div>
      <h1 className="title">ABOUT THE WEBSITE</h1>

      <h5 className="about">
        This website has been built using React.js, Node.js, Express.js,
        Mongoose. The website is fully responsive. The burgermenu has been built
        to automatically close when clicks occur outside. The internal API uses
        a third party API call to retrieve the product list and store it in the
        database.
      </h5>

      <h5 className="about">
        <span className="about" id="about-span">
          What can you do?
        </span>{" "}
        Check for products from the main page, you can also use the search and
        filtering options to find the products easily. If you are logged in you
        will be able to add the products to your favourite list, you also have a
        link to the shop page that sells the product. Within the favourites you
        will be able to delete and update your products.
      </h5>
    </div>
  );
}

export default About;
