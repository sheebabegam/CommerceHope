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
        <Route
          path="/commercehope/product-details"
          element={<ProductDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
// import HomeIcon from "@mui/icons-material/Home";

// export default function App(props) {
//   const classes = useStyles();
//   var items = [
//     {
//       img: "https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669531943%2Fmy-uploads%2Fszujuf4ml5cgs5dd6dtb.jpg&w=1920&q=75",
//     },
//     {
//       img: "https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669531956%2Fmy-uploads%2Ffrk2rc11ruhouqfeejyw.jpg&w=1920&q=75",
//     },
//   ];

//   return (
//     <div>
//       {items.map((item, i) => (
//         <Carousel
//           IndicatorIcon={
//             <img
//               src={item.img}
//               alt="img"
//               style={{ height: "20px", width: "20px" }}
//             />
//           } // Previous Example
//           indicatorIconButtonProps={{
//             style: {
//               padding: "10px", // 1
//               color: "blue", // 3
//               backgroundImage: `url("https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669531943%2Fmy-uploads%2Fszujuf4ml5cgs5dd6dtb.jpg&w=1920&q=75")`,
//             },
//           }}
//           activeIndicatorIconButtonProps={{
//             style: {
//               backgroundColor: "red", // 2
//             },
//           }}
//           indicatorContainerProps={{
//             style: {
//               marginTop: "50px", // 5
//               textAlign: "right", // 4
//             },
//           }}
//         >
//           {items.map((item, i) => (
//             <img src={item.img} alt="img" />
//           ))}
//         </Carousel>
//       ))}
//     </div>
//   );
// }

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }

// const useStyles = makeStyles({
//   buttonWrapper: {
//     position: "absolute",
//     height: "100px",
//     backgroundColor: "transparent",
//     top: "calc(50% - 70px)",
//     "&:hover": {
//       "& $button": {
//         backgroundColor: "black",
//         filter: "brightness(120%)",
//         opacity: "0.4",
//       },
//     },
//   },
//   fullHeightHoverWrapper: {
//     height: "100%",
//     top: "0",
//   },
//   buttonVisible: {
//     opacity: "1",
//   },
//   buttonHidden: {
//     opacity: "0",
//   },
//   button: {
//     margin: "0 10px",
//     position: "relative",
//     backgroundColor: "#494949",
//     top: "calc(50% - 20px) !important",
//     color: "white",
//     fontSize: "30px",
//     transition: "200ms",
//     cursor: "pointer",
//     "&:hover": {
//       opacity: "0.6 !important",
//     },
//   },
//   // Applies to the "next" button wrapper
//   next: {
//     right: 0,
//   },
//   // Applies to the "prev" button wrapper
//   prev: {
//     left: 0,
//   },
// });
