# Avventura contracts

Solidity contracts for Avventura, the Web3 social RPG. 

## Avventura features 

- Blockchain Integration: Every player's move is [seamlessly recorded on OP Mainnet](https://optimistic.etherscan.io/address/0x595ab9ace017d77960eeae61d29b3d44bcf53f17)
- Creative Freedom: Create and edit your own adventures or explore tales crafted by others
- Versatility: Perfect for both entertainment and educational contexts
- Brand Engagement: A new frontier for interactive marketing and audience connection
- Educational Potential: Craft immersive, interactive learning experiences
- Community-Driven: Explore a growing library of user-created adventures

Planned: 

- AI-Enhanced Editing: Planned Claude (Sonnet 3.5) integration to assist story creators
- Adaptive Storytelling: Stories that can flex and grow based on player choices

Avventura isn't just for gamers - it's an exciting new frontier for storytellers, educators, creators, and brands to engage audiences through interactive narratives, offering endless possibilities in the world of Web3 gaming.

### Links 

-   Live demo: **https://avventura.fun**
-   UI repo: https://github.com/w3hc/avventura-ui
-   API: https://avventura.jcloud-ver-jpe.ik-server.com/api

### First deployment

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