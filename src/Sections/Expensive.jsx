import ProductCard from "../components/ProductCard";
import { data1 } from "../constantes/index";

const Expensive = () => {
  return (
    <section
      className=" padding-x py-2  mb-12
    "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-montserrat font-medium">Expensive</h1>
        <a href="/" className="text-lg see-link">
          {" "}
          See All{" "}
          <img
            className="inline h-[12px]"
            src="../../public/icons/arrow_left.svg"
          />{" "}
        </a>
      </div>
      <div className="grid-container">
        {data1.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            discrtiption={product.discrtiption}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Expensive;
