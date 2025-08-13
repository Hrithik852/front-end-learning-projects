document.body.addEventListener("mousemove",(e)=>{console.log(e.clientX,e.clientY);
    
    document.body.querySelector(".box").style.left=`${e.clientX-100}px`;
    document.body.querySelector(".box").style.top=`${e.clientY-100}px`;

})