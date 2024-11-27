import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import DelayedRoutes from "./DelayedRoutes";
import delayedRoutes from "../../mocks/delayedRoutes.json";

jest.mock("../../mocks/delayedRoutes.json", () => [
  {
    distance: 13,
    id: 1,
    mainRoad: "Monash Fwy Out",
    roadNameEnd: "Eastlink",
    roadNameStart: "Kings Way",
    trafficStatus: "red",
    travelTime: 45,
  },
  {
    distance: 15,
    id: 2,
    mainRoad: "Monash Fwy Out",
    roadNameEnd: "Eastlink",
    roadNameStart: "Kings Way",
    trafficStatus: "red",
    travelTime: 28,
  },
]);

describe("DelayedRoutes", () => {
  it("renders each route with the correct details", () => {
    render(<DelayedRoutes />);

    delayedRoutes.forEach((route, index) => {
      const containers = screen.getAllByTestId("traffic-status-container");
      const container = containers[index];

      expect(within(container).getByTestId("main-road")).toHaveTextContent(
        route.mainRoad
      );
      expect(within(container).getByTestId("distance")).toHaveTextContent(
        `${route.distance}km`
      );
      expect(
        within(container).getByTestId("road-name-start")
      ).toHaveTextContent(route.roadNameStart);
      expect(within(container).getByTestId("road-name-end")).toHaveTextContent(
        route.roadNameEnd
      );
      expect(within(container).getByTestId("travel-time")).toHaveTextContent(
        `${route.travelTime} min`
      );
    });
  });

  it("hides the delayed route details when the accordion is collapsed", () => {
    render(<DelayedRoutes />);

    expect(screen.getByTestId("delayed-routes-details")).toBeVisible();

    const accordionHeader = screen.getByTestId("delayed-routes-header");
    fireEvent.click(accordionHeader);

    expect(accordionHeader).toHaveAttribute("aria-expanded", "false");
  });
});
