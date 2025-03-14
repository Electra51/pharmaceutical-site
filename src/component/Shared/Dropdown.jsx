import React from "react";

const Dropdown = ({ options, type }) => {
  return (
    <ul className="absolute left-0 top-8 mt-2 w-64 bg-white rounded-lg shadow-lg z-10">
      {options.length > 0 ? (
        options.slice(0, 6).map((option, index) => {
          console.log("cate", option);
          return (
            <li
              className={`text-buttonText py-1 hover:bg-[#E1C06E] font-neueMontreal px-2 cursor-pointer ${
                index == 0 ? "rounded-t-lg" : index == 5 ? "rounded-b-lg" : ""
              }`}
              key={index}>
              {type == "c" ? option.name : option.title}
            </li>
          );
        })
      ) : (
        <li className="px-4 py-2 text-gray-500">Loading...</li>
      )}
    </ul>
  );
};

export default Dropdown;
