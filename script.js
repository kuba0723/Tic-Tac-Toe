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
      let z = 0
      document.getElementById("row" + x).appendChild(block);
      if (x == 2 && y == 2) {
        z = 1
      }
      let square = {
        row: x,
        block: y,
        takenBy: "",
        id: document.getElementById(`${x}, ${y}`),
        value: z,
      };
      board.push(square);
    }
  }
  let winner = false;
  let counter = 0;
  console.log(board)
  board.forEach((key) => {
    key.id.addEventListener("click", () => {
      if (key.takenBy == "") {
        key.id.textContent = player;
        key.takenBy = player;
        for (let x = 0; x <= 8; x++) {
          if (key.row == board[x].row || key.block == board[x].block) {
            board[x].value++
          }
          else if ((key == board[0]) && (board[4].takenBy == `${player}`) || (key == board[8]) && (board[4].takenBy == `${player}`)) {
            board[0].value = 9
            board[4].value = 9
            board[8].value = 9
          }
          else if ((key == board[2]) && (board[4].takenBy == `${player}`) || (key == board[6]) && (board[4].takenBy == `${player}`)) {
            board[2].value = 9
            board[4].value = 9
            board[6].value = 9
          }
          if ((key.row == board[x].row) && (key != board[x]) ) {
            if (key.takenBy === board[x].takenBy) {
              console.log(board[x])
              console.log(key)
              for (let z = 0; z <= 8; z++) {
                if (board[z].row == key.row) {
                  board[z].value = 9
                }

              }
            }
          }
          else if((key.row != board[x].row) && (board[x].takenBy != "")&&(key.block == board[x].block)&&(board[x].value < 9)) {
            if (key.takenBy === board[x].takenBy) {
              console.log(board[x])
              console.log(key)
              for (let z = 0; z <= 8; z++) {
                if (board[z].row == key.row) {
                  board[z].value = 0
                }

              }
            }
          }
          if ((key.block == board[x].block) && (key != board[x])) {
            if (key.takenBy === board[x].takenBy) {
              console.log(board[x])
              console.log(key)
              for (let z = 0; z <= 8; z++) {
                if (board[z].block == key.block) {
                  board[z].value = 9
                }

              }
            }
          }
          else if((key.block != board[x].block) && (board[x].takenBy != "")&&(key.row == board[x].row)&&(board[x].value < 9)) {
            if (key.takenBy === board[x].takenBy) {
              console.log(board[x])
              console.log(key)
              for (let z = 0; z <= 8; z++) {
                if (board[z].block == key.block) {
                  board[z].value = 0
                }

              }
            }
          }
        }
        console.log(board)
        if ((key.row == 1 && key.block == 1) || (key.row == 3 && key.block == 3)) {
          board[0].value++
          board[4].value++
          board[8].value++
        }
        if ((key.row == 1 && key.block == 3) || (key.row == 3 && key.block == 1)) {
          board[2].value++
          board[4].value++
          board[6].value++
        }
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
          (function makewin() {
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
            } else {
              if (counter % 2 == 1) {
                player = playerName
              }
              win.textContent = `${player} WINS`;
            }
            body.appendChild(win);
            body.appendChild(button);
            button.addEventListener("click", () => choosePlayer());
          })()
        })();

        if (player == "X") {
          player = "O";
        } else player = "X";
        if (counter % 2 == 1 && winner == false) {
          let biggestValue = 0
          for (let x = 0; x <= 8; x++) {
            if (board[x].takenBy == "") {
              if (board[x].value > biggestValue) {
                choice = board[x]
                biggestValue = board[x].value
              }
            }
          }
          choice.id.click()
          //          let x = Math.floor(Math.random() * 9);
          //          while (board[x].takenBy != "") {
          //            x = Math.floor(Math.random() * 9);
          //          }
          //
          //          board[x].id.click()
        }
      }
    });
  });
}
