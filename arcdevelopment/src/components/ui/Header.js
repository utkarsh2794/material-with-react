import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import theme from "./Theme";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3px",
  },
  logo: {
    height: "65px",
  },
  logoContainer:{
    padding: "0px !important",
    "&:hover": {
        backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    fontWeight: "700",
    fontSize: "1rem",
    minWidth: "2rem",
  },
  button: {
    ...theme.typography.tab,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles(theme);
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if(window.location.pathname === '/' && value !== 0){
        setValue(0)
    } else if(window.location.pathname === '/services' && value !== 1){
        setValue(1)
    }else if(window.location.pathname === '/revolution' && value !== 2){
        setValue(2)
    }else if(window.location.pathname === '/about' && value !== 3){
        setValue(3)
    }else if(window.location.pathname === '/contact' && value !== 4){
        setValue(4)
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar disableGutters>
            <Button component={Link} to="/" disableRipple onClick={() => {setValue(0)}} className={classes.logoContainer}>
                <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab component={Link} to="/" label="Home" className={classes.tab} />
              <Tab component={Link} to="/services" label="Servies" className={classes.tab} />
              <Tab component={Link} to="/revolution" label="The Revolutio" className={classes.tab} />
              <Tab component={Link} to="/about" label="About Us" className={classes.tab} />
              <Tab component={Link} to="/contact" label="Contact Us" className={classes.tab} />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Estimate
            </Button>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
