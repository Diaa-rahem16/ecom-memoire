import React from "react";

const ProductDetailsPage = ({ productData }) => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={productData.images[0]}
            alt={productData.name}
            className="max-w-full h-96 object-contain mb-4"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="h-20 w-20 object-cover rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
          <p className="text-gray-700 mb-4">{productData.description}</p>
          <p className="text-2xl font-bold mb-4">Price: ${productData.price}</p>
          <p className="mb-2">
            <span className="font-bold">Category:</span> {productData.category}
          </p>
          <p className="mb-2">
            <span className="font-bold">Subcategory:</span>{" "}
            {productData.subcategory}
          </p>
          <div className="mb-4">
            <span className="font-bold">Colors:</span>
            <div className="flex flex-wrap gap-2">
              {productData.colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold">Sizes:</span>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((size, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold">Dimensions:</span>
            <div className="flex flex-wrap gap-2">
              {productData.dimensions.map((dimension, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                >
                  {dimension}
                </span>
              ))}
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
