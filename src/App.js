import logo from "./logo.svg";
import "./App.css";
import Live_preview_page from "./Live_preview_page";
import { Route, Routes } from "react-router-dom";
import Landing_Page from "./Frontend_Page/components/Landing_Page";
import Login from "./Frontend_Page/components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Live_preview_page />} />
        <Route path="/commercehope" element={<Landing_Page />} />
        <Route path="/commercehope/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button, Typography } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
// import caro_img from "./assets/images/caro_img.png";

// function App(props) {
//   const classes = useStyles();
//   const items = [
//     {
//       big_txt: "Top Products Of The Year.",
//       small_txt: "20% off on Top Quality Products and Free Shipping.",
//       shop: "Shop Now",
//       see: "See All",
//       img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-1.1418341e.png&w=1920&q=75",
//     },
//     {
//       big_txt: "Summer Colors in Formal Details",
//       small_txt: "30% off on Men Shirts and Free Shipping.",
//       shop: "Shop Now",
//       see: "See All",
//       img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-2.7897a061.png&w=1920&q=75",
//     },
//     {
//       big_txt: "Summer Colors in Formal Details",
//       small_txt: "30% off on Men Shirts and Free Shipping.",
//       shop: "Shop Now",
//       see: "See All",
//       img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-3.a9484857.png&w=1920&q=75",
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} {...item} />
//       ))}
//     </Carousel>
//   );
// }

// const Item = ({ big_txt, small_txt, shop, see, img }) => {
//   const classes = useStyles();
//   return (
//     <Paper
//       className={classes.background_carousel}
//       style={{ backgroundImage: `url(${img})` }}
//     >
//       <div className={classes.card_div_caro}>
//         <Typography
//           variant="h1"
//           className={classes.big_caro_txt}
//           style={{ fontWeight: 700 }}
//         >
//           {big_txt}
//         </Typography>
//         <Typography variant="h6" className={classes.small_caro_txt}>
//           {small_txt}
//         </Typography>
//         <Button
//           variant="contained"
//           className={classes.shop_caro_btn}
//           style={{ fontWeight: 700 }}
//         >
//           Shop Now
//         </Button>
//         <Button
//           variant="contained"
//           className={classes.see_caro_btn}
//           style={{ fontWeight: 700 }}
//         >
//           See All
//         </Button>
//       </div>
//     </Paper>
//   );
// };

// export default App;

// const useStyles = makeStyles({
//   background_carousel: {
//     height: 500,
//     maxWidth: "100%",
//     justifyContent: "flex-start",

//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     alignContent: "stretch",
//   },
//   card_div_caro: {
//     width: "35% !important",
//     padding: "24px !important",
//     top: "50% !important",
//     left: "0px !important",
//     transform: "translateY(-50%) !important",
//     textAlign: "left !important",
//     position: "absolute !important",
//     fontSize: "4rem !important",
//   },
//   big_caro_txt: {
//     fontFamily: "Montserrat !important",
//     color: "rgb(33, 43, 54) !important",
//     lineHeight: 1.1,
//     pointerEvents: "none !important",
//     fontSize: "4.5rem !important",
//   },
//   shop_caro_btn: {
//     margin: "8px 0px 0px !important",
//     cursor: "pointer !important",
//     userSelect: "none !important",
//     verticalAlign: "middle !important",
//     appearance: "none !important",
//     fontWeight: 700,
//     lineHeight: 1.71429,
//     fontSize: "0.9375rem !important",
//     textTransform: "capitalize !important",
//     fontFamily: "Montserrat !important",
//     padding: "31px 26px !important",
//     borderRadius: "4px !important",
//     transition:
//       "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
//     color: "rgb(255, 255, 255) !important",
//     backgroundColor: "rgb(0, 125, 252) !important",
//     boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
//     height: "48px !important",
//     // marginRight: 20,
//   },
//   see_caro_btn: {
//     margin: "8px 0px 0px !important",
//     cursor: "pointer !important",
//     userSelect: "none !important",
//     verticalAlign: "middle !important",
//     appearance: "none !important",
//     fontWeight: 700,
//     lineHeight: 1.71429,
//     fontSize: "0.9375rem !important",
//     textTransform: "capitalize !important",
//     fontFamily: "Montserrat !important",
//     padding: "31px 26px !important",
//     borderRadius: "4px !important",
//     transition:
//       "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
//     color: "rgb(255, 255, 255) !important",
//     backgroundColor: "rgb(33, 43, 54) !important",
//     boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
//     height: "48px !important",
//     marginLeft: "20px !important",
//   },
// });
