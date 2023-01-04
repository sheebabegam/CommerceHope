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

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route path="/commercehope/product-checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

// ***************************************************************
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import PaidIcon from "@mui/icons-material/Paid";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import Box from "@mui/material/Box";
// import { Button, Typography } from "@mui/material";

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
//   display: "flex",
//   height: 22,
//   alignItems: "center",
//   ...(ownerState.active && {
//     color: "#784af4",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#784af4",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle": {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
// };

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <ShoppingBasketIcon />,
//     2: <ReceiptIcon />,
//     3: <PaidIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = ["Cart", "Billing & Address", "Payment"];

// const stepDescription = ["Description 1", "Description 2", "Description 3"];

// export default function App() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [completed, setCompleted] = useState({});

//   const totalSteps = steps.length;
//   const completedSteps = Object.keys(completed).length;
//   const allStepsCompleted = completedSteps === totalSteps;

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleNext = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };
//   return (
//     <Stack sx={{ width: "100%" }} spacing={4}>
//       <Stepper
//         alternativeLabel
//         activeStep={0}
//         connector={<ColorlibConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted ? (
//           <>
//             <Typography sx={{ mt: 2, mb: 1 }}>All Steps Completed</Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Box sx={{ flex: "1 1 auto" }} />
//               <Button variant="contained" onClick={handleReset}>
//                 Reset
//               </Button>
//             </Box>
//           </>
//         ) : (
//           <>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               {stepDescription[activeStep]}
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 onClick={handleBack}
//                 variant="contained"
//                 disabled={activeStep === 0}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ żflex: "1 1 auto" }} />
//               <Button onClick={handleNext} variant="contained">
//                 {completedSteps === totalSteps - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box>
//           </>
//         )}
//       </div>
//     </Stack>
//   );
// }

// --------------------------------------------------------------------------------

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const steps = [
//   "Select campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// export default function App() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}

//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }
