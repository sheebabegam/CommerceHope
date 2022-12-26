import Route_page from "./Route_page";
import { Route, Routes } from "react-router-dom";
import Login from "./User_page/Pages/Login";
import Register from "./User_page/Pages/Register";
import Forget_password from "./User_page/Pages/Forget_password";
import Landing_Page from "./User_page/Pages/Landing_Page";
import All_category from "./User_page/assets/JSON_data/All_category.json";
import Feature_prod from "./User_page/assets/JSON_data/Feature_prod.json";
import ProductPage from "./User_page/Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Route_page />} />
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
          path="/commercehope/forget-password"
          element={<Forget_password />}
        />
        <Route
          path="/commercehope/product-page"
          element={<ProductPage All_category={All_category} />}
        />
      </Routes>
    </div>
  );
}

export default App;
