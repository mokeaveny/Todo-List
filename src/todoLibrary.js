import { contentContainer } from "./index";

const todoList = [];

// Appends todo objects to the list. This done on the homepage when the submit button is clicked.
export function addTodoItem(todo) {
	todoList.push(todo);
}

export function renderTodoList() {
	todoList.forEach( todoItem => {
		const todoItemContainer = document.createElement("div");
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
		contentContainer.appendChild(todoItemContainer);
	})
}

export function displayList() {
	console.log(todoList);
}