let left = document.querySelector(".left");
let right = document.querySelector(".right");
let img = document.querySelector(".frame").querySelectorAll("img");
let buttons = document.querySelectorAll("button");
console.log(buttons)
buttons[0].style.background="white";
let index=0;
let translate=0;;
function toggleTransition(a) {
    if (a == true) {
        left.classList.add('active');
    }
    else {
        right.classList.add('active')
    }
    setTimeout(() => {
        left.classList.remove('active')
        right.classList.remove('active')

    }, 1000); 
}


left.addEventListener("click", () => {
    toggleTransition(true);
if(index>0){
    --index;
}
else{
    index=img.length-1;
}
    console.log(index);
    startOrResetInterval()
 ImageSlider();
})

right.addEventListener("click", () => {
    toggleTransition(false);
    if(index<img.length-1){
    ++index;
}
else{
    index=0;
}
console.log(index);

startOrResetInterval();
 ImageSlider();
   
})
let ImageSlider=()=>{
    if(index==0){
img.forEach(e=>{e.style.translate=`${0}px`})

    }
    else{
img.forEach(e=>{e.style.translate=`${translate=index*-750}px`})
    }
    
    buttons.forEach(e=>{e.style.background="none";})
  buttons[index].style.background="white";


}
let auto=()=>{
    
   if(index<img.length-1){
    ++index;
}
else{
    index=0;
}
ImageSlider();
console.log("index="+index)
}
let autoSlide=setInterval(auto,3000)
function startOrResetInterval() {
    if (autoSlide) {
        clearInterval(autoSlide);
        console.log("Interval reset.");
    }
    autoSlide = setInterval(
        auto
    , 3000); 
}
buttons.forEach(e=>{
  e.addEventListener("click",()=>{index=e.value;ImageSlider();startOrResetInterval();});})
