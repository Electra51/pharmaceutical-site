import React from "react";
import HHoo from "../component/PageComponent/HHoo";
import LastSection from "../component/PageComponent/LastSection/LastSection";
import HeroSection from "../component/PageComponent/HeroSection/HeroSection";
import CategorySection from "../component/PageComponent/CategorySection/CategorySection";

const HomePage = () => {
  return (
    <div className="h-[100vh]">
      <HeroSection />
      <CategorySection />
      <LastSection />
      {/* <HHoo /> */}
    </div>
  );
};

export default HomePage;
