import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SellerProductCard = ({
  imgUrl,
  sellerName,
  name,
  discrtiption,
  price,
}) => {
  const product = { imgUrl, sellerName, name, discrtiption, price };
  console.log(product);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seller/home/edit-product", { state: { product } });
  };

  return (
    <div id="product-card" onClick={handleClick}>
      <img src={imgUrl} alt={name} />
      <div className="content">
        <div className="left">
          <h3>{sellerName}</h3>
          <h4>{name}</h4>
          <p>{discrtiption}</p>
        </div>
        <div className="right">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
