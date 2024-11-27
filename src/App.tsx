import React from "react";
import { createGlobalStyle } from "styled-components";
import { Dashboard } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  APP_BACKGROUND_COLOUR,
  MEDIUM_GREY,
  WHITE,
} from "./utils/commonStyles";

const theme = createTheme({
  typography: {
    caption: {
      color: MEDIUM_GREY,
      fontSize: "0.75rem",
      lineHeight: "1.3",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Dashboard />
      </main>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${APP_BACKGROUND_COLOUR};
    box-sizing: border-box;
    color: ${WHITE};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`;

export default App;
