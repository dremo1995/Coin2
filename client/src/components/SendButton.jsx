import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const SendButton = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);
  const handleSubmit = async (e) => {
    try {
      let { addressTo, amount, message } = formData;
      e.preventDefault();
      if (!addressTo || !amount || !message) {
        alert("Some info is missing");
        return;
      }
      await sendTransaction();
      let inputs = document.getElementsByTagName("input");
      inputs.map((input) => {
        input.value = "";
      });
    } catch (error) {
      console.log(error);
    }
  };

  let content = (
    <button
      type="button"
      onClick={handleSubmit}
      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
    >
      Send Now
    </button>
  );

  return content;
};

export default SendButton;
