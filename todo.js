const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

let editTodo = null;

const addtodo = ()=>{
  const inputText = inputbox.value.trim();
  if(inputText.length <= 0){
    alert("You must write something in your To Do");
    return false;
  }

  if(addbtn.value === "Edit"){
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addbtn.value = "Add";
    inputbox.value = "";
    }
    

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.classList.add("btn", "editbtn");
  li.appendChild(editbtn);

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Remove";
  deletebtn.classList.add("btn", "deletebtn");
  li.appendChild(deletebtn);

  todolist.appendChild(li);
  inputbox.value = "";                                                                                                             
}

const updateTodo = (e)=>{
  if(e.target.innerHTML === "Remove"){
    todolist.removeChild(e.target.parentElement);
  }

  if(e.target.innerHTML === "Edit"){
    inputbox.value = e.target.previousElementSibling.innerHTML;
    inputbox.focus();
    addbtn.value = "Edit";
  }
}



addbtn.addEventListener('click',addtodo)
todolist.addEventListener('click', updateTodo)