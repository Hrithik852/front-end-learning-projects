Project: Simple To-Do List ✅

What i'll build: A to-do list where a user can add tasks, see them in a list, and mark them as complete or delete them. The list should be saved even if the user closes the browser tab.

localStorage goals:

When a user adds, deletes, or updates a task, you'll need to save the entire array of tasks to localStorage. Since you can only store strings, you'll need to convert the array into a JSON string using JSON.stringify().

When the page loads, check localStorage for the saved list. If it exists, you'll need to convert the JSON string back into a JavaScript array using JSON.parse() and then display the tasks on the screen.