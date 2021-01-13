import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#691866"
    },
    secondary: {
      main: "#efefef"
    },
  },
  typography: {
    fontFamily: `'Noto Serif', serif;`,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
