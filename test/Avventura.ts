import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Avventura", function () {
    async function deployContracts() {
        const [owner, otherAccount] = await ethers.getSigners()
        const Avventura = await ethers.getContractFactory("Avventura")
        const avventura = await Avventura.deploy()
        return { avventura, owner, otherAccount }
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { avventura, owner } = await loadFixture(deployContracts)
            expect(await avventura.owner()).to.equal(owner.address)
        })
    })

    describe("Game Creation", function () {
        it("Should create a game", async function () {
            const { avventura } = await loadFixture(deployContracts)

            await avventura.createGame(1)
            const game0 = await avventura.games(1)
            expect(game0.id).to.equal(1)
            expect(game0.currentStep).to.equal(0)

            await avventura.createGame(8)
            const game8 = await avventura.games(8)
            expect(game8.id).to.equal(8)
            expect(game8.currentStep).to.equal(0)
        })

        it("Should not allow non-owners to create a game", async function () {
            const { avventura, otherAccount } = await loadFixture(
                deployContracts
            )
            await expect(avventura.connect(otherAccount).createGame(1)).to.be
                .reverted
        })
    })

    describe("Game Movement", function () {
        it("Should move a game to the next step", async function () {
            const { avventura, owner } = await loadFixture(deployContracts)
            await avventura.createGame(1)
            await expect(avventura.move(1, 2))
                .to.emit(avventura, "Moved")
                .withArgs(1, 0, 2)
            const game = await avventura.games(1)
            expect(game.currentStep).to.equal(2)
        })

        it("Should not move a non-existent game", async function () {
            const { avventura } = await loadFixture(deployContracts)
            await expect(avventura.move(999, 1)).to.be.revertedWith(
                "Game does not exist"
            )
        })

        it("Should not allow non-owners to move a game", async function () {
            const { avventura, otherAccount } = await loadFixture(
                deployContracts
            )
            await avventura.createGame(1)
            await expect(avventura.connect(otherAccount).move(1, 2)).to.be
                .reverted
        })
    })
})
