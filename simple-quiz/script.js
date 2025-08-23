let btn=document.querySelector(".btn");
let container=document.querySelector(".container");
let cont=document.querySelector(".cont");
let tl=document.querySelector(".a");
let ans=document.querySelector(".b");
let tu=document.querySelector(".tu");
let timeup=document.querySelector(".timeup");
let t=15;
let timer=setInterval(()=>{if(t>0){
    --t;
    tl.textContent=t;
}},1000);
let timeout=setTimeout(()=>{
timeup.classList.remove("display")
    
},15000)
 function checkSelectedRadio() {
            // Get all radio buttons with the name 'color'
            const radios = document.getElementsByName('answer');
            let selectedValue = null;

            // Loop through the radio buttons to find the selected one
            for (const radio of radios) {
                if (radio.checked) {
                    selectedValue = radio.value;
                    break;
                }
            }
            return(selectedValue);
        }
btn.addEventListener("click",()=>{
    clearTimeout(timeout);
    clearInterval(timer)
if(checkSelectedRadio()=="elephant")
                {
                   ans.textContent="right"
                }
                else if(checkSelectedRadio()!=null){
                    ans.textContent="wrong"
                    ans.setAttribute("style","color:red")
                }
    container.classList.add("display");
    
    cont.classList.remove("display")
    console.log("clicked")})
    tu.addEventListener("click",()=>{window.location.reload();})