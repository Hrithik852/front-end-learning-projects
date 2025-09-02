let btn=document.querySelector("button");
let ck=document.getElementById("cb");
let input=document.getElementById("un");
 if(localStorage.getItem("name"))
    {
        input.value=localStorage.getItem("name");
        ck.checked=true;
    }
btn.addEventListener("click",(e)=>{e.preventDefault();
   

     
  

if(ck.checked&&input.value.trim()!="")
{
    localStorage.setItem("name",input.value);
}
else if(!ck.checked)
{
    localStorage.removeItem("name");
}
  
    }
)
