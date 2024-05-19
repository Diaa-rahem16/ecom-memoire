import SellerProductCard from "../../components/SellerProductCard";
import Footer from "../../components/Footer.jsx";

import { data } from "../../constantes/index.js";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ProductForm from "../../components/products/ProductForm.jsx";
const SellerStore = () => {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle the form submission here
  // };

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
            <div className="fixed inset-0  z-50 overflow-auto bg-smoke-dark flex items-center justify-center bg-slate-600 bg-opacity-20 py-4">
              <div className="relative p-6 bg-white w-[500pc] max-w-md m-auto flex-col flex ">
                <span
                  className="absolute top-0 right-0 cursor-pointer p-4 hover:bg-red-500 hover:text-white inline-blockrounded "
                  onClick={closeModal}
                >
                  X
                </span>
                <ProductForm />
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="grid-container-2 my-4 padding-x">
          {data.slice(0, 4).map((product, index) => (
            <SellerProductCard
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
          <SellerProductCard
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
          <SellerProductCard
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
          <SellerProductCard
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
          <SellerProductCard
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
          <SellerProductCard
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
          <SellerProductCard
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
