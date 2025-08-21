let container=document.getElementById("container")
let liftoff=document.getElementById("liftoff")
let load=document.getElementById("load")
let counter=document.getElementById("counter")
let btn=document.getElementById("btn");
let reload=document.querySelector(".reload");

reload.addEventListener("click",()=>{window.location.reload()})
function width(num){
    let w=0;
    const loading=setInterval(()=>{
         if(w>=100){
        clearInterval(loading);
        container.style.display="none";
        liftoff.style.display="inline"
    }
 if(num<=0){
        if(w<100){
            w=w+10;
        load.style.width=`${w}%`;
        console.log(w);
    }
   
}
},500)}
function onclick(){
    let num=10
   const my= setInterval(()=>{
        if(num>0){
        num=num-1;
        counter.innerHTML=num;
        }
       else{clearInterval(my);
        width(num)
       }
    
},1000);
   
}


btn.addEventListener("click",onclick);