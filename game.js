const card = document.getElementById('card')
const back = document.getElementById('back')
const card2 = document.getElementById('card2')
let back2 = document.getElementsByClassName('.back2')

let flipCard = () => {
  card.classList.toggle('#back')
}
card.addEventListener('click', flipCard())

let flipCard2 = () => {
  card2.classList.toggle('#back2').addEventListener('click', card2)
}

document.querySelectorAll('div')
let startGame = document.getElementById('startGame')
const start = () => {
  console.log('testing testing')
  if (card === card2) {
    console.log('that is a match, great job!!')
  }
}
let timer = () => {
  console.log('THE TIMER HAS STARTED')
}
setInterval(timer(), 90000)

let mid = () => {
  console.log('45 seconds left')
}
setInterval(mid(), 45000)

let end = () => {
  console.log('TIMES UPPPP!!!')
}
setInterval(end(), 00000)

let clicks = 0
let clickC = () => {
  clicks += 1
  if (clicks === 2) {
    console.log('3 more tries')
  }
  if (clicks === 4) {
    console.log('2 more tries')
  }
  if (clicks === 6) {
    console.log('1 more tries')
  }
  if (clicks === 8) {
    console.log('0 tries left')

    startGame.addEventListener('click', clickC())
  }
}

// for(let i = 0; i < cardElementsArray.length; i++) {
//   cardElementsArray[i].addEventListener("click", displayCard)
// }
start()
//<img src="https://hdclipartall.com/images/ace-card-clipart-ace-of-clubs-1773x2395.png" alt="club" id="img2">
