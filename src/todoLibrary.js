import { contentContainer } from "./index";

const todoList = [];

// Appends todo objects to the list. This done on the homepage when the submit button is clicked.
export function addTodoItem(todo) {
	todoList.push(todo);
}

export function renderTodoList() {
	const todoItemContainer = document.createElement("div");
	todoItemContainer.id = "current-container";
	todoItemContainer.classList.add("todo-item-container");
	
	todoList.forEach( todoItem => {
		const todoTitle = document.createElement("h1");
		const todoDesc = document.createElement("p");
		const todoDueDate = document.createElement("p");
		const todoPriority = document.createElement("p");

		todoTitle.textContent = todoItem.title;
		todoDesc.textContent = todoItem.description;
		todoDueDate.textContent = todoItem.due_date;
		todoPriority.textContent = todoItem.priority;

		todoItemContainer.appendChild(todoTitle);
		todoItemContainer.appendChild(todoDesc);
		todoItemContainer.appendChild(todoDueDate);
		todoItemContainer.appendChild(todoPriority);
	})
	const currentContainer = document.getElementById("current-container");
	contentContainer.removeChild(currentContainer);
	contentContainer.appendChild(todoItemContainer);
}

export function displayList() {
	console.log(todoList);
}