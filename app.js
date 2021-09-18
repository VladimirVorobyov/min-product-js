const start = document.querySelector('.start');
const screenList = document.querySelectorAll('.screen');
const timeContainer = document.querySelector('.time-list');
const time = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['blue', 'red', 'yellow', 
'linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)']

let clock = 0;
let sum = 0;

start.addEventListener('click',(e)=>{
  e.preventDefault();
  screenList[0].classList.add('up');
})

timeContainer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('time-btn')){
    clock = +e.target.dataset.time;
    screenList[1].classList.add('up');
    getTime();
  }
})

function getTime(){
  createElem();
  setInterval(getMinusTime,1000);
  time.innerHTML = `00:${clock}`;
} 

function getMinusTime(){
  if(clock===0){
    finisGame()
  } else {
    let current = --clock;
    if(current<10){
    current = `0${current}`
  }
  time.innerHTML = `00:${current}`
  }
}

function finisGame(){
  time.parentNode.remove();
  board.innerHTML=`<h1>Счет:${sum}</h1>`;
}

function createElem(){
  const size = randomSize(50,10);
  const {width, height}= board.getBoundingClientRect() 
  const div = document.createElement('div');
  div.classList.add('circle');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.top = `${randomSize(height - size,0)}px`;
  div.style.right = `${randomSize(width-size,0)}px`;
  div.style.background = `${colors[Math.floor(Math.random()*colors.length +1)]}`
  board.append(div);
} 

function randomSize(max,min) {
  return Math.floor(Math.random()*(max-min)+min)
}

board.addEventListener('click',(e) => {
  if(e.target.classList.contains('circle')){
    e.target.remove();
    sum ++;
    createElem()
  }
})