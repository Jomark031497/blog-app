import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store  from "./redux/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#691866",
    },
    secondary: {
      main: "#efefef",
    },
  },
  typography: {
    fontFamily: `'Noto Serif', serif;`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
