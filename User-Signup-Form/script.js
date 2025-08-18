const UserName_Regex=/^\w{3,15}$/;
const Email_Regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Pass_Regex=/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
////////////////////////////////////////////////////
const  form=document.querySelector("form");
let UserName=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("pass");
let confirm_password=document.getElementById("confirmPass");
let All_inputs=document.querySelectorAll(".input");

let isValid=false;
let i=0;
let text;
////////////////////////////////////////////
function validity_check(isValid,x,text){
if(!isValid)
{
    x.value="";
    x.setAttribute("placeholder",text)
    x.classList.add("placeholder","bd");   
    
}
else{x.classList.remove("placeholder","bd");  
 

}
}


form.addEventListener("submit",(e)=>{e.preventDefault();
  if(!isValid){
    alert("missed inputs")
  }
 if(i>=4&&isValid){
    All_inputs.forEach(e=>e.value="");
 }
 else{ alert("missed inputs")}
})
UserName.addEventListener("blur",(e)=>{
   
    e.preventDefault();
    if(UserName_Regex.test(UserName.value)){
        isValid=true;
        i++;
    }
    else{
        isValid=false;
        text="enter a valid username"
    }
 validity_check(isValid,UserName,text);

})
email.addEventListener("blur",(e)=>{e.preventDefault()
    

    if(Email_Regex.test(email.value)){
        isValid=true;
        i++;
    }
    else{
        isValid=false;
        text="enter a valid email";
    }
    validity_check(isValid,email,text);
 


})

password.addEventListener("blur",(e)=>{e.preventDefault();
   

    if(Pass_Regex.test(password.value))
    {
        isValid=true;
        i++;

    }
    else{
        isValid=false;
        text="password is invalid"
    }
   validity_check(isValid,password,text);



})
confirm_password.addEventListener("blur",(e)=>{e.preventDefault();
    
  
    console.log(confirm_password.value);
    if(password.value==confirm_password.value){
        isValid=true;
        i++;
    }
    else{
        isValid=false;
        text="password's doesnt match"
    }
   validity_check(isValid,confirm_password,text);

  console.log(isValid_arr);
})
