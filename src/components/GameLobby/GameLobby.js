import React, { useEffect, useState } from "react";
import Button from "../../components/controls/Button";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Text } from "../../styles/theme";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import groups_white_18dp from "../../assets/groups_white_18dp.svg";
import people_white_18dp from "../../assets/people_white_18dp.svg";
import groups_black_18dp from "../../assets/groups_black_18dp.svg";
import people_black_18dp from "../../assets/people_black_18dp.svg";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";

import pekaActions from "../../redux/actions/peka";

const useStyles = makeStyles((theme) => ({
  containerCls: {
    padding: "10px 24px",
    backgroundColor: theme.palette.neutrals.grayMid,
    minHeight: "100vh",
  },
  btnContainer: {
    marginBottom: "10px",
  },
  containerSpacing: {
    justifyContent: "space-between !important",
  },
  toggleSection: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  justifyRight: {
    justifyContent: "flex-end",
  },
  greyBackground: {
    backgroundColor: theme.palette.neutrals.grayLight,
  },
  toggleGrp: {
    height: "30px",
    borderRadius: "6px",
    marginRight: "10px",
    border: `2px solid ${theme.palette.btnPrimary.main}`,
    "& .Mui-selected": {
      color: "rgba(0, 0, 0, 0.54) !important",
      backgroundColor: `${theme.palette.btnPrimary.main} !important`,
    },
  },
  members: {
    border: `1px solid ${theme.palette.neutrals.grayDark}`,
    borderRadius: "5px",
    padding: "4px 8px",
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.btnSecondary.tertiaryText,
  },
  nodata: {
    minHeight: "80vh",
  },
  card:{
    marginBottom:'10px'
  }
}));

function GameLobby(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const peka = useSelector((state) => state.peka);

  const [alignment, setAlignment] = useState("2");

  const [btnid, setBtnId] = useState("101-pool");

  const [sortAsc, setSort] = useState(true);

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up("tablet"));

  useEffect(() => {
    let payload = {
      alignment,
      btnid,
      sortAsc,
    };
    dispatch(pekaActions.filterAndSortData(payload));
  }, []);

  useEffect(() => {
    let payload = {
      alignment,
      btnid,
      sortAsc,
    };
    dispatch(pekaActions.filterAndSortData(payload));
  }, [alignment, btnid, sortAsc]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const onClickCategory = (event) => {
    setBtnId(event);
  };

  const onClickSorting = (e) => {
    setSort((preState) => !preState);
  };

  return (
    <>
      <div>
        <Container maxWidth="xs" className={`${classes.containerCls}`}>
          <div className={`${classes.btnContainer}`}>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  color={
                    (btnid == "101-pool" && "btnPrimary") || "btnSecondary"
                  }
                  text="101 POOL"
                  width="fit-content"
                  id="101-pool"
                  onClick={() => onClickCategory("101-pool")}
                  btnid={btnid}
                ></Button>
              </Grid>
              <Grid item>
                <Button
                  color={
                    (btnid == "201-pool" && "btnPrimary") || "btnSecondary"
                  }
                  text="201 POOL"
                  width="fit-content"
                  id="201-pool"
                  onClick={() => onClickCategory("201-pool")}
                  btnid={btnid}
                ></Button>
              </Grid>
              <Grid item>
                <Button
                  color={(btnid == "bestof" && "btnPrimary") || "btnSecondary"}
                  text="DEALS"
                  width="fit-content"
                  id="bestof"
                  onClick={() => onClickCategory("bestof")}
                  btnid={btnid}
                ></Button>
              </Grid>
              <Grid item>
                <Button
                  color={(btnid == "points" && "btnPrimary") || "btnSecondary"}
                  text="POINTS"
                  width="fit-content"
                  id="points"
                  onClick={() => onClickCategory("points")}
                  btnid={btnid}
                ></Button>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              className={`${classes.containerSpacing}  ${classes.btnContainer}`}
            >
              <Grid item className={`${classes.toggleSection}`}>
                <ToggleButtonGroup
                  className={`${classes.toggleGrp}`}
                  size="medium"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="2">
                    <span
                      style={{
                        color: alignment == "2" && theme.palette.neutrals.white,
                      }}
                    >
                      2
                    </span>
                    &nbsp;
                    <img
                      style={{ opacity: alignment != "2" && "0.5" }}
                      className={`${classes.heroImgcls}`}
                      alt="Groups"
                      src={
                        (alignment == "2" && people_white_18dp) ||
                        people_black_18dp
                      }
                    />
                  </ToggleButton>
                  <ToggleButton value="6">
                    <span
                      style={{
                        color: alignment == "6" && theme.palette.neutrals.white,
                      }}
                    >
                      6
                    </span>
                    &nbsp;
                    <img
                      style={{ opacity: alignment != "6" && "0.5" }}
                      className={`${classes.heroImgcls}`}
                      alt="People"
                      src={
                        (alignment == "6" && groups_white_18dp) ||
                        groups_black_18dp
                      }
                    />
                  </ToggleButton>
                </ToggleButtonGroup>
                <Button
                  color="btnTertiaryTwo"
                  text="&#8377;"
                  width="fit-content"
                  onClick={(e) => onClickSorting(e)}
                  endIcon={
                    (sortAsc == true && (
                      <ArrowUpwardSharpIcon></ArrowUpwardSharpIcon>
                    )) || <ArrowDownwardSharpIcon></ArrowDownwardSharpIcon>
                  }
                ></Button>
              </Grid>
              <Grid item className={`${classes.center}`}>
                <Button
                  color="btnGray"
                  text="My Matches"
                  width="fit-content"
                  endIcon={
                    <ArrowForwardIosSharpIcon></ArrowForwardIosSharpIcon>
                  }
                ></Button>
              </Grid>
            </Grid>
          </div>
          <div>
            {peka.dataToRender.length > 0 &&
              peka.dataToRender.map((data, i) => (
                <Card key={i} id={i}  className={`${classes.card}`}>
                  <CardContent>
                    <Grid
                      container
                      className={`${classes.center} ${classes.containerSpacing}`}
                    >
                      <Grid item className={`${classes.center}`}>
                        <Typography
                          component={Text}
                          variant2="h3"
                          align="center"
                        >
                          &#8377; {data.betValue}
                        </Typography>
                      </Grid>
                      <Grid item className={`${classes.center}`}>
                        <div
                          className={`${classes.members}  ${classes.center}`}
                        >
                          <span>{data.numPlayers}</span>
                          &nbsp;
                          <img
                            style={{ opacity: "0.6" }}
                            className={`${classes.heroImgcls}`}
                            alt="People"
                            src={
                              (data.numPlayers == 6 && groups_black_18dp) ||
                              people_black_18dp
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item className={`${classes.center}`}>
                        <Button
                          color="btnPrimary"
                          text="PLAY"
                          width="fit-content"
                        ></Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    className={`${classes.justifyRight} ${classes.greyBackground}`}
                  >
                    <Typography
                      component={Text}
                      variant2="b2Regular"
                      align="right"
                    >
                      Bonus allowed
                    </Typography>
                  </CardActions>
                </Card>
              ))}
            {peka.dataToRender.length == 0 && (
              <div className={`${classes.center}  ${classes.nodata}`}>
                <Typography variant2="h1" align="center">
                  No Data Available
                </Typography>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
export default GameLobby;
