const card = document.getElementById('card')
const back = document.getElementById('back')
const card2 = document.getElementById('card2')
let back2 = document.getElementsByClassName('.back2')
let all = document.querySelectorAll('div')

let cardArray = [card, card2]
let cardsId = []
let cardsSelected = []

flipCard = () => {
  card.classList.toggle('cardB')
}
flipCard2 = () => {
  card2.classList.toggle('backB2')
}
// cardTimer2 = () => {
//   back2.classList.toggle('card2')
// }
let startGame = document.getElementById('startGame')
const start = () => {
  console.log('testing testing')
  if (cardsId.length === 2) {
    setTimeout(checkForMatch, 500)
  }
  if (card.innerHTML === card2.innerHTML) {
    console.log('that is a match, great job!!')
  }
}
let timer = () => {
  console.log('THE TIMER HAS STARTED')
}
setInterval(timer, 90000)

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

    startGame.addEventListener('click', clickC)
  }
}

// for(let i = 0; i < cardElementsArray.length; i++) {
//   cardElementsArray[i].addEventListener("click", displayCard)
// }
start()
//<img src="https://hdclipartall.com/images/ace-card-clipart-ace-of-clubs-1773x2395.png" alt="club" id="img2">

//https://banner2.kisspng.com/20180401/dyw/kisspng-gin-rummy-bicycle-playing-cards-united-states-play-ace-card-5ac1861c9c09d2.6612168315226322206391.jpg
