var cells = document.getElementsByClassName("upperbox");
var currentPlayer = "X";
var moves = 0;
var gameEnded = false;
var btn = document.getElementById("btn");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    handleClick(this);
  });
}

function handleClick(cell) {
  if (!cell.innerHTML && !gameEnded) {
    cell.innerHTML = "<h1>" + currentPlayer + "</h1>";
    moves++;

    if (checkWinner(currentPlayer)) {
      alert("Player " + currentPlayer + " wins!");
      gameEnded = true;
    } else if (moves === 9) {
      Swal.fire({
        icon: "error",
        title: "Draw...",
        text: "Game Draw!!!",
      });
      gameEnded = true ;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner(player) {
  var winningCombos = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
  ];

  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (isWinningCombo(combo, player)) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Player X have Won The Game",
        showConfirmButton: false,
        timer: 1500
      });;
      
    }
  }
  return false;
}

function isWinningCombo(combo, player) {
  for (var i = 0; i < combo.length; i++) {
    var cellId = combo[i];
    var cell = document.getElementById(cellId);
    if (cell.innerHTML !== "<h1>" + player + "</h1>") {
      return false;
    }
  }
  return true;
}

btn.addEventListener("click", () => {
  location.reload();
});
