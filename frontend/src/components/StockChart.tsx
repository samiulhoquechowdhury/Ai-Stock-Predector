import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface StockChartProps {
  data: { date: string; close: number; predicted?: number }[];
  prediction?: boolean;
}

const StockChart: React.FC<StockChartProps> = ({ data, prediction }) => {
  return (
    <div className="chart-container">
      <h2>Stock Price Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            name="Actual Price"
          />
          {prediction && (
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="red"
              name="Predicted Price"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
