import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ClientInfo from "./pages/client/ClientInfo";
import SellerInfo from "./pages/seller/SellerInfo";
import SearchPage from "./pages/client/SearchPage";
import ClientProfile from "./pages/client/ClientProfile";
import ClientHome from "./pages/client/ClientHome.jsx";
import AboutUs from "./pages/AboutUs";
import SellerLayout from "./layouts/SellerLayout";
import ClientLayout from "./layouts/ClientLayout";
import SellerHome from "./pages/seller/SellerHome";
import SellerStore from "./pages/seller/SellerStore";
import SellerOrders from "./pages/seller/SellerOrders";
import NotFoundPage from "./pages/NotFoundPage";
import SellerProfile from "./pages/seller/SellerProfile";
import CheckOut from "./pages/client/CheckOut.jsx";
import CategoryPage from "./pages/seller/CategoryPage.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdmineHome from "./pages/admin/AdminHome.jsx";
import UserMangement from "./pages/admin/UserMangement.jsx";
import AdminQA from "./pages/admin/AdminQA.jsx";
import ReportTreatment from "./pages/admin/ReportTreatment.jsx";
import ProductsManagement from "./pages/admin/ProductsManagement.jsx";
import AdminProfile from "./pages/admin/AdminProfile.jsx";
import SellerEditProduct from "./pages/seller/SellerEditProduct.jsx";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        {/* //? _unAuth pathes */}
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="register/client" element={<ClientInfo />} />
          <Route path="register/seller" element={<SellerInfo />} />
        </Route>
        {/* //? client pathes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="home" element={<ClientHome />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="profile" element={<ClientProfile />} />
          <Route path="cart" element={<CheckOut />} />
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFoundPage dest="/client/home" />} />
        </Route>
        <Route path="/client/search" element={<SearchPage />} />
        {/* //? seller pathes */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route path="profile" element={<SellerProfile />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route
            path="*"
            element={<NotFoundPage dest="/seller/home/store" />}
          />
        </Route>
        <Route path="/seller/home" element={<SellerHome />}>
          <Route path="store" element={<SellerStore />} />
          <Route path="edit-product" element={<SellerEditProduct />} />

          <Route path="orders" element={<SellerOrders />} />
          <Route
            path="*"
            element={<NotFoundPage dest="/seller/home/store" />}
          />
        </Route>
        {/* //? admin pathes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdmineHome />} />
          <Route path="users" element={<UserMangement />} />
          <Route path="help" element={<AdminQA />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="reports" element={<ReportTreatment />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="product-managemnt" element={<ProductsManagement />} />
          <Route path="*" element={<NotFoundPage dest="/admin/home" />} />
        </Route>
        <Route path="*" element={<NotFoundPage dest="/" />} />
      </Routes>
    </>
  );
}

export default App;
