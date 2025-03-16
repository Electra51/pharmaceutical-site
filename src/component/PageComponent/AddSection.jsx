import React from "react";
import BGImg from "../../assets/images/BG.png";
import ArrowFill from "../../assets/images/arrowFill.svg";

const AddSection = () => {
  return (
    <div
      className="!h-[812px] w-full mt-[160px] border !z-10 !absolute"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container grid grid-cols-2 !pt-[89px]">
        <div className="w-[524px]">
          <p className="text-[58px] font-impact leading-[120%]">
            100% Online, <br /> 100% Convenient
          </p>
        </div>
        <div>
          <div className="flex justify-start items-center gap-[30px]">
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
          <div className="flex justify-start items-center gap-[30px] my-[25px]">
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
          <div className="flex justify-start items-center gap-[30px]">
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
