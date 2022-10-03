const frontA = document
  .getElementsByClassName('frontA')
  .addEventListener('click', clickFlipA)
const frontb = document.getElementsByClassName('frontB')
const backA = document
  .getElementsByClassName('backA')
  .addEventListener('click', flipCard)
const backB = document.getElementsByClassName('backB')
const all = document.querySelectorAll('div')

let flipA = (flip) => {
  frontA.classList.toggle(backA)
}

let flipB = (flip) => {
  backA.classList.toggle(backB)
}

let start = (startgame) => {}
