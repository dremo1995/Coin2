require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.12",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/_1ejb036-hf91gup5G1U27jvgt6Fzx5u",
      accounts: [
        "e9c830a49cca51aa4429f637acb6be9d7e59c8d9082efa9fba63d872917e239c",
      ],
    },
  },
};
