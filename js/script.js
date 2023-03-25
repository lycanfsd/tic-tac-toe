const main = document.querySelector(".main");

//Gameboard
const Gameboard = (() => {
  const board = new Array(9);
  for (let i = 0; i < board.length; i++) {
    board[i] = 0;
  }
  const getBoard = () => board;
  return { getBoard };
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
})();
