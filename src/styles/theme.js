import { createMuiTheme, styled } from "@material-ui/core";
import { compose, css, style, typography } from "@material-ui/system";
import { Typography } from "@material-ui/core";

const variant = style({
  prop: "variant2",
  cssProperty: false,
  themeKey: "typography",
});

const Text = styled(Typography)(css(compose(variant, typography)));

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 380,
      tablet: 768,
      desktop: 1280,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      main: "#000",
      contrastText: "#fff",
      gray: "#2F2F2F",
      color: "#2F2F2F",
      fontFamily: "Roboto",
      fontSize: "12px;",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
    },
    type: "light",
    primary: {
      light: "#FFFBF6",
      main: "#FF941C",
      mid: "#61A2E4",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFC5AD",
      main: "#FF941C",
      dark: "#FB9B73",
      contrastText: "#FF941C",
    },
    success: {
      contrastText: "#28BB3F",
      dark: "#28BB3F",
      main: "#28BB3F",
      light: "#28BB3F",
    },
    info: {
      contrastText: "#FFFFFF",
      dark: "#2F2F2F",
      main: "#2F2F2F",
      light: "#2F2F2F",
    },
    warning: {
      contrastText: "rgba(0, 0, 0, 0.87)",
      dark: "#FAC06A",
      main: "#FAC06A",
      light: "#FAC06A",
    },
    error: {
      contrastText: "#fff",
      dark: "#DD2E2E",
      main: "#DD2E2E",
      light: "#DD2E2E",
    },
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      subtitle: "#757575",
    },
    btnPrimary: {
      light: "#F8E4E5",
      main: "#D27472",
      mid: "#61A2E4",
      contrastText: "#fff",
      tertiaryText: "#787878",
      width: "313px",
      height: "48px",
    },
    btnSecondary: {
      light: "#EBEFF8",
      main: "#1789FC",
      mid: "#61A2E4",
      contrastText: "#6E5C5F",
      tertiaryText: "#787878",
      width: "313px",
      height: "48px",
    },
    background: {
      default: "#E5E5E5",
      level1: "rgba(235, 239, 248, 0.5)",
      level2: "rgba(248, 248, 248, 0.4)",
      paper: "#fff",
      light: "#EBEFF8",
      main: "#FFFBF6",
      borderLight: "#C4C4C4",
    },
    mainPalette: {
      blueMain: "#1789FC",
      blueMid: "#61A2E4",
      blueLight: "#EBEFF8",
      orangeMain: "#FF941C",
      peachDark: "#FB9B73",
      peachLight: "#FFC5AD",
      purpleMain: "#C872FC",
      purpleMid: "#D1A1EE",
      purpleLight: "#E1E0FF",
      gradientsOrangePeach:
        "linear-gradient(270deg, #FF941C -21.2%, #FFC5AD 84.12%)",
      gradientsBlueGreen:
        "linear-gradient(270.66deg, #1789FC 0.44%, #28BB3F 87.04%)",
      gradientsBluePurple:
        "linear-gradient(270.66deg, #61A2E4 0.44%, #E1E0FF 87.04%)",
      gradientsOrangePurple:
        "linear-gradient(270.66deg, #FF941C 0.44%, #C872FC 87.04%)",
    },
    neutrals: {
      black: "#2F2F2F",
      white: "#FFFFFF",
      beige: "#FFFBF6",
      grayDark: "#a7a7a7",
      grayMid: "#f9f9f9",
      grayLight: "#EFF3F2",
    },
    notifications: {
      greenSuccess: "#28BB3F",
      lightGreen: "#78C885",
      redError: "#DD2E2E",
      lightRed: "#E06868",
      yellowWarning: "#FAC06A",
    },
  },
  direction: "ltr",
  typography: {
    dataViz1: {
      //Data Viz
      fontFamily: "Rational",
      fontSize: "80px",
      fontStyle: "normal",
      lineHeight: "64px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
    dataViz2: {
      //Data Viz
      fontFamily: "Rational",
      fontSize: "48px",
      fontStyle: "normal",
      lineHeight: "48px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h1: {
      fontFamily: "Rational",
      fontSize: "40px",
      fontStyle: "normal",
      lineHeight: "48px",
      letterSpacing: "-0.02em !important",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h2: {
      fontFamily: "Rational",
      fontSize: "32px",
      fontStyle: "normal",
      lineHeight: "40px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontStyle: "normal",
      lineHeight: "22px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h4: {
      fontFamily: "Rational",
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "26px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h5: {
      fontFamily: "Rational",
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "20px",
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "#2F2F2F",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "26px",
      letterSpacing: "0.05em",
      fontWeight: 400,
      color: "#2F2F2F",
    },
    link1: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0em",
      color: "#1789FC",
      "&:hover": {
        cursor: "pointer",
      },
    },
    link2: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textalign: "left",
      "&:hover": {
        cursor: "pointer",
      },
      color: "#1789FC",
    },
    b1Medium: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#2F2F2F",
    },
    b1Regular: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#2F2F2F",
    },
    b2Medium: {
      color: "#2F2F2F",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#2F2F2F",
    },
    b2Regular: {
      fontFamily: "Roboto",
      color: "#2F2F2F",
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "20px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#2F2F2F",
    },
    b3Regular: {
      color: "#2F2F2F",
      fontFamily: "Roboto",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0.05em",
      textalign: "left",
      color: "#2F2F2F",
    },
    input: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#2F2F2F",
      placeholderColor: "#787878",
    },
    error: {
      fontFamily: "Roboto",
      fontSize: "14px;",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      textalign: "left",
      color: "#DD2E2E",
    },
  },
});

export { theme, Text };
