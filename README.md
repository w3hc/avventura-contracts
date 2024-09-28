# Avventura contracts

Solidity contracts for Avventura, the Web3 social RPG. 

-   Live demo: https://avventura.fun
-   API: https://avventura.jcloud-ver-jpe.ik-server.com/api
-   API repo: https://github.com/strat-web3/avventura
-   UI: https://github.com/w3hc/avventura-ui

First deployment to OP Mainnet: https://optimistic.etherscan.io/address/0x595ab9ace017d77960eeae61d29b3d44bcf53f17

## Supported networks

-   [OP Mainnet](https://chainlist.org/chain/10) ([docs](https://docs.optimism.io/chain/networks#op-mainnet))
-   [Sepolia Testnet](https://chainlist.org/chain/11155111) ([docs](https://ethereum.org/nb/developers/docs/networks/#sepolia))
-   [OP Sepolia Testnet](https://chainlist.org/chain/11155420) ([docs](https://docs.optimism.io/chain/networks#op-sepolia))

## Install

```
pnpm install
```

Create a `.env` file:

```
cp .env.template .env
```

Add your own keys in the `.env` file.

## Test

```
pnpm test
```

## Deploy

```
pnpm deploy:<NETWORK_NAME>
```

## Check balance

You can check the current signer wallet balance:

```
pnpm bal <NETWORK_NAME>
```

## Versions

-   Node [v20.9.0](https://nodejs.org/uk/blog/release/v20.9.0/)
-   PNPM [v8.7.5](https://pnpm.io/pnpm-vs-npm)
-   Hardhat [v2.19.4](https://github.com/NomicFoundation/hardhat/releases/)
-   OpenZeppelin Contracts [v5.0.1](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v5.0.1)
-   Ethers [v6.10.0](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Farcaster](https://warpcast.com/julien-), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).