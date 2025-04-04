import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import ArrowDown from "../../Shared/ArrowDown";
import Dropdown from "../../Shared/Dropdown";
import CartIcon from "../../Shared/CartIcon";
import SocialIcon from "../../Shared/SocialIcon";
import useCategories from "../../../utils/useCategories";
import useProducts from "../../../utils/useProducts";
import { NavLink } from "react-router";
import "./nav.css";
import Button from "../../Shared/Button/Button";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForProduct, setIsOpenForProduct] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { categories } = useCategories();
  const { products } = useProducts();

  useEffect(() => {
    const changeNavbarbg = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbarbg);
    return () => {
      window.removeEventListener("scroll", changeNavbarbg);
    };
  }, []);

  const handleCategoryToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleProductToggle = () => {
    setIsOpenForProduct(!isOpenForProduct);
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className={`navbar ${
        navbar
          ? "bg-[#193554ca] backdrop-blur-[50px] shadow-[0px_0px_12px_1px_rgba(29,37,73,0.8)]"
          : ""
      }`}>
      <div className="container">
        <div className="flex justify-between gap-[10px] items-start lg:items-start md:items-center">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <div className="text-white right-nav">
              <div className="flex justify-center items-center gap-5">
                <Button
                  text={"Log In"}
                  type={"unFill"}
                  height={35}
                  width={77}
                />
                <CartIcon />
                {isNavbarOpen ? (
                  <AiOutlineClose
                    className="text-2xl text-white"
                    onClick={handleNavbarToggle}
                  />
                ) : (
                  <LuMenu
                    className="text-2xl text-white"
                    onClick={handleNavbarToggle}
                  />
                )}
              </div>
            </div>
            <div className="right-nav-part">
              <div className="h-[69px] flex justify-center items-center gap-[50px] md:gap-[24px] lg:gap-[50px]">
                <ul className="flex justify-center items-center font-neueMontreal font-normal space-x-[44px]">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "a  border-0 border-b" : "text-white a"
                    }>
                    <li className={`text-[16px] cursor-pointer `}>Home</li>
                  </NavLink>
                  <div className="flex justify-center items-center gap-[32px]">
                    <li
                      className="text-[16px] flex justify-normal items-center gap-[6px] relative"
                      onClick={handleCategoryToggle}>
                      Category <ArrowDown isOpen={isOpen} />
                      {isOpen && <Dropdown options={categories} type={"c"} />}
                    </li>

                    <li
                      className="text-[16px] flex justify-normal items-center gap-[6px] relative"
                      onClick={handleProductToggle}>
                      Top Products <ArrowDown isOpen={isOpenForProduct} />
                      {isOpenForProduct && <Dropdown options={products} />}
                    </li>
                  </div>
                  <div className="flex justify-center items-center gap-[32px]">
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive ? "a  border-0 border-b" : "text-white a"
                      }>
                      <li className="text-[16px] cursor-pointer">Contact Us</li>
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive ? "a  border-0 border-b" : "text-white a"
                      }>
                      <li className="text-[16px] cursor-pointer">FAQ</li>
                    </NavLink>
                  </div>
                </ul>
                <SocialIcon />
              </div>
              <div className="h-[70px] flex justify-end items-center gap-[30px]">
                <Button text={"Sign Up"} type={"fill"} height={35} width={86} />
                <Button
                  text={"Log In"}
                  type={"unFill"}
                  height={35}
                  width={77}
                />
                <CartIcon cartItemCount={cart?.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNavbarOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-full bg-[#193554ca] backdrop-blur-[50px] shadow-[0px_0px_12px_1px_rgba(29,37,73,0.8)] z-[-1] transition-transform duration-500"
          style={{
            transition: "0.3s",
          }}>
          <div className="h-full flex flex-col justify-between items-center pt-24 w-full">
            <div className="p-4">
              <ul className="font-neueMontreal flex flex-col justify-center items-center gap-5">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "a  border-0 border-b" : "text-white a"
                  }
                  onClick={handleNavbarToggle}>
                  <li className={`text-[16px] cursor-pointer `}>Home</li>
                </NavLink>

                <li
                  className="text-[16px] flex justify-normal items-center gap-[6px] relative"
                  onClick={handleCategoryToggle}>
                  Category <ArrowDown isOpen={isOpen} />
                  {isOpen && <Dropdown options={categories} type={"c"} />}
                </li>

                <li
                  className="text-[16px] flex justify-normal items-center gap-[6px] relative"
                  onClick={handleProductToggle}>
                  Top Products <ArrowDown isOpen={isOpenForProduct} />
                  {isOpenForProduct && <Dropdown options={products} />}
                </li>

                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "a  border-0 border-b" : "text-white a"
                  }>
                  <li className="text-[16px] cursor-pointer">Contact Us</li>
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "a  border-0 border-b" : "text-white a"
                  }>
                  <li className="text-[16px] cursor-pointer">FAQ</li>
                </NavLink>
              </ul>
              <div className="flex flex-col justify-center items-center gap-5 mt-4">
                <Button text={"Sign Up"} type={"fill"} height={35} width={86} />
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
