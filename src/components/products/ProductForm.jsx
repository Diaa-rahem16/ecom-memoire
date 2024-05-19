import React, { useState } from "react";

const ProductForm = () => {
  const categories = [
    {
      name: "Electronics",
      miniCategories: [
        { link: "#", label: "Computers&Tablets" },
        { link: "#", label: "CellPhones" },
        { link: "#", label: "TV&Home Theater" },
        { link: "#", label: "VideoGames&Consoles" },
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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedMiniCategory, setSelectedMiniCategory] = useState(
    categories[0].miniCategories[0]
  );
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: categories[0].name,
    miniCategory: categories[0].miniCategories[0].label,
    colors: [],
    sizes: [],
    dimensions: [],
    images: [],
  });

  //   cateogries data

  //   end catogeries data
  // handle Category Change
  const handleCategoryChange = (e) => {
    const category = categories.find(
      (category) => category.name === e.target.value
    );
    setSelectedCategory(category);
    setSelectedMiniCategory(category.miniCategories[0]);
    setProductData({
      ...productData,
      category: category.name,
      miniCategory: category.miniCategories[0].label,
    });
  };
  const handleMiniCategoryChange = (e) => {
    const miniCategory = selectedCategory.miniCategories.find(
      (miniCategory) => miniCategory.label === e.target.value
    );
    setSelectedMiniCategory(miniCategory);
    setProductData({
      ...productData,
      miniCategory: miniCategory.label,
    });
  };
  //   end catogires changes
  //   handle Changes

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    if (e.key === "Enter") {
      const newColor = e.target.value.trim();
      if (newColor && !productData.colors.includes(newColor)) {
        setProductData({
          ...productData,
          colors: [...productData.colors, newColor],
        });
        e.target.value = "";
      }
    }
  };

  //   handle delete size
  const handleSizeDelete = (index) => {
    setProductData((prevState) => {
      const sizes = [...prevState.sizes];
      sizes.splice(index, 1);
      return { ...prevState, sizes };
    });
  };
  //   handle delete color
  const handleColorDelete = (index) => {
    setProductData((prevState) => {
      const colors = [...prevState.colors];
      colors.splice(index, 1);
      return { ...prevState, colors };
    });
  };
  // handle delete dimenisinos
  const handleDimensionDelete = (index) => {
    setProductData((prevState) => {
      const dimensions = [...prevState.dimensions];
      dimensions.splice(index, 1);
      return { ...prevState, dimensions };
    });
  };
  const handleSizeChange = (e) => {
    if (e.key === "Enter") {
      const newSize = e.target.value.trim();
      if (newSize && !productData.sizes.includes(newSize)) {
        setProductData({
          ...productData,
          sizes: [...productData.sizes, newSize],
        });
        e.target.value = "";
      }
    }
  };

  const handleDimensionChange = (e) => {
    if (e.key === "Enter") {
      const newDimension = e.target.value.trim();
      if (newDimension && !productData.dimensions.includes(newDimension)) {
        setProductData({
          ...productData,
          dimensions: [...productData.dimensions, newDimension],
        });
        e.target.value = "";
      }
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setProductData({
      ...productData,
      images: [...productData.images, ...newImages],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and create the product page
    console.log(productData);
  };

  return (
    <div className="max-w-5xl text-nowrap mx-auto py-8 px-12 z-50">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="product-input"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="product-input"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="product-input"
          />
        </div>
        <div>
          <label className="block ">
            <span className="text-gray-700">Category:</span>
            <select
              name="category"
              value={selectedCategory.name}
              onChange={handleCategoryChange}
              className="mt-2 block w-full rounded-md border-gray-300  p-2 product-input"
            >
              {categories.map((category) => (
                <option
                  key={category.name}
                  value={category.name}
                  className="mt-4"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="block ">
            <span className="text-gray-700">Mini Category:</span>
            <select
              name="miniCategory"
              value={selectedMiniCategory.label}
              onChange={handleMiniCategoryChange}
              className="mt-1 block w-full rounded-md border-gray-300  p-2 product-input"
            >
              {selectedCategory.miniCategories.map((miniCategory) => (
                <option key={miniCategory.label} value={miniCategory.label}>
                  {miniCategory.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="colors" className="block font-medium text-gray-700">
            Colors
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              id="colors"
              onKeyDown={handleColorChange}
              placeholder="Enter a color and press Enter"
              className="product-input"
            />
            <div className="flex flex-wrap gap-2">
              {productData.colors.map((color, index) => (
                <span
                  key={index}
                  className="relative inline-flex items-center rounded-xl font-bold  text-[15px] bg-gray-200 text-gray-800 py-3 px-5"
                >
                  {color}
                  <span
                    onClick={() => handleColorDelete(index)}
                    className="ml-2 cursor-pointer bg-white rounded-full absolute top-0 right-0  py-[1px] px-1 text-red-500 font-bold text-[15px]"
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="sizes" className="block font-medium text-gray-700">
            Sizes
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              id="sizes"
              onKeyDown={handleSizeChange}
              placeholder="Enter a size and press Enter"
              className="product-input"
            />
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((size, index) => (
                <span
                  key={index}
                  className="relative inline-flex items-center rounded-xl font-bold text-[15px] bg-gray-200 text-gray-800 py-3 px-5"
                >
                  {size}
                  <span
                    onClick={() => handleSizeDelete(index)}
                    className="ml-2 cursor-pointer rounded-full absolute top-0 right-0 py-[1px] px-1 text-red-500 font-bold text-[15px]"
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="dimensions"
            className="block font-medium text-gray-700"
          >
            Dimensions
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              id="dimensions"
              onKeyDown={handleDimensionChange}
              placeholder="Enter a dimension and press Enter"
              className="product-input"
            />
            <div className="flex flex-wrap gap-2">
              {productData.dimensions.map((dimension, index) => (
                <span
                  key={index}
                  className="relative inline-flex items-center rounded-xl font-bold text-[15px] bg-gray-200 text-gray-800 py-3 px-5"
                >
                  {dimension}
                  <span
                    onClick={() => handleDimensionDelete(index)}
                    className="ml-2 cursor-pointer bg-white rounded-full absolute top-0 right-0 py-[1px] px-1 text-red-500 font-bold text-[15px]"
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="images" className="block font-medium text-gray-700">
            Images
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageUpload}
              className="product-input"
            />
            <div className="flex flex-wrap gap-2">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index}`}
                  className="h-20 w-20 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default ProductForm;
