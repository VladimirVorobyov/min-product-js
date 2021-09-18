const board = document.querySelector('#board');
const colors = [ '#2c0bb3','#5806c4','#2db4ed','#2deded',
'#22e3cc','#22e39c', '#0cc449', '#c45506','#d14330'];
const SQUARES = 500;

for (let i = 0; i<SQUARES; i++ ) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  
  square.addEventListener('mouseover', ()=>{
    let color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color ;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  })
  square.addEventListener('mouseout', ()=>{
    square.style.backgroundColor = '#3b3b3b';
    square.style.boxShadow = `0 0 2px #3b3b3b`
  })
};