import React from "react";
import "./add.css";
const AddSection = () => {
  return (
    <div className="add_section">
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:justify-items-center !pt-[51px] lg:!pt-[89px] gap-[40px] md:gap-0">
        <p className="text-[30px] md:text-[48px] lg:text-[58px] font-impact leading-[120%]w-[200px] md:w-[513px] lg:w-[524px]">
          100% Online, <br /> 100% Convenient
        </p>

        <div className="">
          <div className="flex justify-start items-center md:gap-[20px] gap-[10px] lg:gap-[30px]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.5L0 0L3.83933 9.5L0 19L18 9.5Z" fill="white" />
            </svg>
            <p className="text-[18px] font-medium font-neueMontreal">
              Chat with a provider 24/7
            </p>
          </div>
          <div className="flex justify-start items-center md:gap-[20px] gap-[10px] lg:gap-[30px] my-[25px]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.5L0 0L3.83933 9.5L0 19L18 9.5Z" fill="white" />
            </svg>
            <p className="text-[18px] font-medium font-neueMontreal">
              Fast, discreet shipping
            </p>
          </div>
          <div className="flex justify-start md:items-start lg:items-center md:gap-[20px] gap-[10px] lg:gap-[30px]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.5L0 0L3.83933 9.5L0 19L18 9.5Z" fill="white" />
            </svg>
            <p className="text-[18px] font-medium font-neueMontreal">
              Clinically proven ingredients and FDA-approved treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
