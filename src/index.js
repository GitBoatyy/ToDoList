import './style.css';
import newTask from './taskcreate' //creates new object with task data
import project from './project'
import toggle from './taskprompt' //shows form to import new task data from and makes form invisible with cancel button
import showtasks from './showtask'

const addButton = document.getElementById('add')
const title = document.getElementById('taskname')
const details = document.getElementById('taskdets')
const dueDate = document.getElementById('taskdate')
const submit = document.getElementById('submit')
const taskinfo = document.getElementById('taskinfo')

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


function printtasks() {
    tasks.forEach((task, index) => {
        showtasks(task, index);
    });
}

submit.addEventListener('click', addTask)
submit.addEventListener('click', printtasks)
addButton.addEventListener('click', toggle)

