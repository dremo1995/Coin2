import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import TransactionCard from "./TransactionCard";
const Transactions = () => {
  const { transactions, connectedAccount } = useContext(TransactionContext);

  return (
    <div className=" flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className=" flex flex-col md:p-12 py-12 px-4">
        {connectedAccount ? (
          <h3 className="text-white text-3xl text-center my-2">Transactions</h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2 min-h-screen items-center p-y">
            Connect your account to see the lastest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-cetner mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
