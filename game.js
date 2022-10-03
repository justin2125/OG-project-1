const frontA = document
  .getElementsByClassName('.frontA')
  .addEventListener('click', flipA())
const frontb = document.getElementsByClassName('.frontB')
const backA = document
  .getElementsByClassName('.backA')
  .addEventListener('click', flipB())
const backB = document.getElementsByClassName('.backB')
const all = document.querySelectorAll('div')

let flipA = (flip) => {
  frontA.classList.toggle(backA)
}

let flipB = (flip) => {
  backA.classList.toggle(backB)
}

let start = (game) => {}

let timer = (time) => {}
