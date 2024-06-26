import React, { useState } from "react";
import optionIcon from "../../../public/icons/options.png";

const categories = [
  {
    name: "Electronics",
    miniCategories: [
      { link: "#", label: "Computers & Tablets" },
      { link: "#", label: "Cell Phones" },
      { link: "#", label: "TV & Home Theater" },
      { link: "#", label: "Video Games & Consoles" },
    ],
  },
  {
    name: "Accessories",
    miniCategories: [
      { link: "#", label: "Watches" },
      { link: "#", label: "Jewelry" },
      { link: "#", label: "Handbags & Wallets" },
      { link: "#", label: "Sunglasses" },
    ],
  },
  {
    name: "Clothes",
    miniCategories: [
      { link: "#", label: "Men's Clothing" },
      { link: "#", label: "Women's Clothing" },
      { link: "#", label: "Kid's Clothing" },
      { link: "#", label: "Shoes" },
    ],
  },
  {
    name: "Kitchen",
    miniCategories: [
      { link: "#", label: "Cookware" },
      { link: "#", label: "Small Appliances" },
      { link: "#", label: "Kitchen Utensils & Gadgets" },
      { link: "#", label: "Dinnerware" },
    ],
  },
  {
    name: "Gaming",
    miniCategories: [
      { link: "#", label: "Video Games" },
      { link: "#", label: "Gaming Consoles" },
      { link: "#", label: "Gaming Accessories" },
      { link: "#", label: "PC Gaming" },
    ],
  },
  {
    name: "Home Garden",
    miniCategories: [
      { link: "#", label: "Furniture" },
      { link: "#", label: "Decor" },
      { link: "#", label: "Gardening Supplies" },
      { link: "#", label: "Outdoor Living" },
    ],
  },
  {
    name: "Books",
    miniCategories: [
      { link: "#", label: "Fiction" },
      { link: "#", label: "Non-fiction" },
      { link: "#", label: "Children's Books" },
      { link: "#", label: "Textbooks" },
    ],
  },
  {
    name: "Sports",
    miniCategories: [
      { link: "#", label: "Exercise & Fitness" },
      { link: "#", label: "Outdoor Recreation" },
      { link: "#", label: "Sports Gear" },
      { link: "#", label: "Fan Shop" },
    ],
  },
  {
    name: "Automotive",
    miniCategories: [
      { link: "#", label: "Car Parts" },
      { link: "#", label: "Car Accessories" },
      { link: "#", label: "Motorcycles & ATVs" },
      { link: "#", label: "Tires & Wheels" },
    ],
  },
  {
    name: "Health",
    miniCategories: [
      { link: "#", label: "Makeup" },
      { link: "#", label: "Skin Care" },
      { link: "#", label: "Hair Care" },
      { link: "#", label: "Personal Care" },
    ],
  },
  {
    name: "Toys & Games",
    miniCategories: [
      { link: "#", label: "Action Figures" },
      { link: "#", label: "Board Games" },
      { link: "#", label: "Dolls & Plush" },
      { link: "#", label: "Educational Toys" },
    ],
  },
];

const SearchInput = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMiniCategory, setSelectedMiniCategory] = useState("");

  const handleOptionClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedMiniCategory(""); // Reset mini category when category changes
  };

  const handleMiniCategoryChange = (event) => {
    setSelectedMiniCategory(event.target.value);
  };

  const currentMiniCategories =
    categories.find((category) => category.name === selectedCategory)
      ?.miniCategories || [];

  return (
    <div className="relative pl-4 h-12 flex items-center justify-between bg-white rounded-lg shadow-md w-[40%] z-20">
      <input
        type="text"
        name="text"
        id="input"
        placeholder="Search"
        className="w-40 h-full border-none text-xl outline-none font-semibold text-gray-700"
        aria-label="Search input"
      />
      <div className="flex items-center relative">
        <div className="px-3 border-r border-gray-300">
          <svg
            viewBox="0 0 512 512"
            className="w-3 h-3 text-gray-700"
            aria-hidden="true"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        </div>
        <button
          onClick={handleOptionClick}
          className="p-3 h-full border-none bg-transparent cursor-pointer transition-colors duration-300 hover:bg-red-300"
          aria-label="Options"
        >
          <img src={optionIcon} alt="Options" className="h-4 w-4" />
        </button>
        {showOptions && (
          <div className="absolute top-full left-0 mt-1 w-64 p-4 bg-gray-100 rounded shadow-lg z-50">
            <select
              className="w-full mb-2 p-2 border rounded "
              aria-label="Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              className="w-full mb-2 p-2 border rounded"
              aria-label="MiniCategory"
              value={selectedMiniCategory}
              onChange={handleMiniCategoryChange}
              disabled={!selectedCategory}
            >
              <option value="" disabled>
                Select MiniCategory
              </option>
              {currentMiniCategories.map((miniCategory, index) => (
                <option key={index} value={miniCategory.label}>
                  {miniCategory.label}
                </option>
              ))}
            </select>
            <select
              className="w-full mb-2 p-2 border rounded"
              aria-label="Discount"
            >
              <option value="" disabled selected>
                Discount
              </option>
              {/* Add your discounts here */}
            </select>
            <select
              className="w-full mb-2 p-2 border rounded"
              aria-label="Discount"
            >
              <option value="" disabled selected>
                Type
              </option>
              {/* Add your type here */}
            </select>
            <button
              className="w-full p-2 bg-blue-500 text-white rounded"
              aria-label="Confirm"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
