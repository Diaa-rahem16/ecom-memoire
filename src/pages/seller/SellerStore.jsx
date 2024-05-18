import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer.jsx";

import { data } from "../../constantes/index.js";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const SellerStore = () => {
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
  const [profilePic, setProfilePic] = useState("");
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedMiniCategory, setSelectedMiniCategory] = useState(
    categories[0].miniCategories[0]
  );
  const [newProduct, setNewProduct] = useState({
    productName: "",
    description: "",
    price: "",
    color: "",
    size: "",
    image: "",
    category: categories[0].name,
    miniCategory: categories[0].miniCategories[0].label,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    const category = categories.find(
      (category) => category.name === e.target.value
    );
    setSelectedCategory(category);
    setSelectedMiniCategory(category.miniCategories[0]);
    setNewProduct({
      ...newProduct,
      category: category.name,
      miniCategory: category.miniCategories[0].label,
    });
  };

  const handleMiniCategoryChange = (e) => {
    const miniCategory = selectedCategory.miniCategories.find(
      (miniCategory) => miniCategory.label === e.target.value
    );
    setSelectedMiniCategory(miniCategory);
    setNewProduct({
      ...newProduct,
      miniCategory: miniCategory.label,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log(newProduct);
  };

  return (
    <div id="seller-store">
      <section id="store-info">
        <h2>Store information</h2>
        <hr />

        <div className="seller-card">
          <div className="mr-12">
            <label className="label">Profile Picture</label>
            <div
              onClick={() => document.getElementById("profilePicInput").click()}
              className="w-40 h-40 border border-black rounded-full overflow-hidden cursor-pointer"
            >
              {profilePic ? (
                <img src={profilePic} alt="Profile" className=" bg-contain" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUserCircle size={80} className="w-full h-full" />
                </div>
              )}
            </div>
            <input
              id="profilePicInput"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
          </div>
          <div>
            <h4 className="name">TheWhite</h4>
            <p className="type">Individual</p>
            <p className="rating">
              Rating: 8/10 <span className="type">(250 person)</span>
            </p>
            <p className="email">theWhite@gmail.com</p>
          </div>
        </div>
      </section>
      <section id="store-prod">
        <div className="flex justify-between items-end ">
          <h2>Products</h2>
          <button onClick={openModal} className="mb-4">
            Add product
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-smoke-dark flex items-center justify-center bg-slate-600 bg-opacity-20 py-4">
              <div className="relative p-6 bg-white w-full max-w-md m-auto flex-col flex">
                <span
                  className="absolute top-0 right-0 cursor-pointer p-4 hover:bg-red-500 hover:text-white inline-blockrounded "
                  onClick={closeModal}
                >
                  X
                </span>
                <form onSubmit={handleSubmit} className="w-full py-4">
                  <label className="block mb-4">
                    <span className="text-gray-700">Product Name:</span>
                    <input
                      type="text"
                      name="productName"
                      value={newProduct.productName}
                      onChange={handleInputChange}
                      className="mt-3 block w-full rounded-md border-gray-300 border-[0.2px]  p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Description:</span>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Price:</span>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Color:</span>
                    <input
                      type="text"
                      name="color"
                      value={newProduct.color}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Size:</span>
                    <input
                      type="text"
                      name="size"
                      value={newProduct.size}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Image:</span>
                    <input
                      type="file"
                      name="image"
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Category:</span>
                    <select
                      name="category"
                      value={selectedCategory.name}
                      onChange={handleCategoryChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    >
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Mini Category:</span>
                    <select
                      name="miniCategory"
                      value={selectedMiniCategory.label}
                      onChange={handleMiniCategoryChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    >
                      {selectedCategory.miniCategories.map((miniCategory) => (
                        <option
                          key={miniCategory.label}
                          value={miniCategory.label}
                        >
                          {miniCategory.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <input
                    type="submit"
                    value="Add Product"
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  />
                </form>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="grid-container-2 my-4 padding-x">
          {data.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              imgUrl={product.imgUrl}
              sellerName={product.sellerName}
              name={product.productName}
              description={product.description}
              price={product.price}
              className=""
            />
          ))}
          {/* Corrected props */}
          <ProductCard
            id="" //? data.id
            data={{
              photos:
                "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
              sellerName: "dior",
              name: "Sauvage perfume",
              discrtiption: "100ml of eau de toilette of perfume of Dior",
              price: "2500",
            }}
          />
          <ProductCard
            id="" //? data.id
            data={{
              photos:
                "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
              sellerName: "dior",
              name: "Sauvage perfume",
              discrtiption: "100ml of eau de toilette of perfume of Dior",
              price: "2500",
            }}
          />
          <ProductCard
            id="" //? data.id
            data={{
              photos:
                "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
              sellerName: "dior",
              name: "Sauvage perfume",
              discrtiption: "100ml of eau de toilette of perfume of Dior",
              price: "2500",
            }}
          />
          <ProductCard
            id="" //? data.id
            data={{
              photos:
                "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
              sellerName: "dior",
              name: "Sauvage perfume",
              discrtiption: "100ml of eau de toilette of perfume of Dior",
              price: "2500",
            }}
          />
          <ProductCard
            id="" //? data.id
            data={{
              photos:
                "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
              sellerName: "dior",
              name: "Sauvage perfume",
              discrtiption: "100ml of eau de toilette of perfume of Dior",
              price: "2500",
            }}
          />
          <ProductCard
            id="" //? data.id
            imgUrl={
              "https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7"
            }
            sellerName="dior"
            name="Sauvage perfume"
            description="100ml of eau de toilette of perfume of Dior"
            price="2500"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SellerStore;