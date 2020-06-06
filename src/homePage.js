import { contentContainer } from "./index";

export function renderHomePage() {
	const homePageContainer = document.createElement("div");
	const navBar = document.createElement("nav");
	const heading = document.createElement("h1");
	heading.textContent = "Todo List";
	const buttonContainer = document.createElement("div");
	buttonContainer.id = "button-container";
	const todoItemButton = document.createElement("button");
	todoItemButton.textContent = "Add Item";

	homePageContainer.id = "home-page";
	
	navBar.appendChild(heading);
	buttonContainer.appendChild(todoItemButton);
	navBar.appendChild(buttonContainer);
	homePageContainer.appendChild(navBar);
	contentContainer.appendChild(homePageContainer);

	todoItemButton.addEventListener("click", () => {
		const todoForm = renderTodoForm();
		contentContainer.appendChild(todoForm);
	});
}

// When the add item button is clicked then the form to create a todo object should be displayed.
function renderTodoForm() {
	const todoForm = document.createElement("form");
	const titleLabel = document.createElement("label");
	const titleInput = document.createElement("input");
	titleInput.type = "text";
	const descriptionLabel = document.createElement("label");
	const descriptionInput = document.createElement("input");
	descriptionInput.type = "text";
	const dueDateLabel = document.createElement("label");
	const dueDateInput = document.createElement("input");
	dueDateInput.type = "text";
	const priorityLabel = document.createElement("label");
	const priorityInput = document.createElement("input");
	priorityInput.type = "text";
	const submitButton = document.createElement("input");
	submitButton.type = "submit";
	submitButton.value = "submit";
	
	titleLabel.textContent = "Title";
	descriptionLabel.textContent = "Description";
	dueDateLabel.textContent = "Due Date";
	priorityLabel.textContent = "Priority";
	
	todoForm.appendChild(titleLabel);
	todoForm.appendChild(titleInput);
	todoForm.appendChild(descriptionLabel);
	todoForm.appendChild(descriptionInput);
	todoForm.appendChild(dueDateLabel);
	todoForm.appendChild(dueDateInput);
	todoForm.appendChild(priorityLabel);
	todoForm.appendChild(priorityInput);
	todoForm.appendChild(submitButton);

	return todoForm;
}