let inp;
document.querySelector("input").addEventListener("change",(val)=>{
// document.querySelector("label").innerHTML=val.name;
    inp=val.target.files[0].name;
    console.log(val.target.files[0].name);
      if(inp){
        document.querySelector("p").textContent=inp;
    }
})

  
