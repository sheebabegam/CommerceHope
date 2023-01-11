import Route_page from "./Route_page";
import { Route, Routes } from "react-router-dom";
import Login from "./User_page/Pages/Login";
import Register from "./User_page/Pages/Register";
import Forget_password from "./User_page/Pages/Forget_password";
import Landing_Page from "./User_page/Pages/Landing_Page";
import All_category from "./User_page/assets/JSON_data/All_category.json";
import Feature_prod from "./User_page/assets/JSON_data/Feature_prod.json";
import ProductPage from "./User_page/Pages/ProductPage";
import ProductDetails from "./User_page/Pages/ProductDetails";
import RelatedProducts from "./User_page/assets/JSON_data/RelatedProducts.json";
import ProductGridView from "./User_page/Pages/ProductGridView";
import All_data from "./User_page/assets/JSON_data/All_data.json";
import RegisterNoReuse from "./User_page/Pages/RegisterNoReuse";
import Checkout from "./User_page/Pages/Checkout";
import Navbar from "./User_page/Layouts/Navbar";
import AdminLogin from "./Dashboard_Page/Pages/Admin/AdminLogin";
import AdminRegister from "./Dashboard_Page/Pages/Admin/AdminRegister";
import DashBoard from "./Dashboard_Page/Pages/Dashboard/DashBoard";
import Categories from "./Dashboard_Page/Pages/Categories/Categories";
import Products from "./Dashboard_Page/Pages/Products/Products";
import Orders from "./Dashboard_Page/Pages/Orders/Orders";
import Users from "./Dashboard_Page/Pages/Users/Users";
import Newsletter from "./Dashboard_Page/Pages/Newsletter/Newsletter";
import Settings from "./Dashboard_Page/Pages/Settings/Settings";
import Edit_Categories from "./Dashboard_Page/Pages/Categories/EditCategories";
import AddCategories from "./Dashboard_Page/Pages/Categories/AddCategories";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Route_page />} />
        <Route path="/nav" element={<Navbar />} />
        <Route
          path="/commercehope"
          element={
            <Landing_Page
              All_category={All_category}
              Feature_prod={Feature_prod}
            />
          }
        />
        <Route path="/commercehope/login" element={<Login />} />
        <Route path="/commercehope/register" element={<Register />} />
        <Route
          path="/commercehope/register-reuse"
          element={<RegisterNoReuse />}
        />
        <Route
          path="/commercehope/forget-password"
          element={<Forget_password />}
        />
        <Route
          path="/commercehope/product-page"
          element={<ProductPage All_data={All_data} />}
        />
        <Route
          path="/commercehope/product-details"
          element={<ProductDetails RelatedProducts={RelatedProducts} />}
        />
        <Route
          path="/commercehope/product-list-view"
          element={<ProductGridView />}
        />
        <Route path="/commercehope/product-checkout" element={<Checkout />} />

        <Route path="/admin-dashboard-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard-register" element={<AdminRegister />} />
        <Route path="/admin-dashboard" element={<DashBoard />} />
        <Route path="/admin-categories" element={<Categories />} />
        <Route path="/admin-products" element={<Products />} />
        <Route path="/admin-orders" element={<Orders />} />
        <Route path="/admin-users" element={<Users />} />
        <Route path="/admin-newsletter" element={<Newsletter />} />
        <Route path="/admin-settings" element={<Settings />} />
        <Route path="/admin-edit-categories" element={<Edit_Categories />} />
        <Route path="/admin-add-categories" element={<AddCategories />} />
      </Routes>
    </div>
  );
}

export default App;

// ***************************************************************
