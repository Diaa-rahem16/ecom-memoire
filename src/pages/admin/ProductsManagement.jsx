import { useState } from "react";
import ProductManagementCard from "../../components/Admin/ProductManagementCard.jsx";
const ProductsManagement = () => {
  let [clicked, setClicked] = useState(false);
  const handleShowInfoClick = () => {
    setClicked(!clicked);
  };

  const handleClick = (event) => {
    const { name } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div>
      <div id="seller-orders">
        <div className="title">
          <h2>
            Proudcts Management
            <br />
            <span>(Consuluting and Deleting)</span>
          </h2>
        </div>
        <div className="flex justify-between  gap-12 px-40 w-[90%]">
          <div className="flex gap-4 items-center">
            <label className="font-bold text-2xl text-nowrap">
              Search by name
            </label>

            <input
              type="text"
              name="SearchByName"
              className="product-input"
              placeholder="Search by name"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="font-bold text-2xl text-nowrap">
              Search by id
            </label>

            <input
              type="text"
              name="SearchById"
              className="product-input"
              placeholder="Search by name"
            />
          </div>
          <button className="button px-4 py-2">Search</button>
        </div>
        <hr className="w-full outline-none border-blue-500 my-4 opacity-80" />
        <div className="relative">
          <div className="orders ">
            <div className="w-[95%] mb-[-20px] ">
              <div className="grid grid-cols-10 w-[100%] my-4 pl-12">
                <p className="col-span-4 ml-4"> Product</p>
                <p className="col-span-1 ml-4">Seller</p>
                <p className="col-span-5 ml-4 text-center">Management</p>
              </div>
              <hr className="w-full outline-none border-blue-500 my-4 opacity-80" />
            </div>

            <ProductManagementCard userType={"client"} />
            <ProductManagementCard userType={"seller"} />
            <ProductManagementCard userType={"client"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagement;
