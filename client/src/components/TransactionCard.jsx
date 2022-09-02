import React from "react";
import { shortenAddress } from "../utils/shortenAddress";
import { SiEthereum } from "react-icons/si";

const TransacactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  return (
    <div className="bg-neutral-800 m-4 flex flex-2 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px]flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-2 justify-start mx-4 w-full">
          <div className="justify-start w-full mb-6 p-2">
            <a
              href={`https://ropsten.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noopener noreferer"
            >
              <p className="text-white text-base">
                From: {shortenAddress(addressFrom)}
              </p>
            </a>
            <a
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noopener noreferer"
            >
              <p className="text-white text-base">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-white text-base">Amount: {amount} ETH</p>
            {message && (
              <>
                <br />
                <p className="text-white text-base">Message: {message}</p>
              </>
            )}
            <br />
          </div>

          <div>
            <SiEthereum fontSize={100} />
          </div>
        </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold ">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
export default TransacactionCard;
