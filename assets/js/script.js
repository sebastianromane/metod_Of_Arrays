//declaration of variables.
const listTask = document.getElementById("listTask"); //listado de tareas
const inputTask = document.getElementById("inputTask"); //input del html
const button = document.getElementById("button"); //agrega tareas
const countTask = document.getElementById("countTask"); //cuenta tareas
const taskComplete = document.getElementById("taskComplete"); //cuenta tareas completadas


//-------------------------------------------------------------------------------

//array and its objects
const tasks = [
    { id: Date.now(), tarea: "Estudiar", status: false },
    { id: Date.now()+1, tarea: "Investigar", status: true },
    { id: Date.now()+2, tarea: "Practicar", status: false },
  ];
  // El +1 y +2 en Date.now del array sólo se dejo con fines de prueba para evitar repetir el id.
  
  //-------------------------------------------------------------------------------
 
  //Button add new task.
    button.addEventListener("click", () => {
    if (inputTask.value == "") {
      alert("Debe ingresar un tarea - You must enter a task")
    }else{
      
    const newTask = inputTask.value;
    tasks.push({ id: Date.now(), tarea: newTask, status: false });
    inputTask.value = "";
    
    listTask.innerHTML = render();
    countTask.innerHTML = "Cantidad de Tareas: " + tasks.length;
    countTaskComplete();
  
    }
  });
//-------------------------------------------------------------------------------

// insert function render.
function render() {
    let html = "";
    for (let chore of tasks) {
      if (chore.status == true) {
        chequear = "checked";
      } else {
        chequear = "";
      }
      html += `<li>
                  <span class="f1"> ${chore.id} </span>
                  <span class="f1">${chore.tarea} </span>
                  <input class="f1" type="checkbox" id="opt_${chore.id}" ${chequear} onclick="updateTask(${chore.id})" value="first_checkbox">
                  <button onclick="deleteTask(${chore.id})"> Eliminar </button>
              </li>`;
    }
    return html;
  }
  //-------------------------------------------------------------------------------

//Function of Button onclick delete task.
let deleteTask = (id) => {
    const index = tasks.findIndex((ele) => ele.id == id);
    tasks.splice(index, 1);
  
    listTask.innerHTML = render();
    countTask.innerHTML = "Cantidad de Tareas: " + tasks.length;
    countTaskComplete();
  };
  
  //--------------------------------------------------------------------------------
  //Function of checkbox onclick update task.
let updateTask = (id) => {
    const index = tasks.findIndex((ele) => ele.id == id);
    if (document.querySelector("#opt_" + id).checked == true) {
      tasks[index].status = true;
    } else {
      tasks[index].status = false;
    }
    countTaskComplete();
    console.log(tasks);
  };
  
  
  //--------------------------------------------------------------------------------
  
//function to count completed tasks
const countTaskComplete = function () {
    cuentaTareas = tasks.filter(({ status }) => status === true).length;
    taskComplete.innerHTML = "Tareas completadas: " + cuentaTareas;
  };
  

//--------------------------------------------------------------------------------
  
  
//initial charge

countTaskComplete();
listTask.innerHTML = render();
countTask.innerHTML = "Cantidad de Tareas: " + tasks.length;

  