import "./style.css";
import newTask from "./taskcreate"; //creates new object with task data
import project from "./project";
import toggle from "./taskprompt"; //shows form to import new task data from and makes form invisible with cancel button
import showtasks from "./showtask";
import {format} from 'date-fns';


const today = (format(new Date(), "yyyy-MM-dd"));
const addButton = document.getElementById("add");
const title = document.getElementById("taskname");
const details = document.getElementById("taskdets");
const dueDate = document.getElementById("taskdate");
const submit = document.getElementById("submit");
const taskinfo = document.getElementById("taskinfo");
const storedtasks = JSON.parse(localStorage.getItem('tasks'))

let tasks = [];
let projects = [];

function addTask() {
  let task = new newTask(title.value, details.value, dueDate.value);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  toggle();
  title.value = "";
  details.value = "";
  dueDate.value = "";
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function printtasks() {
  if (storedtasks == null){
  }else{
  taskinfo.replaceChildren();
  tasks = storedtasks
  tasks.forEach((task, index) => {
    showtasks(task, index);
  });
}
}


  function someListener(event) {
  let element = event.target;
  if (element.classList == "remove") {
    tasks.splice(element.id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    printtasks();
  } else {
  }
  }

submit.addEventListener("click", addTask);
submit.addEventListener("click", printtasks);
addButton.addEventListener("click", toggle);
document.addEventListener("click", someListener);

let task1 = new newTask('task', 'details', '2022-08-11');
tasks.push(task1);
let task2 = new newTask('task', 'details', '2022-08-11');
tasks.push(task2);
let task3 = new newTask('task', 'details', '2022-08-11');
tasks.push(task3);




printtasks()