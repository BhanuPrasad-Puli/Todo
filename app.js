const todos = [];
let id = 0;

function addTodo(todo) {
  const todoObject = {
    id: id,
    title: todo,
    completed: false,
    timeTaken: Math.random() * 100;
  };
  todos.unshift(todoObject);
  id++;
  updateTodoList();
}

const addButton = document.getElementById("add");
addButton.style.color ="white";
addButton.style.backgroundColor = "brown";
addButton.style.padding="4px";
addButton.style.borderStyle="none";
addButton.style.borderRadius ="5px";
addButton.addEventListener("click", function () {
  const todoinput = document.getElementById("todo");
  let todoValue = todoinput.value;
  if (!todoValue) {
    alert("please enter a todo task");
  } else {
    addTodo(todoValue);
  }
  todoinput.value='';
});

function deleteTodo() {
  todos.splice(todo.id, 1);
  updateTodoList();
}

function completeTodo(todo) {
  todo.completed = true;
  updateTodoList();
}

function updateTodoList(arr) {
  const todosArr = arr || todos;
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";
  for (let todo of todos) {
    const item = document.createElement("li");
    item.innerHTML = todo.title;
    item.style.marginLeft ="80px";
    if (todo.completed) {
      item.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.color ="red";
    deleteButton.style.margin ="5px";
    deleteButton.addEventListener("click", function () {
      deleteTodo(todo);
    });
    const completeButton = document.createElement("button");
    completeButton.style.color ="green";
    completeButton.innerHTML = "Mark as complete";
    completeButton.addEventListener("click", function () {
      completeTodo(todo);
    });
    item.appendChild(deleteButton);
    item.appendChild(completeButton);
    listElement.appendChild(item);
  }
}

function filterTodos(type){
  let filteredTodos =[];
  switch (type){

      case "all":
        filterTodos = todos
      break;
      case "completed":
        todos.filter(function (todo){
          return todo.completed === true;
        })
      break;
      case "pending":
        break;

}


(function listenToFilers(){
  const allButton = document.getElementById("all");
  const completeButton =document.getElementById("completed");
  const pendingButton = document.getElementById("pending");

  allButton.addEventListener("click",function (){
    filterTodos("all")
  });
  completeButton.addEventListener("click",function(){
    filterTodos("completed")
  });
  pendingButton.addEventListener("click",function(){
    filterTodos("pending")
  });

})();
