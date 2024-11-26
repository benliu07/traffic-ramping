import styled from "styled-components";

import { WeatherWidget } from "../components/WeatherWidget";
import * as weather from "../mocks/weather.json";
import DelayedRoutes from "../components/DelayedRoutes";

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <WeatherWidget weather={weather} />
      <DelayedRoutes />
      <div>3rd Part</div>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
