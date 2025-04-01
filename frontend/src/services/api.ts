// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
// const ML_URL = "http://localhost:5001";

// interface StockHistory {
//   date: string;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
//   volume: number;
// }

// interface PredictionResponse {
//   predicted_price: number;
// }

// export const fetchStockData = async (
//   symbol: string
// ): Promise<StockHistory[]> => {
//   const { data } = await axios.get<StockHistory[]>(
//     `${BASE_URL}/stocks/history/${symbol}`
//   );
//   return data;
// };

// export const getStockPrediction = async (symbol: string): Promise<number> => {
//   const { data } = await axios.get<PredictionResponse>(
//     `${ML_URL}/predict?symbol=${symbol}`
//   );
//   return data.predicted_price;
// };
