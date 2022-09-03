import React from "react";
import { options } from "../services";
const option = await fetch(
  "https://api.coingecko.com/api/v3/search/trending",
  options
)
  .then((response) => response.json())
  .catch((err) => console.error(err));

const graphData = option.coins;
console.log(graphData);

const Graph = () => (
  <div className="p-8">
    <table className="table-auto md:table-fixed text-white border border-collapse border-slate-300 rounded-lg w-full h-full border-r-0 border-l-0">
      <thead>
        <tr>
          <th></th>
          <th className=" rounded-md p-2">Coin Name</th>
          <th className="border border-r-0 border-l-0 rounded-md p-2 py-4">
            Rank
          </th>
          <th className="border border-r-0 border-l-0 rounded-md p-2">
            Symbol
          </th>
        </tr>
      </thead>
      <tbody>
        {graphData.map((coin) => (
          <tr key={coin.item.coin_id}>
            <td className="border border-r-0 border-l-0 rounded-md place-content-center py-2">
              <div>
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="ml-auto mr-auto"
                />
              </div>
            </td>
            <td className="border border-r-0 border-l-0 rounded-md text-center">
              {coin.item.name}
            </td>
            <td className="border border-r-0 border-l-0 rounded-md text-center">
              {coin.item.market_cap_rank}
            </td>
            <td className="border border-r-0 border-l-0 rounded-md text-center">
              {coin.item.symbol}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Graph;
