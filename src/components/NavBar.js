import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          COVID-19 statistics per country
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
