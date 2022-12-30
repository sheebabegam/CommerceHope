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
      </Routes>
    </div>
  );
}

export default App;

// ***************************************************************
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import api from "./api/userInfo";
// import { v4 as uuidv4 } from "uuid";
// import ReusableInput from "./User_page/components/ReusableInput";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const [userInfo, setuserInfo] = useState([]);
//   const retriveContacts = async () => {
//     const response = await api.get("/userInfo");
//     return response.data;
//   };
//   // const onSubmit = (data) => console.log(data);
//   const mySubmit = async (data) => {
//     console.log(data);

//     const request = {
//       id: uuidv4(),
//       ...data,
//     };

//     const response = await api.post("/userInfo", request);
//     console.log(response);
//     setuserInfo([...userInfo, response.data]);
//   };

//   useEffect(() => {
//     // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     // if (retriveContacts) setuserInfo(retriveContacts);

//     const getContacts = async () => {
//       const allContacts = await retriveContacts();
//       if (allContacts) setuserInfo(allContacts);
//     };
//     getContacts();
//   }, []);

//   return (
//     <form onSubmit={handleSubmit(mySubmit)}>
//       <ReusableInput {...register("firstName")} />
//       <br />
//       <ReusableInput {...register("lastName")} />
//       <br />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <br />
//       <ReusableInput {...register("phone")} />
//       <br />
//       <ReusableInput {...register("email")} />
//       <br />
//       <ReusableInput {...register("password")} />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// }
