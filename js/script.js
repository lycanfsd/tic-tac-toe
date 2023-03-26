const main = document.querySelector(".main");

//Gameboard
const Gameboard = (() => {
  const board = new Array(9);
  for (let i = 0; i < board.length; i++) {
    board[i] = 0;
  }
  const getBoard = () => board;
  // Adds player mark to the board array. Position is from 0-8.
  const addMark = (position, player) => {
    if (board[position] === 0 && player.getMark() === "X") {
      board[position] = 1;
    } else if (board[position] === 0 && player.getMark() === "O") {
      board[position] = 2;
    }
  };
  return { getBoard, addMark };
})();

//Create Players
const createPlayer = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;
  return { getName, getMark };
};

//Game Flow
const GameController = (() => {
  const playerOne = createPlayer("Player One", "X");
  const playerTwo = createPlayer("Player Two", "O");
  let activePlayer = playerOne;
  const switchTurns = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  };
  const getActivePlayer = () => activePlayer;
  return { getActivePlayer };
})();

//Display
const DisplayController = (() => {
  for (let i = 0; i < Gameboard.getBoard().length; i++) {
    let div = document.createElement("div");
    div.classList.add("cellGrid");
    div.setAttribute("id", `cell${i}`);
    div.setAttribute("data-value", Gameboard.getBoard()[i]);
    main.appendChild(div);
  }
  // Updates Display div to correct class based on board array value at that position
  function updateDisplay() {
    for (let i = 0; i < Gameboard.getBoard().length; i++) {
      switch (Gameboard.getBoard()[i]) {
        case 1: {
          let div = document.querySelector(`#cell${i}`);
          div.setAttribute("data-value", Gameboard.getBoard()[i]);
          div.classList.add("is-marked-X");
          break;
        }
        case 2: {
          let div = document.querySelector(`#cell${i}`);
          div.setAttribute("data-value", Gameboard.getBoard()[i]);
          div.classList.add("is-marked-O");
          break;
        }
        default:
          break;
      }
    }
  }
  // Needs to take user click and see who clicked then add mark at specific clicked position
  const divGrid = document.querySelectorAll(".cellGrid");
  divGrid.forEach((div) => {
    div.addEventListener("click", (e) => {
      const arr = Array.prototype.slice.call(divGrid);
      Gameboard.addMark(
        arr.indexOf(e.target),
        GameController.getActivePlayer()
      );
      updateDisplay();
    });
  });
})();

//Delete After
console.log(Gameboard.getBoard());
