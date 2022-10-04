const frontA = 1
const frontB = 2
const backA = 3
const backB = 3

const card = document.getElementById('card')
let front = document.getElementByClassName('front').addEventListener
const card2 = document.getElementById('card2')
let front2 = document.getElementsByClassName('.front2')
let back2 = document.getElementsByClassName('.back2')

card.addEventListener('click', flipCard)

flipCard = () => {
  card.classList.toggle('flipCard')
}

card2.addEventListener('click', flipCard2)

flipCard2 = () => {
  card2.classList.toggle('flipCard2')
}

document.querySelectorAll('div')

// frontB.addEventListener('click', flipB())
// let flipB = (flips) => {
//   backA.classList.toggle(backB)
// }

let start = (game) => {
  alert('The Game has begun !')
  console.log('testing testing')
  if (backA === backB) {
    console.log('that is a match, great job!!')
  }
}
let timer = (time) => {
  alert('TIMES UPPPP')
  setTimeout(timer(), 90000)
  if (time === 75000) {
    alert('15 seconds left!!')
  }
}

setTimeout(timer(), 90000)
//start()
