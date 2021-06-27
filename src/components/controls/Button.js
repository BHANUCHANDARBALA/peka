import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
  btnPrimary: {
    backgroundColor: theme.palette.btnPrimary.main,
    height: theme.palette.btnPrimary.height,
    width: (props) => props.width || theme.palette.btnPrimary.width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.palette.btnPrimary.contrastText,
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.btnPrimary.main,
    },
  },
  btnSecondary: {
    backgroundColor: theme.palette.btnPrimary.light,
    height: theme.palette.btnPrimary.height,
    width: (props) => props.width || theme.palette.btnPrimary.width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.palette.btnSecondary.contrastText,
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.btnPrimary.light,
    },
  },
  btnTertiaryTwo: {
    backgroundColor: "inherit",
    border: `1px solid ${theme.palette.neutrals.grayDark}`,
    boxShadow: "none",
    height: "fit-content",
    width: (props) => props.width || theme.palette.btnPrimary.width,
    display: "flex",
    padding: "0px",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    letterSpacing: "-2em",
    lineHeight: "24px",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.palette.btnPrimary.tertiaryText,
      textTransform: "none",
      "&.MuiButton-endIcon": {
        marginLeft: "0px !important",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
    },
    "&.MuiButton-endIcon": {
      marginLeft: "0px !important",
    },
  },
  btnLightBlue: {
    backgroundColor: theme.palette.btnPrimary.mid,
    height: theme.palette.btnPrimary.height,
    width: (props) => props.width || theme.palette.btnPrimary.width,
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.palette.btnPrimary.contrastText,
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.btnPrimary.mid,
    },
  },
  btnGray: {
    color: theme.palette.btnPrimary.main,
    backgroundColor: "inherit",
    boxShadow: "none",
    height: "fit-content",
    display: "flex",
    padding: "0px",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.palette.btnPrimary.main,
      textTransform: "none",
      "&.MuiButton-endIcon": {
        marginLeft: "0px !important",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
    },
    "&.MuiButton-endIcon": {
      marginLeft: "0px !important",
    },
  },
}));

export default function Button(props) {
  const { text, size, color, label, variant, onClick, width, ...other } = props;
  const classes = useStyles(props);

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      className={`${classes[color]}`}
    >
      {text}
    </MuiButton>
  );
}
