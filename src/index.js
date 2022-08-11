import './style.css';
import newTask from './taskcreate' //creates new object with task data
import project from './project'
import toggle from './taskprompt' //shows form to import new task data from and makes form invisible with cancel button

const addButton = document.getElementById('add')
const title = document.getElementById('taskname')
const details = document.getElementById('taskdets')
const dueDate = document.getElementById('taskdate')
const submit = document.getElementById('submit')

let tasks = []
let projects = []


function addTask(){
    let task = new newTask(title.value, details.value, dueDate.value)
    tasks.push(task)
    console.log(tasks)
    toggle()
    title.value = ''
    details.value = ''
    dueDate.value = ''
}

submit.addEventListener('click', addTask)
addButton.addEventListener('click', toggle)
