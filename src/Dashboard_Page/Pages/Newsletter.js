import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import "./style.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdminDashboard from "./AdminDashboard";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;
function Newsletter(props) {
  const classes = useStyles();

  return (
    <div>
      <AdminDashboard />
      <div className={classes.breadcrumb}>
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
          <Divider sx={{ marginLeft: "-36px", marginRight: "-267px" }} />
        </Box>
      </div>
    </div>
  );
}

Newsletter.propTypes = {
  window: PropTypes.func,
};

export default Newsletter;

const useStyles = makeStyles({
  breadcrumb: {
    marginLeft: 250,
  },
});

// **********************************************************************
