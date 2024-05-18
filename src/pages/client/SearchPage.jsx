import SearchHeader from "../../components/Header/SearchHeader";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { data, data1, data2 } from "../../constantes/index.js";

const SearchPage = () => {
  return (
    <div className="overflow-x-auto">
      <SearchHeader />
      <h1 className="text-3xl font-bold padding-x my-8">Search Results</h1>
      <div className="grid grid-cols-5  gap-x-8 gap-y-8 padding-x sm:flex sm:flex-col my-12">
        {data.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            description={product.description}
            price={product.price}
          />
        ))}
        {data.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            description={product.description}
            price={product.price}
          />
        ))}
        {data1.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            description={product.description}
            price={product.price}
          />
        ))}
        {data2.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            imgUrl={product.imgUrl}
            sellerName={product.sellerName}
            name={product.productName}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
