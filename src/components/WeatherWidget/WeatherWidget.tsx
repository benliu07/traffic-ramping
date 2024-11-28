import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { HTMLAttributes, ReactNode } from "react";
import { BsCloudSun, BsSun } from "react-icons/bs";
import styled from "styled-components";

interface WeatherWidgetProps {
  weather: {
    chanceOfRain: number;
    city: string;
    humidity: number;
    temperature: number;
    tomorrowTemperature: number;
    windSpeed: number;
  };
}

const WeatherWidget = ({ weather }: WeatherWidgetProps) => {
  const {
    chanceOfRain,
    city,
    humidity,
    temperature,
    tomorrowTemperature,
    windSpeed,
  } = weather;

  return (
    <Grid
      container
      data-testid="weather-widget"
      rowSpacing={4}
      textAlign="center"
    >
      <Grid display="flex" gap={1} size={12}>
        <Grid alignContent="end" size={6}>
          <Typography
            data-testid="city-name"
            fontWeight="100"
            lineHeight={1}
            variant="h6"
          >
            {city}
          </Typography>
          <Typography
            data-testid="current-temperature"
            fontWeight="light"
            variant="h2"
          >
            {temperature}&deg;
          </Typography>
          <Typography fontWeight="light" variant="body2">
            Tue 16th 3:46 PM
          </Typography>
        </Grid>
        <Grid data-testid="weather-icon" size={6}>
          <BsCloudSun size="7rem" />
        </Grid>
      </Grid>
      <Stack direction="column" flex="auto" textAlign="left">
        <WeatherStack data-testid="humidity" title="Humidity">
          {humidity}%
        </WeatherStack>
        <WeatherStack data-testid="chance-of-rain" title="Chance of Rain">
          {chanceOfRain}%
        </WeatherStack>
        <WeatherStack data-testid="wind-speed" title="Wind">
          {windSpeed}{" "}
          <Typography component="span" fontWeight="100" variant="body2">
            km/h
          </Typography>
        </WeatherStack>
        <WeatherStack data-testid="tomorrow-temperature" title="Tomorrow">
          {tomorrowTemperature}&deg; <BsSun />
        </WeatherStack>
      </Stack>
    </Grid>
  );
};

export default WeatherWidget;

interface WeatherStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
}

const WeatherStack = ({ children, title, ...props }: WeatherStackProps) => {
  return (
    <Stack alignItems="center" direction="row" gap={1}>
      <StyledTypography fontWeight="100" variant="body1">
        {title}
      </StyledTypography>
      <BoldTypography variant="h6" {...props}>
        {children}
      </BoldTypography>
    </Stack>
  );
};

const BoldTypography = styled(Typography)`
  flex: 3;
  font-weight: 400;
`;

const StyledTypography = styled(Typography)`
  flex: 5;
  line-height: 2;
  padding-left: 0.5rem;

  @media (max-width: 480px) {
    padding-left: 10%;
  }
`;
