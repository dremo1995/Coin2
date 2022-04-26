import React from "react";
import { options } from "../services";
import Graph from "./Graph";

const option = await fetch(
  "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
  options
)
  .then((response) => response.json())
  .catch((err) => console.error(err));

const graphData = option.slice(0, 10);

const Market = () => {
  console.log(graphData);
  return (
    <div className="min-h-screen gradient-bg-transactions">
      <ul>
        {graphData.map((coin, i) => {
          <Graph
            key={i}
            image={coin.image}
            name={coin.name}
            high={coin.high_24h}
            low={coin.low_24h}
            current={coin.current_price}
          />;
        })}
      </ul>
    </div>
  );
};

export default Market;
