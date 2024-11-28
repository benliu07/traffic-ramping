import { useCallback, useEffect, useRef, useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import throttle from "lodash.throttle";
import styled from "styled-components";

import {
  ACCORDION_BACKGROUND_COLOUR,
  LIGHT_GREY,
  StyledAccordion,
} from "../../utils/commonStyles";
import getRampAlgorithms, { Ramps } from "../../utils/getRampAlgorithms";
import { PieChartDisplay } from "./PieChartDisplay";

export interface ChartData {
  name: string;
  value: number;
}

const RampChart = () => {
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const updateChartData = (ramps: Ramps) => {
    // Store ramp algorithms in a Map (similar to a hashmap) for efficient lookups and updates, we want to track the occurences for each algorithm in a key value pair
    const counts = new Map<string, number>();

    ramps.forEach(({ algorithm }) => {
      counts.set(algorithm, (counts.get(algorithm) || 0) + 1);
    });

    const chartData = Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));

    setChartData(chartData);
  };

  // Throttling the update to the chart data every 2.5 seconds to prevent excessive updates as data changes rapidly
  const throttledUpdateChartData = useCallback(
    throttle((ramps: Ramps) => {
      updateChartData(ramps);
    }, 2500),
    []
  );

  useEffect(() => {
    const onUpdate = (newRamps: Ramps) => {
      throttledUpdateChartData(newRamps);
    };

    // Set up the interval to fetch ramp algorithms and store the reference
    intervalRef.current = getRampAlgorithms(onUpdate);

    // Cleanup function to clear the interval and cancel the throttled function on unmount to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      throttledUpdateChartData.cancel();
    };
  }, [throttledUpdateChartData]);

  return (
    <section data-testid="ramp-chart-container">
      <StyledAccordion defaultExpanded>
        <AccordionSummary
          aria-controls="delayed-routes-content"
          expandIcon={<ExpandMoreIcon sx={{ color: LIGHT_GREY }} />}
          id="delayed-routes-header"
        >
          RAMP CHART
        </AccordionSummary>
        <AccordionDetails>
          <ChartWrapper>
            <PieChartDisplay
              chartData={chartData}
              height={250}
              innerRadius={60}
              outerRadius={90}
              width={250}
            />
          </ChartWrapper>
        </AccordionDetails>
      </StyledAccordion>
    </section>
  );
};

const ChartWrapper = styled.div`
  align-items: center;
  background-color: ${ACCORDION_BACKGROUND_COLOUR};
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export default RampChart;
