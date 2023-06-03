//  Variables

const form = getelement("addForm");
const todolist = getelement("todos");
const filter = getelement("filter");
const inputtodo = getelement("todo");
const liItems = document.getElementsByTagName("li");

// EventListeners

//form submit

form.addEventListener("submit", addTodo);

// click event on delete

todolist.addEventListener("click", removeTodo);

// keyup event on search

filter.addEventListener("keyup", filterTodo);

// functions

function getelement(id) {
  return document.getElementById(id);
}

function addTodo(event) {
  event.preventDefault();

  // get the user input
  let newtodo = inputtodo.value;

  //  create li element
  let li = document.createElement("li");

  // add classes to li element
  li.className = "list-group-item  bg-info";

  li.innerText = newtodo;

  // add button element
  let deletebtn = document.createElement("button");

  // add classes to btn element

  deletebtn.className = "btn btn-danger btn-sm delete";
  deletebtn.innerText = "delete";

  li.append(deletebtn);
  todolist.append(li);

  inputtodo.value = "";
}

function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    let result = confirm("Are you sure?");

    if (result) {
      let li = e.target.parentElement;

      todolist.removeChild(li);
    }
  }
}

function filterTodo(e) {
  // convert to lowercase letter

  let searchInput = e.target.value.toLocaleLowerCase();

  // get the list items

  Array.from(liItems).forEach((i) => {
    let todoName = i.firstChild.textContent;

    if (todoName.toLocaleLowerCase().indexOf(searchInput) != -1) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  });
}
