import React from "react";
import "./section.css";
const SectionTitle = ({ spanText, paraText }) => {
  return (
    <p className="section_title font-impact">
      {paraText} <span className="text-gold-gradient-1">{spanText}</span>
    </p>
  );
};

export default SectionTitle;
