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
const removeb = document.getElementById('remove')

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
    taskinfo.replaceChildren()
    tasks.forEach((task, index) => {
        showtasks(task, index);
    });
}

function removeTask(e){
    let num = e.target
    console.log(num.id)

}


function someListener(event){
    let element = event.target;
    if(element.classList == 'remove'){
        tasks.splice(element.id)
        printtasks()
    } else{
    }
}

submit.addEventListener('click', addTask)
submit.addEventListener('click', printtasks)
addButton.addEventListener('click', toggle)
document.addEventListener('click', someListener)