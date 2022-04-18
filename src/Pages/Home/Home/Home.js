import React from "react";
import Banner from "../Banner/Banner";
import Description from "../Description/Description";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Description />
      <Services id="services" />
    </div>
  );
};

export default Home;
