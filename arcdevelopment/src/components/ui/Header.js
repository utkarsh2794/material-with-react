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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function ElevationScroll(props) {
  const { children } = props;

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
  logoContainer: {
    padding: "0px !important",
    "&:hover": {
      backgroundColor: "transparent",
    },
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
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles(theme);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);


  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4);
    // }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/custumSoftware":
        if (value !== 0) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;

      case "/mobileApp":
        if (value !== 0) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;

      case "/website":
        if (value !== 0) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
        case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
        case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
        case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
        case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => {
                setValue(0);
              }}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                component={Link}
                to="/"
                label="Home"
                className={classes.tab}
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
                component={Link}
                to="/services"
                label="Servies"
                className={classes.tab}
              />
              <Tab
                component={Link}
                to="/revolution"
                label="The Revolutio"
                className={classes.tab}
              />
              <Tab
                component={Link}
                to="/about"
                label="About Us"
                className={classes.tab}
              />
              <Tab
                component={Link}
                to="/contact"
                label="Contact Us"
                className={classes.tab}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              <MenuItem
                component={Link}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                to="/services"
                classes={{ root: classes.menuItem }}
              >
                Services
              </MenuItem>
              <MenuItem
                component={Link}
                to="/custumSoftware"
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                classes={{ root: classes.menuItem }}
              >
                Custorm Software
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                to="/mobileApp"
                classes={{ root: classes.menuItem }}
              >
                mobile app development
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                to="/website"
                classes={{ root: classes.menuItem }}
              >
                Website Software
              </MenuItem>
            </Menu>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
