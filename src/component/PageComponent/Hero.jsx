import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="heros">
      <div className="container">
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p className="hero_headText font-impact">
              Prescription Treatments For Your <span>Health Goals</span>
            </p>
            <button className="hero_btn" type="button">
              <span className="font-neueMontreal font-bold">
                Find my treatment
              </span>
            </button>
          </div>
          <div></div>
        </div>
        <div className="hero_search">
          <div className="search font-neueMontreal">
            <input
              type="search"
              className="search_input placeholder:text-white"
              placeholder="Search by product/treatment"
            />
            <div className="search_icon">
              <IoSearch className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
