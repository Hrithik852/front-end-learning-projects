console.log("hey")
let form=document.querySelector("form");
let name=document.getElementById("name");
let number=document.getElementById("number");
let tickets=document.getElementById("tickets");
const name_regex=/^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
const ph_regex=/^(?:(?:\+91)|0)?[ -]?[6789]\d{9}$/;
const no_of_tickets_regex=/^[1-5]$/;
form.addEventListener("submit",(e)=>{e.preventDefault();})