console.log("hey")
let all=document.querySelectorAll("input");
let form=document.querySelector("form");
let name=document.getElementById("name");
let number=document.getElementById("number");
let tickets=document.getElementById("tickets");
const name_regex=/^(?=(?:[^a-zA-Z]*[a-zA-Z]){3})[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
const ph_regex=/^(?:(?:\+91)|0)?[ -]?[6789]\d{9}$/;
const no_of_tickets_regex=/^[1-5]$/;
let text;

function ifError(input,text){
   input.classList.add("placeholder", "bd");
   input.value = "";
   input.setAttribute("placeholder", text);
}
function ifSuccess(input){
    
    input.classList.remove("placeholder", "bd");
    input.removeAttribute("placeholder");
}
function namecheck(){
   if(name_regex.test(name.value))
   {
    ifSuccess(name)
    return true;
   }
   else{
    text="enter a valid name"
    ifError(name,text);
    return false;
   }
}
function numbercheck(){
    if(ph_regex.test(number.value))
   {
    ifSuccess(number)
    return true;
   }
   else{
    text="enter a valid phone number"
    ifError(number,text);
    return false;
   }
}
function ticketscheck(){
      if(no_of_tickets_regex.test(tickets.value))
   {
    ifSuccess(tickets)
    return true;
   }
   else{
    text="you can only book 1-5 tickets"
    ifError(tickets,text);
    return false;
   }
}
name.addEventListener("blur",namecheck);
number.addEventListener("blur",numbercheck);
tickets.addEventListener("blur",ticketscheck);

form.addEventListener("submit",(e)=>{e.preventDefault();
let nameIsValid=namecheck();
let numberIsValid=numbercheck();
let ticketsIsValid=ticketscheck();
if(nameIsValid&&numberIsValid&&ticketsIsValid)
{
 all.forEach(e=>{e.value=""});
 alert("form successfully submitted")
}
else{
 alert("input fields missing")
}
})