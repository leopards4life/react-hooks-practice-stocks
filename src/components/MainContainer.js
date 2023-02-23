import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stocks => setStocks(stocks))
  }, [])

  function handleAddStock(stockToAdd) {
    const stockInPortfolio = portfolio.find((stock) => 
    stock.id === stockToAdd.id );
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockToAdd]);
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={stocks}
          onAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer
          stocks={portfolio}
           />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
