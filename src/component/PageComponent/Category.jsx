import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SupportSection from "./SupportSection";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/category"
        );
        setCategories(response.data);
        console.log(response?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="category_section">
      <div className="category-content">
        <div className="container">
          <p className="section_title mb-20 font-impact">
            Shop by <span className="text-gold-gradient-1">Category</span>
          </p>
        </div>
        <div className="container">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "30px" }}>
            <Masonry>
              {categories.map((category, i) => {
                console.log("ca", category);
                return (
                  <div
                    key={i}
                    className="category-item w-[370px] relative mt-[15px]">
                    <p
                      className={`text-[36px] font-medium font-neueMontreal absolute top-[24px] z-10 left-[24px] ${
                        i === 3 || i === 4 || i === 5
                          ? "w-[217px]"
                          : "w-[154px]"
                      } text-wrap leading-[120%]`}>
                      {category.name}
                    </p>

                    <img
                      src={category.image}
                      alt={category.name}
                      style={{ width: "100%", display: "block" }}
                      className="relative"
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <SupportSection />
      </div>
    </div>
  );
};

export default Category;
