let bank = 1000

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

function startPlayers() {
  players.forEach(player => {
    let randomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamNumber
  })
  drawTeamOne()
  drawTeamTwo()
}


function drawTeamOne() {
  let teamOneEmojis = ''
  let teamOnePlayers = players.filter(player => player.teamNumber == 1)
  teamOnePlayers.forEach(player => teamOneEmojis += player.emoji)
  let teamOneElement = document.getElementById('teamOneStarters')
  teamOneElement.innerText = teamOneEmojis
}

function drawTeamTwo() {
  let teamTwoEmojis = ''
  let teamTwoPlayers = players.filter(player => player.teamNumber == 2)
  teamTwoPlayers.forEach(player => teamTwoEmojis += player.emoji)
  let teamTwoElement = document.getElementById('teamTwoStarters')
  teamTwoElement.innerText = teamTwoEmojis
}

function drawBank() {
  let bankElem = document.getElementById('bank')
  bankElem.innerText = `$${bank}`
}

function gamble(teamNumber, bet) {
  if (bet > bank) {
    window.alert("You're poor, go somewhere else!")
    return
  }

  let teamOneScore = 0
  let teamTwoScore = 0

  players.forEach(player => {
    if (player.teamNumber == teamNumber) {
      teamOneScore += player.skill
    }
    else {
      teamTwoScore += player.skill
    }
    console.log('this works');
  })

  if (teamOneScore > teamTwoScore) {
    bank += bet
  }
  else if (teamTwoScore > teamOneScore) {
    bank -= bet
  }

  poor()
  startPlayers()
  drawBank()
}

function poor() {
  if (bank > 0) {
    return
  }

  let playAgain = window.confirm("Gamblers do not Lose, they Quit. Do you want to Quit?")
  console.log('loser')
  if (playAgain == true) {
    window.close()
  }
  else {
    bank = 1000
  }
}

drawBank()
startPlayers()