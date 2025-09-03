let form = document.querySelector("form");
let input = document.querySelector("#input")
let container = document.querySelector(".container");
let ul = document.querySelector("ul");
let button = document.querySelector(".formbtn");
let taskleft = document.querySelector(".a");
let taskcompleted=document.querySelector(".b")
let strarr=[];



if(localStorage.getItem("task"))
{
  strarr=JSON.parse(localStorage.getItem("task"))
  for(i=0;i<strarr.length;i++)
  {
    addTask(strarr[i]); 
  }
  update_task();
}

function addTask(taskObject) {
    let li = document.createElement("li")
    let del_btn = document.createElement("button");
    let p=document.createElement("p");
    del_btn.classList.add("btn")
    
    p.textContent = taskObject.text;
    
    if (taskObject.completed) {
        p.classList.add("linethrough");
    }

    del_btn.textContent = "delete"
    ul.insertAdjacentElement("afterbegin", li);
    li.appendChild(p)
    li.appendChild(del_btn)
}

 function update_task(){
     let li_length = document.querySelectorAll("li");
     let len=document.querySelectorAll(".linethrough");
     let ans=li_length.length - len.length;
     taskleft.textContent = ans;
     taskcompleted.textContent=len.length;
 }

form.addEventListener("submit", (e) => {
   
    e.preventDefault();
    if (input.value.trim() != "") {
        const newTask = { text: input.value, completed: false };
        strarr.push(newTask);
        localStorage.setItem("task",JSON.stringify(strarr));
        addTask(newTask);
    }
    update_task();
    input.value="";
})

ul.addEventListener("click",(e)=>{
    if(e.target.nodeName=="P"){
        e.target.classList.toggle("linethrough");
        
        const taskText = e.target.textContent;
        const taskToUpdate = strarr.find(task => task.text === taskText);
        if (taskToUpdate) {
            taskToUpdate.completed = !taskToUpdate.completed;
            localStorage.setItem("task", JSON.stringify(strarr));
        }
    }
    if(e.target.classList.contains("btn"))
    {
        let litoremove=e.target.parentElement;
        let pte=litoremove.firstChild;
        let txt=pte.textContent;
        
        strarr = strarr.filter(task => task.text !== txt);
        localStorage.setItem("task",JSON.stringify(strarr));

        ul.removeChild(litoremove);
    }
  update_task();
})