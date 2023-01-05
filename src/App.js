// import Route_page from "./Route_page";
// import { Route, Routes } from "react-router-dom";
// import Login from "./User_page/Pages/Login";
// import Register from "./User_page/Pages/Register";
// import Forget_password from "./User_page/Pages/Forget_password";
// import Landing_Page from "./User_page/Pages/Landing_Page";
// import All_category from "./User_page/assets/JSON_data/All_category.json";
// import Feature_prod from "./User_page/assets/JSON_data/Feature_prod.json";
// import ProductPage from "./User_page/Pages/ProductPage";
// import ProductDetails from "./User_page/Pages/ProductDetails";
// import RelatedProducts from "./User_page/assets/JSON_data/RelatedProducts.json";
// import ProductGridView from "./User_page/Pages/ProductGridView";
// import All_data from "./User_page/assets/JSON_data/All_data.json";
// import RegisterNoReuse from "./User_page/Pages/RegisterNoReuse";
// import Checkout from "./User_page/Pages/Checkout";
// import Navbar from "./User_page/Layouts/Navbar";
// import AdminLogin from "./Dashboard_Page/Pages/AdminLogin";
// import AdminRegister from "./Dashboard_Page/Pages/AdminRegister";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Route_page />} />
//         <Route
//           path="/commercehope"
//           element={
//             <Landing_Page
//               All_category={All_category}
//               Feature_prod={Feature_prod}
//             />
//           }
//         />
//         <Route path="/commercehope/login" element={<Login />} />
//         <Route path="/commercehope/register" element={<Register />} />
//         <Route
//           path="/commercehope/register-reuse"
//           element={<RegisterNoReuse />}
//         />
//         <Route
//           path="/commercehope/forget-password"
//           element={<Forget_password />}
//         />
//         <Route
//           path="/commercehope/product-page"
//           element={<ProductPage All_data={All_data} />}
//         />
//         <Route
//           path="/commercehope/product-details"
//           element={<ProductDetails RelatedProducts={RelatedProducts} />}
//         />
//         <Route
//           path="/commercehope/product-list-view"
//           element={<ProductGridView />}
//         />
//         <Route path="/commercehope/product-checkout" element={<Checkout />} />

//         <Route path="/admin-dashboard-login" element={<AdminLogin />} />
//         <Route path="/admin-dashboard-register" element={<AdminRegister />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// ***************************************************************

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SpeedIcon from "@mui/icons-material/Speed";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import "./Dashboard_Page/Pages/style.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import EarningIcon from "./Dashboard_Page/assets/Icons/EarningIcon";
import UsersIcon from "./Dashboard_Page/assets/Icons/UsersIcon";
import ProductsIcon from "./Dashboard_Page/assets/Icons/ProductsIcon";
import OrdersIcon from "./Dashboard_Page/assets/Icons/OrdersIcon";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import BarGraph from "./Dashboard_Page/Pages/BarGraph";

