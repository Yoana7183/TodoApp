// const domElements = {
//     inputValue : document.getElementById('inputValue'),
//     addButton : document.getElementById('addTodos'),
//     clearButton: document.getElementById('removeTodos')
// }
const todoArr = [];
class Todo {

    constructor(todo) {
        this.todo = todo
        this.isDone = false;
        this.constructor.counter = (this.constructor.counter || 0) + 1;
        this._id = this.constructor.counter;

    }

}

function addTodo() {

    var inputValue = document.getElementById('inputValue');
    var inputValue = inputValue.value;
    var todo = new Todo(inputValue);

    todoArr.push(todo)

    var displayTodos = document.getElementById('displayTodos')
    var li = document.createElement('li');
    displayTodos.appendChild(li);

    li.innerText = todo.todo


}
document.getElementById('addTodos').addEventListener("click", addTodo);
