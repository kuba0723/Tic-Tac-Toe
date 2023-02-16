const start = document.querySelector("#gamestart");
let playerName = "";
start.addEventListener("click", () => {
  playerName = document.querySelector("#name").value;
  choosePlayer();
});
let player = "";

function choosePlayer() {
  const playerX = document.createElement("div");
  playerX.classList.add("move");
  playerX.setAttribute("id", "X");
  playerX.textContent = "X";
  const playerO = document.createElement("div");
  playerO.classList.add("move");
  playerO.setAttribute("id", "O");
  playerO.textContent = "O";
  const body = document.querySelector("body");
  while (body.lastElementChild) body.removeChild(body.lastElementChild);
  body.appendChild(playerX);
  body.appendChild(playerO);
  playerX.addEventListener("click", () => {
    player = "X";
    while (body.lastElementChild) body.removeChild(body.lastElementChild);
    makegame();
  });
  playerO.addEventListener("click", () => {
    player = "O";
    while (body.lastElementChild) body.removeChild(body.lastElementChild);
    makegame();
  });
}
function makegame() {
  if (playerName == "" || playerName == "O" || playerName == "X") {
    playerName = player;
  }
  let board = [];
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("gameboard");
  document.querySelector("body").appendChild(gameBoard);
  for (let x = 1; x <= 3; x++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", "row" + x);
    gameBoard.appendChild(row);
    for (let y = 1; y <= 3; y++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.setAttribute("id", `${x}, ${y}`);
      document.getElementById("row" + x).appendChild(block);
      let square = {
        row: x,
        block: y,
        takenBy: "",
        id: document.getElementById(`${x}, ${y}`),
      };
      board.push(square);
    }
  }
  let winner = false;
  let counter = 0;
  board.forEach((key) => {
    key.id.addEventListener("click", () => {
      if (key.takenBy == "") {
        key.id.textContent = player;
        key.takenBy = player;
        !(function checkWin() {
          counter++;
          if (
            board[0].takenBy == player &&
            board[1].takenBy == player &&
            board[2].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[3].takenBy == player &&
            board[4].takenBy == player &&
            board[5].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[6].takenBy == player &&
            board[7].takenBy == player &&
            board[8].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[0].takenBy == player &&
            board[3].takenBy == player &&
            board[6].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[1].takenBy == player &&
            board[4].takenBy == player &&
            board[7].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[2].takenBy == player &&
            board[5].takenBy == player &&
            board[8].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[0].takenBy == player &&
            board[4].takenBy == player &&
            board[8].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (
            board[2].takenBy == player &&
            board[4].takenBy == player &&
            board[6].takenBy == player
          ) {
            console.log(`${player} Wins`);
            winner = true;
          } else if (counter == 9) {
            console.log("DRAW");
            winner = "draw";
          } else {
            return;
          }
          if (winner == true || winner == "draw") {
            console.log(board)
            console.log(counter)
            const body = document.querySelector("body");
            const button = document.createElement("button");
            button.setAttribute("id", "gamestart");
            button.textContent = "restart";
            while (body.lastElementChild)
              body.removeChild(body.lastElementChild);
            const win = document.createElement("div");
            win.classList.add("winner");
            if (winner == "draw") {
                win.textContent = "It's a draw";
            } else if(player == "X"){
                win.textContent = `${playerName} WINS`;
            }
            else{
                win.textContent = `AI wins`
            }
            body.appendChild(win);
            body.appendChild(button);
            button.addEventListener("click", () => choosePlayer());
          }
        })();
        if (player == "X") {
          player = "O";
        } else player = "X";
        if(counter % 2 == 1 && winner == false) {

                let x = Math.floor(Math.random() * 9);
                    while(board[x].takenBy != ""){
                x = Math.floor(Math.random() * 9);
            }
            console.log(x)
            board[x].id.click()
          }
      }
    });
  });
}
