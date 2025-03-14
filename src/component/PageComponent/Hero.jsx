import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="container">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="home-hero__title font-impact">
              Prescription Treatments For Your{" "}
              <span className="home-hero__title--gradient">Health Goals</span>
            </p>
            <button
              className="home-hero__cta"
              type="button"
              data-bind="click:goToQuiz">
              <span>Find my treatment</span>
            </button>
          </div>
          <div></div>
        </div>
        <div className="home-hero__search">
          <div
            className="rizz-search"
            data-bind="event: { focusin: showDropdown, focusout: hideDropdown }">
            <input
              type="search"
              className="rizz-search__input"
              placeholder="Search by product / treatment"
              data-bind="textInput: productSearch, valueUpdate: 'input', event: { focus: showDropdown, keypress: captureEnter }"
            />
            <div className="rizz-search__icon">
              

              <IoSearch className="icon-search" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
