import React from "react";
import Hero from "../component/PageComponent/Hero";
import Category from "../component/PageComponent/Category";
import HHoo from "../component/PageComponent/HHoo";
import SupportSection from "../component/PageComponent/SupportSection";

const HomePage = () => {
  return (
    <div className="h-[100vh]">
      <Hero />
      <Category />

      {/* <HHoo /> */}
    </div>
  );
};

export default HomePage;
