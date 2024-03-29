import React from "react";
// Pages
import Banner from "./components/Banner";
import Information from "./components/Information";
import AboutCompany from "./components/AboutCompany";
import Patch from "./components/Patch";
import OurService from "./components/OurService";
import OurTeam from "./components/OurTeam";
import Counter from "./components/Counter";
import Quote from "./components/Quote";
import Partner from "./components/Partner";

const Home = () => {

  return (
    <div>
      <Banner />
      <Information />
      <AboutCompany />
      <Patch />
      <OurService />
      <OurTeam />
      <Counter />
      <Quote />
      <Partner />
    </div>
  );
};

export default Home;
