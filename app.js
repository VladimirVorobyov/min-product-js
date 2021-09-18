function slidePlugin (active = 2){
  const slides = document.querySelectorAll('.slide');
  slides[active].classList.add('active')
slides.forEach((slide)=>{
  slide.addEventListener('click',()=>{
    closeActive();
    slide.classList.add('active');
  })
})
  
function closeActive(){
  slides.forEach((e)=>e.classList.remove('active'));
}
}

slidePlugin(3)