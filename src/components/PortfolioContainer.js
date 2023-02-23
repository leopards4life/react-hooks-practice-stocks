import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {

  function handleRemoveStock() {
    console.log("Remove")
  }

  const stockList = stocks.map((stock) => (
    <Stock 
      key={stock.id}
      stock={stock}
      onStockClick={handleRemoveStock}
    />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
