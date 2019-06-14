// let playerOne = {
//   score: 0
// }
// let playerTwo = {
//   score: 0
// }

let players = [{
  name: 'player1',
  score: 0
}, {
  name: 'player2',
  score: 0
}]

let scoreToWin = 11
let gameOver = false

function score(playerIndex) {
  if (gameOver) { return }
  let scorer = players[playerIndex]
  scorer.score++
  document.getElementById(`${scorer.name}`).textContent = scorer.score.toString()
  checkWinner(scorer)
}

function checkWinner(scorer) {
  if (scorer.score >= scoreToWin && Math.abs(players[0].score - players[1].score) >= 2) {
    gameOver = true
    document.querySelector('.title').textContent = scorer.name + ' won!'
  }
}

function resetGame() {
  players.forEach(player => {
    player.score = 0
    document.getElementById(`${player.name}`).textContent = '0'
  })
  document.querySelector('.title').textContent = 'Score Keeper'
}

function setScore(num) {
  scoreToWin = num
  resetGame()
}