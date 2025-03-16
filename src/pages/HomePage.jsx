import React from "react";
import HHoo from "../component/PageComponent/HHoo";
import SupportSection from "../component/PageComponent/SupportSection";
import LastSection from "../component/PageComponent/LastSection";
import HeroSection from "../component/PageComponent/HeroSection/HeroSection";
import CategorySection from "../component/PageComponent/CategorySection/CategorySection";

const HomePage = () => {
  return (
    <div className="h-[100vh]">
      <HeroSection />
      <CategorySection />

      {/* <LastSection /> */}
      {/* <HHoo /> */}
    </div>
  );
};

export default HomePage;
