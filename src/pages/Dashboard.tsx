import styled from "styled-components";

import WeatherWidget from "../components/WeatherWidget";
import * as weather from "../mocks/weather.json";
import DelayedRoutes from "../components/DelayedRoutes";
import RampChart from "../components/RampChart";

export const Dashboard = () => {
  return (
    <Sidebar>
      <WeatherWidget weather={weather} />
      <DelayedRoutes />
      <RampChart />
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 300px;
  grid-template-rows: repeat(3, auto);
  padding: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;
