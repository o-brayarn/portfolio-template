import React from "react";
import "./home.scss";
import profile from "../../assets/profile.svg";

const Home = () => {
  return (
    <section className="portfolio__summary">
      <div className="profile__image">
        <img src={profile} alt="An awesome person is chilling" />
      </div>
      <div className="profile__summary">
        <h3>HELLO THERE, I AM:</h3>
        <h1>OB Ogeda</h1>
        <p>
          I design, create, renovate, and maintain modern websites and
          applications. I solve all your business problems.
        </p>
        <input type="button" value="Lets Talk" />
      </div>
    </section>
  );
};

export default Home;
