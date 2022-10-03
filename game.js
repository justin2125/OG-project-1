const frontA = 1
const frontB = 2
const backA = 3
const backB = 3
document.getElementByClassName('frontA').addEventListener('click', flipA)

const card = document.getElementById('card')

card.addEventListener('click', flipCard)

flipCard = () => {
  card.classList.toggle('flipCard')
}
const card2 = document.getElementById('card2')
card2.addEventListener('click', flipCard2)

document.getElementsByClassName('.frontA').addEventListener('click', flipA())
//
document.getElementsByClassName('.frontB')
//
document.getElementsByClassName('.backA').addEventListener('click', flipB())
//
document.getElementsByClassName('.backB')
//
document.querySelectorAll('div')

frontB.addEventListener('click', flipB())
let flipB = (flips) => {
  backA.classList.toggle(backB)
}

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
}
setTimeout(timer(), 90000)
//start()
