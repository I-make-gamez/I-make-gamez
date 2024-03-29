const player = "X";
const player2 = "O";

let turn = 1
let board_full = false;
let play_board = ["", "", "","", "", "", "", "", "", "","", "", "", "", "", ""];

const board_container = document.querySelector(".play-area");
const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != player2) {
      flag = false;
    }
  });
  board_full = flag;
};


const check_line = (a, b, c, d) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    play_board[c] == play_board[d] &&
    (play_board[a] == player || play_board[a] == player2)
  );
};

const check_match = () => {
  for (i = 0; i < 16; i += 4) {
    if (check_line(i, i + 1, i + 2, i + 3)) {
      return play_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 4, i + 8, i + 12)) {
      return play_board[i];
    }
  }
  if (check_line(0, 5, 10, 15)) {
    return play_board[0];
  }
  if (check_line(3, 6, 9, 12)) {
    return play_board[3];
  }
  return "";
};

const check_for_winner = () => {
  let res = check_match()
  if (res == player) {
    winner.innerText = "Player 1 wins!!";
    board_full = true
  } else if (res == player2) {
    winner.innerText = "Player 2 wins!!";
    board_full = true
  } else if (board_full) {
    winner.innerText = "Tie!";
  }
};


const render_board = () => {
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
    if (e == player || e == player2) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  switch(turn){
    case 1:
      if (!board_full && play_board[e] == "") {
        play_board[e] = player;
        turn = 2;
        game_loop();
      }
      break;
    case 2:
      if (!board_full && play_board[e] == "") {
        play_board[e] = player2;
        turn = 1;
        game_loop();
      }
  }
};

const reset_board = () => {
  play_board = ["", "", "","", "", "", "", "", "", "","", "", "", "", "", ""];
  board_full = false;
  turn = 1;
  winner.classList.remove("playerWin");
  winner.classList.remove("player2Win");
  winner.classList.remove("draw");
  winner.innerText = "";
  render_board();
};

//initial render
render_board();