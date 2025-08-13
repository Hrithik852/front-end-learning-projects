let counter=(function(){let count=0;function setCount(){
    count++;
}
function getCount(){
    return count;
}
return {
    getCount,setCount
};})();


let count=document.querySelector(".count");
console.log(count)
const btn=document.querySelector(".counter");
console.log(btn)
document.addEventListener("keydown",(enter)=>{if(enter.key=='Enter'){ counter.setCount();console.log(counter.getCount());
    count.textContent=`count:${counter.getCount()}`;}
})
btn.addEventListener("click",()=>{ counter.setCount();console.log(counter.getCount());
    count.textContent=`count:${counter.getCount()}`;}
)


const checkbox = document.getElementById("check")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})