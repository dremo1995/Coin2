import React from "react";
import { Graph } from "./index.js";

const Market = () => (
  <div className="h-screen pt-20">
    <div className="text-white text-center font-extrabold text-2xl">
      <span className="pr-2 ">🚀</span>Trending Crypto{" "}
      <span className="pl-2">🚀</span>
    </div>
    <Graph />
    <div className="text-white text-center items-center">
      This Graph is powered by
      <a
        src="https://www.coingecko.com/"
        className="cursor-pointer font-bold justify-center items-center"
      >
        <img
          src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
          alt="coin-gecko"
          className="ml-auto mr-auto"
        />
      </a>
    </div>
  </div>
);

export default Market;
