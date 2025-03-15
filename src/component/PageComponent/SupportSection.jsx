import React from "react";
import secureSVG from "../../assets/images/secure.svg";
import shippingSVG from "../../assets/images/shipping.svg";
import supportSVG from "../../assets/images/support.svg";
import valueSVG from "../../assets/images/value.svg";
const SupportSection = () => {
  const supportData = [
    {
      id: 1,
      img: secureSVG,
      title: "Secure Payment",
    },
    {
      id: 2,
      img: supportSVG,
      title: "Online Support",
    },
    {
      id: 1,
      img: shippingSVG,
      title: "Free Shipping",
    },
    {
      id: 1,
      img: valueSVG,
      title: "Best Value",
    },
  ];
  return (
    <div className="mt-[160px] h-[151px] bg-[#31418C4D] flex justify-center items-center">
      <div className="container grid grid-cols-4 gap-[80px] ">
        {supportData?.map((e, i) => {
          return (
            <div className="flex justify-center items-center gap-[32px]">
              <img src={e?.img} alt="secure" className="w-[40px] h-[40px]" />
              <p className="text-[22px] font-neueMontreal">{e?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportSection;
