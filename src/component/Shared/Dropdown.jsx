import React from "react";

const Dropdown = ({ options, type }) => {
  return (
    <ul className="absolute left-0 top-8 mt-2 w-69 bg-white rounded-lg shadow-lg z-10">
      {options.length > 0 ? (
        options.slice(0, 6).map((option, index) => {
          console.log("cate", option);
          return (
            <li
              className={`text-black py-1 hover:bg-[#E1C06E] font-neueMontreal font-normal px-2 cursor-pointer border-0 border-b border-gray-200 ${
                index == 0 ? "rounded-t-lg" : index == 5 ? "rounded-b-lg" : ""
              }`}
              key={index}>
              {type == "c" ? option.name : option.product_name}
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
