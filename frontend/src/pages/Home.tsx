import React, { useState } from "react";
import StockSearch from "../components/StockSearch";
import StockChart from "../components/StockChart";
import { fetchStockData, getStockPrediction } from "../services/api";

interface StockData {
  date: string;
  close?: number;
  predicted?: number;
}

const Home: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);

  const handleSearch = async (symbol: string) => {
    const data = await fetchStockData(symbol);
    const prediction = await getStockPrediction(symbol);

    // Format data for chart
    const chartData: StockData[] = data.map((item) => ({
      date: item.date.substring(0, 10),
      close: item.close,
    }));
    chartData.push({ date: "Predicted", predicted: prediction });

    setStockData(chartData);
    setPredictedPrice(prediction);
  };

  return (
    <div>
      <StockSearch onSearch={handleSearch} />
      {stockData.length > 0 && (
        <StockChart data={stockData} prediction={predictedPrice !== null} />
      )}
    </div>
  );
};

export default Home;
