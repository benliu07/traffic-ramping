import { render, screen } from "@testing-library/react";

import WeatherWidget from "./WeatherWidget";

describe("WeatherWidget", () => {
  const mockWeather = {
    chanceOfRain: 20,
    city: "Melbourne",
    humidity: 60,
    temperature: 25,
    tomorrowTemperature: 28,
    windSpeed: 15,
  };

  it("renders the weather widget", () => {
    render(<WeatherWidget weather={mockWeather} />);

    expect(screen.getByTestId("weather-widget")).toBeInTheDocument();
  });

  it("renders the city name and temperature", () => {
    render(<WeatherWidget weather={mockWeather} />);

    expect(screen.getByTestId("city-name")).toHaveTextContent("Melbourne");
    expect(screen.getByTestId("current-temperature")).toHaveTextContent("25°");
  });

  it("renders the weather icon", () => {
    render(<WeatherWidget weather={mockWeather} />);

    expect(screen.getByTestId("weather-icon")).toBeInTheDocument();
  });

  it("renders the weather details", () => {
    render(<WeatherWidget weather={mockWeather} />);

    expect(screen.getByTestId("humidity")).toHaveTextContent("60%");
    expect(screen.getByTestId("chance-of-rain")).toHaveTextContent("20%");
    expect(screen.getByTestId("wind-speed")).toHaveTextContent("15");
    expect(screen.getByTestId("tomorrow-temperature")).toHaveTextContent("28°");
  });
});
