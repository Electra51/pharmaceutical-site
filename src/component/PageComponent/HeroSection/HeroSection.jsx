import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./hero.css";
import SearchItemSection from "../SearchItemSection/SearchItemSection";
import useProducts from "../../../utils/useProducts";

const HeroSection = () => {
  const { products, loading } = useProducts();
  console.log("products", products);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(products);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      const filtered = products.filter((item) =>
        item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems("");
    }
  };

  console.log("filteredItems", filteredItems);
  return (
    <div className="hero_section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="">
            <p className="hero_headText font-impact text-center lg:text-start md:text-start lg:px-0 md:px-0 px-10 md:w-[500px]">
              Prescription Treatments For Your <span>Health Goals</span>
            </p>
            <button className="hero_btn" type="button">
              <span className="font-neueMontreal font-bold">
                Find my treatment
              </span>
            </button>
          </div>
          <div></div>
        </div>
        <div className="hero_search">
          <div className="search font-neueMontreal">
            <input
              type="search"
              className="search_input placeholder:text-white"
              placeholder="Search by product/treatment"
              value={query}
              onChange={handleSearch} // Update the query on input change
            />
            <div className="search_icon">
              <IoSearch className="text-2xl" />
            </div>
          </div>
        </div>
        {filteredItems.length > 0 ? (
          <SearchItemSection items={filteredItems} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeroSection;
