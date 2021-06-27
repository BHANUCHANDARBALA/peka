import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";
import serverErrorIcon from "../assets/serverErrorIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("tablet")]: {},
  },
  section: {
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardOne: {
    height: "10px !important",
    zIndex: 9999999,
    position: "sticky",
    top: "0px",
    backgroundColor: theme.palette.background.paper,
    borderBottom: `0.5px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.up("tablet")]: {
      height: "100px",
    },
  },
  logoCls: {
    height: "24px",
    [theme.breakpoints.up("tablet")]: {
      height: "40px",
    },
  },
  cardTwo: {
    marginTop: "40px",
  },
  cardThree: {},
  card: {
    marginBottom: 40,
    "&>button": {
      marginLeft: 16,
      marginRight: 16,
      [theme.breakpoints.up("tablet")]: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  cardSix: {
    marginTop: "24px",
    // paddingBottom: "133px",
  },
  labelBlue: {
    color: theme.palette.btnPrimary.main,
  },
  cardTwoH1: {
    width: 346,
    lineHeight: "28px",
    [theme.breakpoints.up("tablet")]: {
      width: "fit-content",
    },
  },
  openingScreenDescription: {
    width: "360px",
    height: "48px",
    marginTop: "20px",
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("tablet")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  marginTop40: {
    marginTop: "40px",
  },
  lineHeight24: {
    lineHeight: "24px",
  },
  openingScreen: {
    width: 256,
    [theme.breakpoints.up("tablet")]: {
      width: 373,
    },
  },
  errorScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "250px",
  },
  serverErrorIcon: {
    width: "40px",
    height: "40px",
    top: "4px",
    left: "4px",
  },
  fontDescription: {
    fontFamily: "Rational",
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "0.02em",
  },
}));

function ErrorScreen(props) {
  const history = useHistory();
  const classes = useStyles();
  const { location } = props;

  return (
    <div className={classes.root}>
      {location && location.pathname == "/ServerError" && (
        <div>
          <div
            className={`${classes.section}   ${classes.cardOne}  ${classes.center}`}
          ></div>
          <div className={classes.errorScreen}>
            <div className={`${classes.center}`}>
              <img
                alt="serverErrorIcon"
                src={serverErrorIcon}
                className={` ${classes.logoCls} ${classes.serverErrorIcon}`}
              />
            </div>
          </div>

          <div className={` ${classes.center}`}>
            <Typography
              variant="subtitle2"
              align="center"
              className={` ${classes.openingScreenDescription} ${classes.fontDescription}`}
            >
              Server Error
            </Typography>
          </div>

          <div className={` ${classes.center}`}>
            <Typography
              variant="subtitle2"
              align="center"
              className={`${classes.cardFourH1} ${classes.openingScreenDescription}`}
            >
              The page you requested could not be loaded. Please refresh the
              page or check back later.
            </Typography>
          </div>
        </div>
      )}
      {location && location.pathname !== "/ServerError" && (
        <div>
          <div
            className={`${classes.section}   ${classes.cardOne}  ${classes.center}`}
          ></div>
          <div className={classes.errorScreen}>
            <div className={`${classes.center}`}>
              <img
                alt="serverErrorIcon"
                src={serverErrorIcon}
                className={` ${classes.logoCls} ${classes.serverErrorIcon}`}
              />
            </div>
          </div>

          <div className={` ${classes.center}`}>
            <Typography
              variant="subtitle2"
              align="center"
              className={` ${classes.openingScreenDescription} ${classes.fontDescription}`}
            >
              Page Not Found
            </Typography>
          </div>

          <div className={` ${classes.center}`}>
            <Typography
              variant="subtitle2"
              align="center"
              className={`${classes.cardFourH1} ${classes.openingScreenDescription}`}
            >
              The page you requested is not there.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
export default ErrorScreen;
