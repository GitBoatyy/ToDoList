
import {format} from 'date-fns';


const today = (format(new Date(), "yyyy-MM-dd"));
export default function showtasks(task, index) {
    const newtaskdiv = document.createElement("div");
    newtaskdiv.id = "taskdiv";
    newtaskdiv.setAttribute("data", index);
    newtaskdiv.classList.add("task");
  
    const tasktitle = document.createElement("div");
    tasktitle.classList.add("tasktitle");
    tasktitle.innerText = task.title;
    newtaskdiv.append(tasktitle);
  
    const description = document.createElement("div");
    description.classList.add("taskdetails");
    description.innerText = task.description;
    newtaskdiv.append(description);
  
    const duedate = document.createElement("div");
    duedate.classList.add("taskduedate");
    duedate.innerText = task.duedate;
    if (task.duedate < today){
      duedate.classList.add("redf");
    }else{}
    newtaskdiv.append(duedate);
  
    const remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList = "remove";
    remove.id = index;
    remove.setAttribute("data", index);
    newtaskdiv.append(remove);
    taskinfo.append(newtaskdiv);
  }
  