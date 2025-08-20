let box=document.getElementById("popup");
let x=document.querySelector(".close")
setTimeout(()=>{box.style.display="inline";
console.log("hh")},2000);

x.addEventListener("click",()=>{
    box.style.display="none";
 })