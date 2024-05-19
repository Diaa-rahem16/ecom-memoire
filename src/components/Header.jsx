import CategoryList from "./Header/HeaderLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-fixed text-text ">
      <nav className="flex w-full bg-white justify-around py-6 px-4 sm:px-6 md:px-8 lg:px-10 padding-x items-center relative">
        <Link to="/home">
          <h1 className="text-5xl sm:text-xl md:text-4xl  font-bold font-Palanquin  text-primary">
            ElMerchi
          </h1>
        </Link>
        <ul className="flex gap-12 sm:gap-4 md:gap-6 lg:gap-10 text-xl sm:text-sm md:text-base font-medium justify-center items-center sm:text-[12px]">
          <li>
            <Link
              className="bg-[#ec4c47] text-white  sm:text-[12px] md:text-base font-bold rounded-full px-8 sm:px-4 md:px-8 py-3 sm:py-2 hover:opacity-90 ease-500"
              to="/client/home"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/client/about-us">About</Link>
          </li>
          <li className="">
            <Link to="*">Help</Link>
          </li>
        </ul>

        <div className="flex gap-4 sm:gap-3 md:gap-4 ">
          <Link to="/client/search">
            <img className="h-[25px]" src="../../public/icons/img_rewind.svg" />{" "}
          </Link>

          <Link
            className="inline-block text-xs sm:text-sm md:text-base relative"
            to="/client/cart"
          >
            <img
              className="h-[25px] hover:opacity-85"
              src="../../public/icons/bag.svg"
            />
            <span className="absolute left-[50%] transform -translate-x-[50%] text-[16px]">
              (0)
            </span>
          </Link>
          <Link to="/client/profile">
            <img className="h-[25px]" src="../../public/icons/img_lock.svg" />
          </Link>
        </div>
      </nav>
      <CategoryList />
      <div className="w-full h-8 text-xs sm:text-sm md:text-base font-bold bg-secondary  flex justify-center items-center leading-tight">
        <p>free shipping on all orders over 10000DA</p>
      </div>
    </header>
  );
};

export default Header;
