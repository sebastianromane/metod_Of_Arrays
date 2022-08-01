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


  