let Input = document.getElementById("todo");
let container = document.querySelector(".container");
let popup;
let pop = document.querySelector(".alert");
let submit = document.querySelector(".submit");
function append() {
  if (document.getElementsByClassName("try").length >= 9) {
    Input.addEventListener("input", () => {
      pop.innerHTML = "max content!!";
    });
  } else {
    pop.innerHTML = "";
  }
  if (document.getElementsByClassName("try").length >= 10) {
  } else {
    let newElm = document.createElement("div");
    newElm.setAttribute("class", "try");
    newElm.innerHTML = `${Input.value} <button class="btn" ><i style="font-size:20px" class="fa">&#xf014;</i></button>`;
    container.append(newElm);
    const btn = newElm.querySelector(".btn");
    let event = container.querySelector(".active");
    event.textContent = `Events active:${document.getElementsByClassName("try").length}`;
    btn.addEventListener("submit", () => {
      newElm.remove();
      event.textContent = `Events active:${document.getElementsByClassName("try").length}`;
    });
  }
}
function add(enter) {
  if (enter.key == "Enter" && Input.value.trim() != "") {
    append();
    Input.value = "";
  }
}
Input.addEventListener("keydown", (enter) => {
  add(enter);
});
submit.addEventListener("click", () => {
  if (Input.value.trim() != "") {
    append();
    Input.value = "";
  }
});
console.log(submit);
// // Get references to HTML elements
// const Input = document.getElementById("todo");
// const container = document.querySelector(".container");

// // Function to get the list of todos from localStorage
// function getTodos() {
//     // If a 'todos' item exists in localStorage, parse it from a string back to an array
//     // Otherwise, return an empty array
//     return JSON.parse(localStorage.getItem("todos")) || [];
// }

// // Function to save the list of todos to localStorage
// function saveTodos(todos) {
//     // Convert the array to a JSON string and save it
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to create and display a single todo item on the page
// function createTodoElement(text) {
//     if (document.getElementsByClassName("try").length >= 3) {
//         return false; // Stop if max content is reached
//     }

//     // 1. Create the div and set its content
//     let newElm = document.createElement("div");
//     newElm.className = "try";
//     newElm.innerHTML = `${text} <button class="btn" style="margin-left:100px;">remove me</button>`;

//     // 2. Add the element to the container
//     container.append(newElm);

//     // 3. Find the button inside the new element
//     const btn = newElm.querySelector(".btn");

//     // 4. Add a click listener to the button to handle removal
//     btn.addEventListener("click", () => {
//         // Get the current list of todos
//         let todos = getTodos();
//         // Filter out the todo that we want to remove
//         let updatedTodos = todos.filter(todoText => todoText !== text);
//         // Save the new, smaller list
//         saveTodos(updatedTodos);
//         // Remove the element from the page
//         newElm.remove();
//     });

//     return true;
// }

// // --- EVENT LISTENERS ---

// // 1. Event listener to add a new todo when 'Enter' is pressed
// Input.addEventListener("keydown", (event) => {
//     if (event.key === 'Enter' && Input.value.trim() !== "") {
//         const todoText = Input.value.trim();

//         // Try to create the element. If it fails (because the list is full), show an alert.
//         if (createTodoElement(todoText)) {
//             // Get the current list, add the new item, and save it
//             let todos = getTodos();
//             todos.push(todoText);
//             saveTodos(todos);
//         } else {
//             alert("Maximum of 3 items reached.");
//         }

//         // Clear the input field
//         Input.value = "";
//     }
// });

// // 2. Load and display existing todos when the page first loads
// document.addEventListener("DOMContentLoaded", () => {
//     const todos = getTodos();
//     // For each saved todo, create its element on the page
//     todos.forEach(todoText => {
//         createTodoElement(todoText);
//     });
// });
