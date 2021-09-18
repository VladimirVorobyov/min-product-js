const down = document.querySelector('.down-button');
const up = document.querySelector('.up-button');
const slider = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const numberSlede = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

slider.style.top = `-${(numberSlede-1)*100}vh`;
let sumSlide = 0;


down.addEventListener('click', ()=>addSlide('down'));
up.addEventListener('click', ()=> addSlide('up'));

document.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowUp'){
    addSlide('up')
  }else if(e.key === 'ArrowDown'){
    addSlide('down')
  }
});


function addSlide(def){
  if(def === 'up'){
    sumSlide ++; 
    if(sumSlide === numberSlede){
      sumSlide = 0;
    }
  }else if(def === 'down'){
    sumSlide --;
    if(sumSlide<0){
      sumSlide = numberSlede -1; 
    }
  }

  const height = container.clientHeight; 
  mainSlide.style.transform = `translateY(-${sumSlide * height}px)`;
  slider.style.transform = `translateY(${sumSlide * height}px)`


}


