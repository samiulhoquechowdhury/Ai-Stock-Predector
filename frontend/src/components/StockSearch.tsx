import React, { useState } from "react";

interface StockSearchProps {
  onSearch: (symbol: string) => void;
}

const StockSearch: React.FC<StockSearchProps> = ({ onSearch }) => {
  const [symbol, setSymbol] = useState<string>("");

  const handleSearch = () => {
    if (symbol) onSearch(symbol.toUpperCase());
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter Stock Symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default StockSearch;
