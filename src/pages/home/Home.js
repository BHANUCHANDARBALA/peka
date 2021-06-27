import React, { useEffect } from "react";

import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";

import GameLobby from "../../components/GameLobby/GameLobby";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import pekaActions from "../../redux/actions/peka";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Home(props) {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up("tablet"));

  const peka = useSelector((state) => state.peka);
  useEffect(() => {
    dispatch(pekaActions.getPekaDataRequested({ gameType: "rummy" }));
  }, []);

  return (
    <>
      <GameLobby></GameLobby>
    </>
  );
}
export default Home;
