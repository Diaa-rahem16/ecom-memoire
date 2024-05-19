import React, { useState } from "react";
import ClientInfo from "../../pages/client/ClientInfo";
import ClientProfileModal from "../../pages/admin/ClientProfileModal";
import SellerInfoModal from "../../pages/admin/sellerProfileModel";
const ProductManagementCard = () => {
  const handleConfirmPurchase = () => {
    // Confirm purchase logic here
  };

  const handleShowInfo = () => {
    // Edit item logic here
  };

  const handleDeleteItem = () => {
    // Delete item logic here
  };

  return (
    <div className="grid grid-cols-10 gap-4 items-center w-[90%]  text-white bg-[#1E1E1E] px-4 py-6  rounded-[5px] overflow-hidden">
      <div className="flex col-span-4 flex-col gap-8 justify-between">
        <div
          className="flex overflow-hidden  items-start gap-[4%]"
          style={{ flex: 2 }}
        >
          <img
            className=" aspect-[1/1] w-[70px] border-[1px] mr-2 border-white rounded-[5px]"
            src="../../public/images/img_games.png"
          />
          <div className="flex  flex-col text-white gap-2 pb-2">
            <h4 className="text-[16px] font-[400]">ps5 games</h4>
            <p className="text-[8px] flex-1">
              some of the cool games that i don't
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="flex  justify-center ">
        <p className="color">Diaa</p>{" "}
      </div>

      <div className="flex col-span-5 justify-center items-center">
        <div className="flex gap-2 text-nowrap justify-center  ">
          <button
            className=" bg-blue-600 py-2 px-4  hover:bg-blue-800"
            onClick={handleConfirmPurchase}
          >
            Show Informations
          </button>
          <button
            className="px-2 py-2 text-nowrap bg-red-600 hover:bg-red-800"
            onClick={handleDeleteItem}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementCard;
