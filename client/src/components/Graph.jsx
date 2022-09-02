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

const divClass = "m-2 ";

const Graph = () => (
  <div className="p-6">
    <table className="table-auto md:table-fixed text-white border border-separate border-slate-300 rounded-lg w-full h-full">
      <thead>
        <th></th>
        <th className="border border-slate-300 rounded-md p-2">Coin Name</th>
        <th className="border border-slate-300 rounded-md p-2">Rank</th>
        <th className="border border-slate-300 rounded-md p-2">Symbol</th>
      </thead>
      <tbody>
        {graphData.map((coin) => (
          <tr key={coin.item.coin_id}>
            <td className="border border-slate-300 rounded-md">
              <div className="bg-slate-400 rounded-lg h-fit w-fit">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-fit h-fit"
                />
              </div>
            </td>
            <td className="border border-slate-300 rounded-md text-center">
              {coin.item.name}
            </td>
            <td className="border border-slate-300 rounded-md text-center">
              {coin.item.market_cap_rank}
            </td>
            <td className="border border-slate-300 rounded-md text-center">
              {coin.item.symbol}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Graph;
