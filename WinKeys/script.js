let win=document.querySelector("div");
window.addEventListener("keydown",(enter)=>{if(enter.key==" "){win.innerHTML="spc"}else{win.innerHTML=enter.key;;console.log(enter.key)}})