const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  const mapIcons = [
    {
      id: 1,
      heading: "Daily Earning",
      price: "$380.0",
      icon: <EarningIcon />,
    },
    {
      id: 2,
      heading: "Daily Orders",
      price: 2,
      icon: <OrdersIcon />,
    },
    {
      id: 3,
      heading: "Signup Users",
      price: 19,
      icon: <UsersIcon />,
    },
    {
      id: 4,
      heading: "Total Products",
      price: 115,
      icon: <ProductsIcon />,
    },
  ];

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "First set",
        data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 115],
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
            borderDash: [4, 4],
            zeroLineColor: "blue",
          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const SidebarHeadings = [
    { name: "Dashboard", route: "", icon: <SpeedIcon /> },
    { name: "Categories", route: "", icon: <WidgetsIcon /> },
    { name: "Products", route: "", icon: <StoreIcon /> },
    { name: "Orders", route: "", icon: <ShoppingCartCheckoutIcon /> },
    { name: "Users", route: "", icon: <PeopleAltIcon /> },
    { name: "Newsletter", route: "", icon: <MailIcon /> },
    { name: "Settings", route: "", icon: <SettingsIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <div>
          <svg
            class="MuiBox-root css-1l51nas"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1282.000000 279.000000"
            preserveAspectRatio="xMidYMid meet"
            height={50}
            width={180}
          >
            <g
              transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
              fill="#212B36"
              stroke="none"
            >
              <path
                d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103
-1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178
603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19
-64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272
275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23
238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48
185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"
              ></path>
              <path
                fill="#007DFC"
                d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836
-229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14
204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120
-92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47
-52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81
-74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213
106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116
-111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356
261 630 637 605 41 -2 102 -11 135 -20z"
              ></path>
              <path
                d="M3310 2055 c-127 -36 -224 -127 -261 -246 -34 -109 -17 -230 46 -326
40 -61 79 -92 160 -130 107 -48 283 -42 374 14 30 19 91 74 91 82 0 4 -22 25
-50 49 l-49 43 -50 -34 c-76 -53 -167 -59 -251 -17 -159 81 -157 329 3 412 78
40 192 27 260 -29 16 -13 32 -23 35 -23 4 1 30 21 57 46 l50 45 -43 39 c-24
22 -69 49 -100 61 -75 28 -198 34 -272 14z"
              ></path>
              <path
                d="M4072 2060 c-62 -13 -157 -67 -198 -113 -20 -22 -48 -65 -63 -96 -23
-49 -26 -69 -26 -156 0 -93 2 -105 33 -167 39 -79 92 -129 181 -172 62 -29 73
-31 176 -31 103 0 114 2 176 31 89 43 142 93 181 172 31 62 33 74 33 167 0 87
-3 107 -27 157 -35 75 -104 142 -183 179 -52 25 -80 31 -152 34 -48 2 -107 0
-131 -5z m174 -145 c92 -27 154 -116 154 -220 0 -104 -62 -193 -154 -220 -62
-19 -80 -19 -142 0 -94 28 -153 113 -154 221 0 107 58 190 154 220 55 17 83
17 142 -1z"
              ></path>
              <path
                d="M8400 2059 c-114 -22 -229 -118 -271 -227 -31 -78 -30 -193 1 -277
32 -83 122 -173 205 -205 83 -32 214 -39 286 -15 57 18 135 63 162 93 16 17
14 20 -21 53 -68 64 -64 63 -121 25 -87 -59 -195 -57 -279 4 -114 82 -114 288
0 370 83 61 203 60 288 -1 l41 -30 27 20 c15 10 39 32 55 48 l27 29 -37 31
c-101 81 -225 109 -363 82z"
              ></path>
              <path
                d="M10704 2060 c-117 -25 -234 -120 -274 -225 -31 -82 -31 -196 1 -280
30 -82 120 -172 204 -206 85 -33 244 -34 327 -1 202 81 291 304 202 503 -35
78 -121 159 -201 189 -65 25 -192 35 -259 20z m164 -142 c64 -16 134 -86 150
-150 26 -101 8 -172 -59 -239 -58 -59 -127 -79 -208 -59 -110 26 -172 106
-173 223 -2 111 54 191 154 222 55 17 78 18 136 3z"
              ></path>
              <path
                d="M4700 1695 l0 -365 80 0 80 0 2 209 3 209 101 -167 101 -166 41 -3
41 -3 105 177 106 177 0 -216 0 -217 80 0 80 0 0 365 0 365 -69 0 -69 0 -133
-225 c-103 -174 -136 -222 -145 -212 -6 6 -68 108 -138 225 l-127 212 -70 0
-69 0 0 -365z"
              ></path>
              <path
                d="M5697 2054 c-4 -4 -7 -169 -7 -366 l0 -358 80 0 80 0 2 212 3 211
104 -171 104 -172 41 0 41 1 105 177 105 177 3 -217 2 -218 75 0 75 0 0 365 0
365 -67 0 -68 0 -124 -210 c-68 -115 -129 -217 -135 -226 -10 -13 -34 21 -146
208 l-135 223 -65 3 c-36 2 -69 0 -73 -4z"
              ></path>
              <path
                d="M6690 1695 l0 -365 280 0 280 0 0 70 0 70 -200 0 -200 0 0 80 0 80
170 0 170 0 0 70 0 70 -170 0 -170 0 0 75 0 75 195 0 195 0 0 70 0 70 -275 0
-275 0 0 -365z"
              ></path>
              <path
                d="M7390 1695 l0 -365 80 0 80 0 0 100 0 100 80 0 80 0 52 -77 c91 -132
80 -124 179 -121 l86 3 -80 114 c-69 99 -77 115 -63 123 81 45 129 128 128
222 0 72 -21 128 -65 174 -71 74 -147 92 -389 92 l-168 0 0 -365z m379 209
c50 -20 73 -54 73 -110 0 -93 -50 -124 -197 -124 l-95 0 0 125 0 125 90 0 c58
0 103 -6 129 -16z"
              ></path>
              <path
                d="M8910 1695 l0 -365 285 0 286 0 -3 68 -3 67 -197 3 -198 2 0 80 0 80
170 0 171 0 -3 68 -3 67 -167 3 -168 2 0 75 0 75 190 0 190 0 0 70 0 70 -275
0 -275 0 0 -365z"
              ></path>
              <path
                d="M9610 1695 l0 -365 85 0 85 0 0 150 0 150 165 0 165 0 0 -150 0 -150
85 0 85 0 0 365 0 365 -85 0 -85 0 0 -145 0 -145 -165 0 -165 0 0 145 0 145
-85 0 -85 0 0 -365z"
              ></path>
              <path
                d="M11330 1695 l0 -365 85 0 85 0 0 99 0 98 118 6 c136 6 173 16 238 60
68 46 99 109 98 202 -1 136 -77 223 -222 254 -29 6 -132 11 -227 11 l-175 0 0
-365z m379 212 c72 -25 101 -114 59 -177 -31 -45 -72 -59 -180 -59 l-88 -1 0
125 0 125 88 -1 c48 0 102 -5 121 -12z"
              ></path>
              <path
                d="M12080 1695 l0 -365 280 0 280 0 0 70 0 70 -195 0 -195 0 0 80 0 80
165 0 165 0 0 70 0 70 -165 0 -165 0 0 75 0 75 190 0 190 0 0 70 0 70 -275 0
-275 0 0 -365z"
              ></path>
              <path
                d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49
-13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488
l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"
              ></path>
              <path
                d="M4165 1029 c-41 -11 -91 -66 -103 -111 -12 -44 -1 -100 26 -137 44
-60 155 -81 221 -40 31 18 32 22 18 36 -14 14 -17 14 -38 -1 -26 -18 -85 -21
-123 -6 -33 12 -66 66 -66 105 0 42 20 76 59 102 41 28 75 29 124 4 31 -16 38
-17 48 -4 15 17 -9 38 -61 53 -41 12 -64 12 -105 -1z"
              ></path>
              <path
                d="M4943 1032 c-57 -18 -84 -70 -61 -119 10 -22 27 -33 82 -50 38 -13
75 -28 82 -34 19 -15 18 -43 -2 -59 -21 -18 -94 -17 -132 2 -32 16 -42 14 -42
-8 0 -27 60 -46 127 -42 78 5 107 28 107 84 0 44 -26 69 -87 84 -64 15 -92 33
-95 60 -7 44 58 65 124 40 35 -14 56 3 33 25 -17 17 -102 28 -136 17z"
              ></path>
              <path
                d="M5660 1018 c-57 -30 -82 -65 -88 -126 -5 -60 17 -113 61 -144 45 -32
140 -36 185 -9 17 12 32 25 32 30 0 17 -32 21 -53 6 -50 -35 -145 -8 -169 49
-28 68 -3 136 57 162 46 19 74 18 111 -5 23 -14 35 -16 43 -8 19 19 13 27 -31
47 -56 26 -94 25 -148 -2z"
              ></path>
              <path
                d="M5980 1018 c-81 -42 -112 -126 -76 -212 31 -74 143 -109 227 -70 111
50 118 214 12 276 -51 30 -112 33 -163 6z m125 -32 c51 -22 70 -59 66 -134 -1
-13 -16 -39 -35 -58 -28 -28 -42 -34 -75 -34 -57 0 -95 22 -116 66 -29 61 -2
133 58 159 41 18 60 18 102 1z"
              ></path>
              <path
                d="M7150 878 l0 -158 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20 l-90
0 0 50 0 50 75 0 c68 0 75 2 75 20 0 18 -7 20 -75 20 l-75 0 0 45 0 45 85 0
c77 0 85 2 85 19 0 18 -9 20 -110 23 l-110 3 0 -157z"
              ></path>
              <path
                d="M7868 1030 c-111 -33 -152 -169 -77 -254 16 -19 42 -39 59 -46 39
-16 131 -8 165 14 24 16 26 20 12 33 -14 14 -18 14 -38 -1 -30 -20 -108 -21
-137 0 -74 51 -66 171 14 209 41 19 68 19 111 -1 40 -19 66 -7 43 20 -24 30
-99 42 -152 26z"
              ></path>
              <path
                d="M8565 1026 c-41 -18 -58 -41 -58 -77 0 -42 28 -66 108 -92 66 -21 70
-24 70 -52 0 -53 -72 -68 -146 -29 -24 12 -28 12 -33 -2 -3 -9 -6 -18 -6 -20
0 -14 76 -34 125 -34 49 0 60 4 86 29 57 58 27 116 -77 146 -68 20 -84 30 -84
56 0 43 64 58 148 33 18 -5 22 -2 22 14 0 36 -96 54 -155 28z"
              ></path>
              <path
                d="M8887 1026 c-96 -35 -132 -127 -87 -221 29 -60 84 -89 159 -83 68 5
121 37 97 57 -11 10 -21 9 -45 -3 -16 -9 -49 -16 -72 -16 -33 0 -47 6 -75 34
-30 30 -34 40 -34 84 0 41 5 55 28 80 40 42 94 52 144 25 33 -18 39 -19 50 -6
10 12 8 18 -12 33 -42 32 -93 37 -153 16z"
              ></path>
              <path
                d="M9130 878 l0 -158 25 0 c23 0 25 4 25 44 l0 44 47 4 c45 3 47 2 81
-44 25 -35 40 -48 59 -48 l25 0 -37 51 -36 50 25 20 c37 29 50 79 33 121 -23
54 -40 62 -148 68 l-99 5 0 -157z m190 92 c25 -25 26 -61 2 -90 -13 -16 -32
-23 -80 -27 l-62 -6 0 72 0 71 60 0 c47 0 64 -4 80 -20z"
              ></path>
              <path
                d="M10655 1030 c-70 -22 -120 -112 -104 -189 30 -144 245 -167 310 -33
38 77 13 163 -58 204 -37 22 -108 30 -148 18z m109 -44 c47 -19 66 -51 66
-109 0 -43 -5 -54 -35 -84 -34 -34 -38 -35 -92 -31 -45 4 -61 10 -79 32 -51
58 -38 146 28 186 39 24 67 25 112 6z"
              ></path>
              <path
                d="M11168 918 c-3 -112 -5 -121 -27 -139 -25 -20 -81 -25 -111 -9 -28
15 -40 65 -40 166 0 89 -1 94 -21 94 -20 0 -21 -4 -17 -125 3 -120 4 -126 30
-151 20 -21 39 -28 80 -32 67 -5 103 9 128 50 17 28 20 51 20 144 0 102 -2
112 -19 117 -18 4 -20 -3 -23 -115z"
              ></path>
              <path
                d="M3130 875 c0 -148 1 -155 20 -155 17 0 20 7 20 44 l0 44 50 4 c51 3
51 3 83 -44 22 -33 39 -48 55 -48 29 0 28 3 -10 57 l-32 45 21 16 c43 35 55
90 29 141 -21 39 -56 51 -151 51 l-85 0 0 -155z m177 107 c21 -13 31 -55 21
-84 -11 -32 -62 -52 -118 -46 l-35 3 -3 68 -3 67 63 0 c35 0 68 -4 75 -8z"
              ></path>
              <path
                d="M3450 875 l0 -155 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20 l-90
0 0 50 0 50 80 0 c73 0 80 2 80 20 0 18 -7 20 -80 20 l-80 0 0 45 0 44 87 3
c74 3 88 6 91 21 3 15 -7 17 -112 17 l-116 0 0 -155z"
              ></path>
              <path
                d="M3818 963 c-16 -37 -47 -105 -69 -151 -21 -47 -39 -86 -39 -88 0 -2
11 -4 23 -4 19 0 28 9 40 40 l15 40 85 0 85 0 16 -40 c12 -31 21 -40 40 -40
24 0 24 2 -40 143 -36 78 -68 148 -71 155 -3 6 -16 12 -30 12 -20 0 -29 -11
-55 -67z m121 -125 c1 -5 -28 -8 -64 -8 -36 0 -65 4 -65 9 0 4 14 39 32 77
l31 69 33 -70 c18 -38 33 -73 33 -77z"
              ></path>
              <path
                d="M4360 1010 c0 -17 7 -20 50 -20 l50 0 0 -135 0 -135 25 0 25 0 0 134
0 135 52 3 c41 2 54 7 56 21 3 15 -8 17 -127 17 -124 0 -131 -1 -131 -20z"
              ></path>
              <path
                d="M4642 1013 c2 -14 15 -19 61 -21 l57 -3 -1 -87 c-1 -48 -4 -98 -8
-111 -10 -35 -42 -43 -85 -22 -28 15 -38 16 -46 6 -8 -10 -4 -18 16 -34 35
-27 103 -28 135 -2 23 18 24 26 27 155 l4 136 -82 0 c-72 0 -81 -2 -78 -17z"
              ></path>
              <path
                d="M5290 875 l0 -155 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20 l-90
0 0 50 0 50 80 0 c73 0 80 2 80 20 0 18 -7 20 -80 20 l-80 0 0 45 0 44 87 3
c74 3 88 6 91 21 3 15 -7 17 -112 17 l-116 0 0 -155z"
              ></path>
              <path
                d="M6290 876 c0 -148 1 -156 20 -156 18 0 20 8 22 112 l3 113 55 -93
c30 -50 60 -92 67 -92 6 0 37 42 67 93 l56 92 0 -112 0 -113 25 0 25 0 0 155
0 155 -23 0 c-19 0 -34 -19 -81 -100 -32 -55 -61 -102 -65 -104 -4 -3 -34 41
-67 97 -44 75 -66 103 -82 105 -22 3 -22 3 -22 -152z"
              ></path>
              <path
                d="M6720 876 c0 -148 1 -156 20 -156 18 0 20 8 22 112 l3 113 55 -93
c30 -50 60 -92 67 -92 6 0 37 42 67 93 l56 92 0 -112 0 -113 25 0 25 0 0 155
0 155 -23 0 c-19 0 -34 -19 -81 -100 -32 -55 -61 -102 -65 -104 -4 -3 -34 41
-67 97 -44 73 -67 103 -82 105 -22 3 -22 2 -22 -152z"
              ></path>
              <path
                d="M7450 875 l0 -155 25 0 c23 0 25 4 25 44 l0 44 47 4 c45 3 47 2 81
-44 25 -35 40 -48 59 -48 l25 0 -37 51 -36 50 25 20 c13 11 30 35 36 54 10 30
9 41 -7 72 -25 51 -53 63 -155 63 l-88 0 0 -155z m190 95 c25 -25 26 -61 2
-90 -13 -16 -32 -23 -80 -27 l-62 -6 0 72 0 71 60 0 c47 0 64 -4 80 -20z"
              ></path>
              <path
                d="M8100 875 l0 -155 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20 l-90
0 0 50 0 50 80 0 c73 0 80 2 80 20 0 18 -7 20 -80 20 l-80 0 0 45 0 44 87 3
c74 3 88 6 91 21 3 15 -7 17 -112 17 l-116 0 0 -155z"
              ></path>
              <path
                d="M9460 875 c0 -148 1 -155 20 -155 19 0 20 7 20 155 0 148 -1 155 -20
155 -19 0 -20 -7 -20 -155z"
              ></path>
              <path
                d="M9600 875 c0 -148 1 -155 20 -155 17 0 20 7 20 44 l0 43 65 6 c106
10 145 42 145 118 0 73 -44 99 -165 99 l-85 0 0 -155z m180 105 c24 -13 33
-53 18 -85 -13 -29 -65 -48 -118 -43 l-35 3 -3 68 -3 67 61 0 c34 0 70 -4 80
-10z"
              ></path>
              <path
                d="M9862 1013 c2 -14 15 -19 56 -21 l52 -3 0 -135 0 -134 25 0 25 0 0
135 0 135 50 0 c43 0 50 3 50 20 0 19 -7 20 -131 20 -119 0 -130 -2 -127 -17z"
              ></path>
              <path
                d="M10261 1008 c7 -13 34 -58 61 -100 42 -69 48 -84 48 -133 0 -52 1
-55 25 -55 24 0 25 3 25 60 0 55 4 67 51 141 64 102 66 109 41 109 -15 0 -34
-23 -70 -80 l-50 -81 -47 81 c-38 65 -51 80 -71 80 -22 0 -24 -2 -13 -22z"
              ></path>
              <path
                d="M11420 875 l0 -155 25 0 c24 0 24 0 27 115 l3 115 93 -115 c61 -76
100 -115 112 -115 19 0 20 8 20 155 l0 155 -25 0 c-24 0 -24 0 -27 -111 l-3
-111 -88 111 c-69 86 -94 111 -113 111 l-24 0 0 -155z"
              ></path>
              <path
                d="M11790 875 l0 -155 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20
l-90 0 0 50 0 50 80 0 c73 0 80 2 80 20 0 18 -7 20 -80 20 l-80 0 0 45 0 44
87 3 c74 3 88 6 91 21 3 15 -7 17 -112 17 l-116 0 0 -155z"
              ></path>
              <path
                d="M12090 875 l0 -155 115 0 c108 0 115 1 115 20 0 19 -7 20 -90 20
l-90 0 0 50 0 50 80 0 c73 0 80 2 80 20 0 18 -7 20 -80 20 l-80 0 0 45 0 44
87 3 c74 3 88 6 91 21 3 15 -7 17 -112 17 l-116 0 0 -155z"
              ></path>
              <path
                d="M12390 875 l0 -155 83 0 c106 0 148 13 186 55 63 73 45 187 -38 233
-32 18 -55 22 -135 22 l-96 0 0 -155z m226 81 c26 -26 34 -42 34 -69 0 -87
-47 -127 -147 -127 l-63 0 0 115 0 115 71 0 c67 0 73 -2 105 -34z"
              ></path>
            </g>
          </svg>
        </div>
        {/* <div className={classes.commercehope_logo_div}>
          <svg
            class="MuiBox-root css-10x59zd"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 270.000000 279.000000"
            preserveAspectRatio="xMidYMid meet"
            width={55}
            height={55}
          >
            <g
              transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103 -1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178 603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19 -64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272 275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23 238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48 185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"></path>
              <path
                fill="#007DFC"
                d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836 -229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14 204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120 -92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47 -52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81 -74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213 106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116 -111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356 261 630 637 605 41 -2 102 -11 135 -20z"
              ></path>
              <path d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49 -13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488 l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"></path>
            </g>
          </svg>
          <div style={{ marginTop: "-10px" }}>
            <Typography
              variant="h5"
              className={classes.commhope_h5}
              style={{ fontWeight: 750 }}
            >
              COMMERCEHOPE
            </Typography>
            <p className={classes.small_txt}>
              Reactjs ecommerce script you need
            </p>
          </div>
        </div> */}
      </Toolbar>
      <Divider />
      <List>
        {SidebarHeadings.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className={classes.btn_flex}>
            {/*  */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            > */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <div>
                  <NotificationsIcon
                    className={classes.bell_color}
                    // aria-describedby={id}
                    // onClick={handleClick}
                  ></NotificationsIcon>
                </div>

                <div className={classes.bell_no_color}>
                  <span>7</span>
                </div>
              </div>

              {/* </Link> */}
              <div style={{ marginRight: 20 }}>
                <DarkModeIcon className={classes.mode_color} />
              </div>
              <div style={{ marginRight: 20 }}>
                <img
                  src="https://res.cloudinary.com/techgater/image/upload/v1671368166/my-uploads/rl1qixwwdddavtir0qmk.jpg"
                  alt="user"
                  className={classes.user_img}
                />
              </div>
            </div>
          </Toolbar>
          <Divider />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div>
            <Typography variant="h6">Dashboard</Typography>
          </div>
          <br />
          <Divider sx={{ marginLeft: "-30px", marginRight: "-30px" }} />
        </Box>
      </Box>
      <Box sx={{ width: "85%", marginLeft: " 15% !important" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {mapIcons.map((item, i) => (
            <Grid
              xs={3}
              style={{
                marginRight: 30,
                maxWidth: "23%",
              }}
            >
              <div className={classes.map_div_dashboard}>
                <div className={classes.for_flex}>
                  <div style={{ width: 280 }}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: 600 }}
                      className={classes.daily_typo}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 700 }}
                      className={classes.daily_typo1}
                    >
                      {item.price}
                    </Typography>
                  </div>
                  <div>
                    <Button className={classes.svg_blue_btn}>
                      {item.icon}
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div style={{ marginTop: 50 }}>
        <Box sx={{ width: "90%", marginLeft: " 15% !important" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              md={5}
              sm={3}
              style={{
                marginRight: 30,
                maxWidth: "56.5%",
                height: 400,
              }}
              className={classes.barchart}
            >
              <Typography
                variant="h6"
                className={classes.sales_report}
                style={{ fontWeight: 700 }}
              >
                Sales Report
              </Typography>
              <BarGraph />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                maxWidth: "23%",
                backgroundColor: "pink",
              }}
            >
              jhgukgu
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;

const useStyles = makeStyles({
  nav_btn_css: {
    color: "black !important",
  },
  btn_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white !important",
    boxShadow: "0px 0px 0px 0px white !important",
    marginBottom: "1px solid black !important",
  },
  bell_color: {
    color: "rgb(99, 115, 129)",
  },
  bell_no_color: {
    width: "21px !important",
    height: "20px !important",
    borderRadius: "50% !important",
    backgroundColor: "rgb(255, 72, 66) !important",
    padding: "0px 7px !important",
    fontSize: "15px !important",
    marginTop: "-23px !important",
    marginLeft: "-13px !important",
  },
  bell_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mode_color: {
    color: "rgb(0, 125, 252) !important",
  },
  user_img: {
    height: 40,
    width: 40,
    borderRadius: "50% !important",
  },
  commercehope_logo_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat !important",
  },
  commhope_h5: {
    fontSize: "1.6rem",
    color: "#fff",
    lineHeight: 1,
    textAlign: "left",
    padding: "0px",
    marginLeft: "10px !important",
    fontFamily: "Montserrat !important",
  },
  small_txt: {
    margin: "0px !important",
    fontFamily: " Montserrat !important",
    textTransform: "uppercase !important",
    fontSize: "10.5px !important",
    marginRight: "3px !important",
    paddingLeft: "11px !important",
    marginTop: "-2px !important",
  },
  map_div_dashboard: {
    backgroundColor: "rgb(255, 255, 255) !important",
    color: "rgb(33, 43, 54) !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    borderRadius: "8px !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    display: "flex !important",
    alignItems: "center !important",
    padding: "8px 16px !important",
  },
  for_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  daily_typo: {
    margin: "0px !important",
    fontWeight: 600,
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
  },
  daily_typo1: {
    margin: "0px !important",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1.5rem !important",
    fontFamily: "Montserrat !important",
  },
  svg_blue_btn: {
    alignItems: "center !important",
    justifyContent: "center !important",
    position: "relative !important",
    boxSizing: "border-box !important",
    outline: "0px !important",
    border: "0px !important",
    margin: "0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    textDecoration: "none !important",
    fontWeight: 700,
    fontSize: "0.875rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    borderRadius: "3px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    display: "block !important",
    minWidth: "50px !important",
    lineHeight: 0,
    minHeight: "50px !important",
    padding: "0px !important",
    background: "rgba(0, 125, 252, 0.9) !important",
  },
  barchart: {
    backgroundColor: "rgb(255, 255, 255) !important",
    color: "rgb(33, 43, 54) !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    borderRadius: "8px !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    paddingBottom: "12px !important",
  },
  sales_report: {
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.55556,
    fontSize: "1.125rem !important",
    fontFamily: "Montserrat !important",
    display: "block !important",
  },
});
