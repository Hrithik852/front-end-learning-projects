let btn=document.querySelector(".toggle")
if(localStorage.getItem("theme")=="dark")
{
    document.body.classList.add("dark");
    console.log(localStorage.getItem("theme"))
}
btn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
        localStorage.setItem("theme","dark");        
    }
    else{
        localStorage.setItem("theme","white");
    }
})