import React from "react";
import "./button.css";
const Button = ({ text, height, width, type, onClick }) => {
  return (
    <button
      style={{
        height: height,
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`${
        type == "fill"
          ? "bg-[#E1C06E] text-black signUp-btn gradient-border"
          : "draw-border"
      } rounded-[50px] text-center text-[16px] font-neueMontreal `}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
