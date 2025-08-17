let subBtn=document.querySelector("#submit");
let form=document.querySelector("form")
let nameerror=document.querySelector(".nameerror");
let Name=document.querySelector("#name");
let email=document.querySelector("#email");
let valid;

 form.addEventListener("submit",(e)=>{e.preventDefault();
      if(Name.value.trim().length<3){
       nameerror.textContent="name should be more than 2 characters";
       document.getElementById("nameerror").style.display="block";
       document.getElementById("name").style.border="1px solid red";

       valid=false;
    }
else{nameerror.textContent="";
  console.log(Name.value);
       document.getElementById("nameerror").style.display="none";
       valid=true
      }
     let emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("hs"+email.value);
     let isValid=emailregex.test(email.value);
      if(isValid){
        document.getElementById("emailerror").style.display="none";
      }
      else{
        emailerror.textContent="email is invalid";
        document.getElementById("emailerror").style.display="block";
       document.getElementById("email").style.border="1px solid red";

       valid=false;
      }
      if(valid){
document.querySelectorAll(".input").forEach(e=>e.value="");
document.querySelector("textarea").value="";
    alert("form succesfully submitted")
      }
 })