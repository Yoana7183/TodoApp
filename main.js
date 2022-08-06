const todoArr = [];
class Todo {

    constructor(todo, id) {
        this.todo = todo
        this.isDone = false;
    }
}

const addTodo = () => {
    var inputValue = document.getElementById('inputValue');
    var inputValue = inputValue.value;

    if (inputValue === "") {
        console.log('ad');
    } else {
        var todo = new Todo(inputValue);
        todoArr.push(todo);
        displayTodos();
    }
}

const deleteTodo = () => {

    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"));
    todoArr.splice(index, 1);

    displayTodos();
}


const completeTodo = () => {

    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"));
    var selectedTodo = todoArr[index];
    selectedTodo.isDone = !selectedTodo.isDone;

    displayTodos();
}

document.getElementById('addTodos').addEventListener("click", addTodo);

function displayTodos() {

    var todos = "";

    todoArr.map((todo, i) => {
        if (todo.isDone) {
            todos = todos + ` <li style="text-decoration: line-through" id="comp" idx="${i}"> ${i+1 }. ${todo.todo}</div> <button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button>
            <button id="completeTodo"type="button" onclick="completeTodo()">Undone</button></li>`;
        } else {
            todos = todos + `<li id="comp" idx="${i}">  ${i+1 }. ${todo.todo}</div> <button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button>
            <button id="completeTodo"type="button" onclick="completeTodo()">Done</button></li>`;
        }
    });

    document.getElementById("displayTodos").innerHTML = todos;
    document.getElementById("arrSize").innerHTML = todoArr.length;
  
}
