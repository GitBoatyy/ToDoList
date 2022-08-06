import './style.css';
import newTask from './taskcreate' //creates new object with task data
import toggle from './taskprompt' //creates form to import new task data from


const addButton = document.getElementById('add')



let tasks = []
let projects = []


addButton.addEventListener('click', toggle)
