// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

{/* <ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider> */}
