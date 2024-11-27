import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Dashboard } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MEDIUM_GREY } from "./utils/commonStyles";

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
      <AppContainer>
        <main>
          <Dashboard />
        </main>
      </AppContainer>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    box-sizing: border-box;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
