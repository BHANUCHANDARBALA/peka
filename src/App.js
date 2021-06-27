import React from "react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((them) => ({
  mainCls: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div id="mainDiv" className={classes.mainCls}>
              <AppRouter></AppRouter>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
