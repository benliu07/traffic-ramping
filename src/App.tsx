import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Dashboard } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>Traffic Ramping Dashboard</Title>
        </Header>
        <main>
          <Dashboard />
        </main>
      </AppContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');

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
  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #1e1e2e;
  border-bottom: 2px solid #333;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0;
`;

export default App;
