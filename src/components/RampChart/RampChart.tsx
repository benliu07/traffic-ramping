import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import throttle from "lodash.throttle";

import getRampAlgorithms, { Ramps } from "../../mocks/getRampAlgorithms";
import {
  DEFAULT_BACKGROUND_COLOUR,
  LIGHT_GREY,
  PIE_CHART_COLOURS,
  StyledAccordion,
} from "../../utils/commonStyles";

interface ChartData {
  name: string;
  value: number;
}

const RampChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const updateChartData = (ramps: Ramps) => {
    const counts = new Map<string, number>();

    for (let i = 0; i < ramps.length; i++) {
      const algorithm = ramps[i].algorithm;
      counts.set(algorithm, (counts.get(algorithm) || 0) + 1);
    }

    const chartData = Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));

    setChartData(chartData);
  };

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

    const intervalId = getRampAlgorithms(onUpdate);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
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
            <PieChart width={250} height={250}>
              <Pie
                animationDuration={500}
                animationEasing="ease-in-out"
                cx="50%"
                cy="50%"
                data={chartData}
                dataKey="value"
                fill="#8884d8"
                innerRadius={60}
                label={({ x, y, index }) => (
                  <text
                    dominantBaseline="central"
                    fill={PIE_CHART_COLOURS[index % PIE_CHART_COLOURS.length]}
                    fontSize={"1rem"}
                    fontWeight="bold"
                    textAnchor="middle"
                    x={x}
                    y={y}
                  >
                    {`${chartData.length > 0 && chartData[index].value}%`}
                  </text>
                )}
                labelLine={false}
                outerRadius={90}
                paddingAngle={0}
              >
                {chartData.map((_, index) => (
                  <Cell
                    fill={PIE_CHART_COLOURS[index % PIE_CHART_COLOURS.length]}
                    key={`cell-${index}`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartWrapper>
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  padding: 1.5rem;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

const ChartWrapper = styled.div`
  align-items: center;
  background-color: ${DEFAULT_BACKGROUND_COLOUR};
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export default RampChart;
