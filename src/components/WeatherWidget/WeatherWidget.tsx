import { BsCloudSun, BsSun } from "react-icons/bs";
import styled from "styled-components";

interface WeatherWidgetProps {
  weather: {
    chanceOfRain: number;
    humidity: number;
    temperature: number;
    tomorrowTemperature: number;
    windSpeed: number;
  };
}

export const WeatherWidget = ({ weather }: WeatherWidgetProps) => {
  const {
    temperature,
    humidity,
    chanceOfRain,
    windSpeed,
    tomorrowTemperature,
  } = weather;

  return (
    <WeatherContainer>
      <LocationWeather>
        <LocationDetails>
          <City>Melbourne</City>
          <Temperature>{temperature}&deg;</Temperature>
          <Date>Tue 16th 3:46 PM</Date>
        </LocationDetails>
        <WeatherIcon>
          <BsCloudSun size={"6rem"} />
        </WeatherIcon>
      </LocationWeather>
      <WeatherStats>
        <StatRow>
          <StatName>Humidity</StatName>
          <StatValue>{humidity}%</StatValue>
        </StatRow>
        <StatRow>
          <StatName>Chance of Rain</StatName>
          <StatValue>{chanceOfRain}%</StatValue>
        </StatRow>
        <StatRow>
          <StatName>Wind</StatName>
          <StatValue>
            {windSpeed} <Unit>kmh</Unit>
          </StatValue>
        </StatRow>
        <StatRow>
          <StatName>Tomorrow</StatName>
          <StatValue>
            {tomorrowTemperature}&deg; <BsSun />
          </StatValue>
        </StatRow>
      </WeatherStats>
    </WeatherContainer>
  );
};

const City = styled.div`
  font-weight: 100;
`;

const Date = styled.div`
  font-weight: 100;
  font-size: 0.75rem;
`;

const LocationDetails = styled.div`
  text-align: center;
`;

const LocationWeather = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const StatName = styled.div`
  font-weight: 100;
  width: 120px;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
`;

const StatValue = styled.div``;

const Temperature = styled.div`
  font-size: 3.25rem;
`;

const Unit = styled.span`
  font-weight: 100;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
`;

const WeatherIcon = styled.div``;

const WeatherStats = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
