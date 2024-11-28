import { PieChart, Pie, Cell } from "recharts";

import { PIE_CHART_COLOURS } from "../../utils/commonStyles";
import { ChartData } from "./RampChart";

export const PieChartDisplay = ({ chartData }: { chartData: ChartData[] }) => {
  const total = chartData.reduce((sum, { value }) => sum + value, 0);

  const renderChartLabel = ({
    index,
    x,
    y,
  }: {
    index: number;
    x: number;
    y: number;
  }) => {
    const percentage = total
      ? Math.round((chartData[index].value / total) * 100)
      : 0;

    return (
      <text
        dominantBaseline="central"
        fill={PIE_CHART_COLOURS[index % PIE_CHART_COLOURS.length]}
        fontSize={"1rem"}
        fontWeight="bold"
        textAnchor="middle"
        x={x}
        y={y}
      >
        {percentage}%
      </text>
    );
  };

  return (
    <PieChart width={250} height={250}>
      <Pie
        animationDuration={500}
        animationEasing="ease-in-out"
        cx="50%"
        cy="50%"
        data={chartData}
        dataKey="value"
        innerRadius={60}
        label={renderChartLabel}
        labelLine={false}
        outerRadius={90}
      >
        {chartData.map((_, index) => (
          <Cell
            fill={PIE_CHART_COLOURS[index % PIE_CHART_COLOURS.length]}
            key={`cell-${index}`}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
