let todos = []
const todosList = document.getElementById('todo')
const todoInput = document.getElementById('textInput')
const inputBtn = document.getElementById('add')
const showEnter = document.getElementById('enterIcon')
const enterPrompt = document.getElementById('enterTodo')
function addTodo(e) {
    e.preventDefault()
    let textVal = todoInput.value
    todos.push(textVal)
    todosList.innerHTML = ''
    renderToDo()
    todoInput.value = ''
    enterPrompt.style.display = 'none'
}
inputBtn.addEventListener('click', addTodo)

function removeToDo(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true
    })
    todosList.innerHTML = ''
    renderToDo()
}
function editTodo(index) {
    const currElementTxt = document.querySelector(`#todo div:nth-child(${index + 1}) p`).innerText
    const splicedText = currElementTxt.slice(3)
    console.log(currElementTxt)
    console.log(splicedText)
    removeToDo(index)
    todoInput.value = splicedText

}
function showtoDoinput() {

    enterPrompt.style.display = 'block'

}
showEnter.addEventListener('click', showtoDoinput)

function renderToDo() {
    todos.forEach((todos, i) => {
        let currentHTML = todosList.innerHTML
        let newHTML =
            (`<div class="todoitem"> 
                    <p>${i + 1}. ${todos}</p>
                    <div class="options">
                        <i onclick="removeToDo(${i})" class="fa-solid fa-trash"></i>
                        <i onclick="editTodo(${i})" class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>`)
        let ammendHTML = currentHTML + newHTML
        todosList.innerHTML = ammendHTML

    })
}
renderToDo()