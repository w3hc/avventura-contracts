// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Avventura - The Web3 social RPG
/// @author Julien Béranger
/// @notice This contract allows Avventura API to create and manage games
/// @dev All functions are currently restricted to the owner
contract Avventura is Ownable {
    /// @notice Struct to represent a game
    /// @dev The id field is currently redundant with the mapping key, but kept for potential future use
    struct Game {
        uint id;
        uint currentStep;
    }

    /// @notice Mapping of game IDs to Game structs
    mapping(uint => Game) public games;

    /// @notice Emitted when a game moves to a new step
    /// @param gameID The ID of the game that moved
    /// @param previousStep The step the game was on before the move
    /// @param newStep The step the game is on after the move
    event Moved(uint indexed gameID, uint previousStep, uint newStep);

    /// @notice Initializes the contract setting the deployer as the initial owner
    constructor() Ownable(msg.sender) {}

    /// @notice Creates a new game with the given ID
    /// @dev Only the owner can create games
    /// @param _gameID The ID to assign to the new game
    /// @return bool Returns true if the game was successfully created
    function createGame(uint _gameID) public onlyOwner returns (bool) {
        games[_gameID] = Game(_gameID, 0);
        return true;
    }

    /// @notice Moves a game to a new step
    /// @dev Only the owner can move games. Emits a Moved event.
    /// @param _gameID The ID of the game to move
    /// @param _nextStep The step to move the game to
    function move(uint _gameID, uint _nextStep) public onlyOwner {
        require(games[_gameID].id == _gameID, "Game does not exist");
        uint previousStep = games[_gameID].currentStep;
        games[_gameID].currentStep = _nextStep;
        emit Moved(_gameID, previousStep, _nextStep);
    }
}
