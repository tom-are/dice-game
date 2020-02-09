# Dice Game

## Get started

After pulling the repo down, run `npm install`, then `npm start`. Your browser should open up with the game running, with hot-reloading as you make code changes.

To run Storybook, useful for developing components one at a time in isolation from the rest of the app, run `npm run storybook`. This will open up storybook running locally, and auto refresh with changes.

Before deploying, the app should be built with `npm run build`. This will compile the static assets into the `build` folder, ready for deployment to [GitHub Pages](https://tom-are.github.io/dice-game/) or your host of choice.

## NPM Scripts
| Script (`npm run ...`) | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| start                  | Starts local development and opens browser on https://localhost:3000         |
| build                  | Builds static files, ready for deployment                                    |
| test                   | Lints files, then runs unit tests                                            |
| test:unit              | Runs unit tests and checks coverage thresholds                               |
| test:lint              | Runs eslint                                                                  |
| test:tdd               | Runs unit tests and watches for file changes                                 |
| storybook              | Opens [Storybook](https://storybook.js.org/) for component based development |

---

## Background
Our product team have identified a gap in the market for an innovative new game and we need a playable prototype.
The game involves the user rolling a dice against a computer, with the highest roll winning the game.

## Brief
Your challenge is to use React to create a playable prototype whereby a player can roll a dice against the computer and the game will display the result of each roll and inform the player whether they won or lost.

The game should keep track of the number of wins and losses for each player and also recognise when the game is a draw.

## Things to consider
We’re hoping this game is going to go big and we’ll be expanding out from your initial codebase.
As such, code quality is important to us. We’ll be looking for a good application structure, sensibly broken down into components.

On the testing front, its important to at least highlight the testing approach in this initial prototype so we’re keen to see some tests to establish the testing patterns to follow as we grow the codebase.

On the design side, we appreciate our initial design is rudimentary; feel free to get creative and show us what you can do or just follow our design if you prefer.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
