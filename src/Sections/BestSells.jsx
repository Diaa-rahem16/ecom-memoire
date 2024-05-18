import ProductCard from "../components/ProductCard";
import { data } from "../constantes/index";

const BestSells = () => {
  return (
    <section className=" padding-x py-4 my-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-montserrat font-medium text-text">
          Best Sells
        </h1>
        <a href="/" className="see-link  ">
          See All
          <img
            className="inline h-[12px] text-accent ml-2"
            src="../../public/icons/arrow_left.svg"
          />
        </a>
      </div>

      <div className="grid-container ">
        {data.slice(0, 5).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            discrtiption={product.discrtiption}
            price={product.price}
            className="bg-white text-text"
          />
        ))}
      </div>
    </section>
  );
};

export default BestSells;
