//!     Importa nuesto task eso es cuando usmamo module

// import { Task } from "./task.js";



const inputTask = document.querySelector(".input__task");
const bntCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

//* Vamos a crear un arreglo vacio
let arrayTasks = [];

bntCreate.onclick = function () {
    const tasText = inputTask.value;
    // !!Esto es para depurar
    // console.log("TaskText", tasText);

    // Ahroa vmoas a validar que el taskTEst no este vacio

    if (tasText === "") {
        alert("Debes completar la caja de texto");
        return;
    }

    const task = new Task(arrayTasks.length + 1, tasText, new Date(), 1)

    arrayTasks.push(task);

    console.log(arrayTasks);

    listTask.innerHTML += task.render();

    inputTask.value = "";
};


function destroy(id) {
    // En la condicio podemos decir que nos traiga todos los elemenots menos 
    // el que tenga el id que estamos recibiendo 

    const filterTask = arrayTasks.filter((task) => task._id !== Number(id))

    // console.log(filterTask);

    arrayTasks = filterTask

    Task.destroyRender(id);
}
//! Edita V1
// function edit(id) {
//     const newText = prompt("Ingrese el nuevo nombre de la tarea")
//     // Find solo retorna 1 elemento
//     // Filter retorna un array
//     const oneTask = arrayTasks.find((task) => task._id === id)

//     if (oneTask === undefined) return;

//     console.log(oneTask)
//     oneTask._name = newText
//     console.log(arrayTasks)

//     oneTask._name = newText;

//     Task.updateRender(id, newText);
// }


// !Edit V2

function edit(id){
    const element = document.querySelector(`#task-name-${id}`);
    element.style.display = "none";
    // Para poder crear un elemento de type node tenemos que usar la
    // funcion createElement
    const container = document.createElement("div"); // <div></div>
    container.style.display = "flex";
    container.style.gap = "5px";

    const input = document.createElement("input"); // <input type="text" placeholder="Ingresa el nuevo nombre" />
    input.type = "text";
    input.placeholder = "Ingresa el nuevo nombre";

    const button = document.createElement("button"); // <button>Save</button>
    button.textContent = "Save"
    button.style.backgroundColor = "#ccc";

    const buttonCancel = document.createElement("button"); // <button>Cancel</button>
    buttonCancel.textContent = "Cancel"
    buttonCancel.style.backgroundColor = "#ccc";

    container.appendChild(input); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" /> </div>
    container.appendChild(button); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> </div>
    container.appendChild(buttonCancel); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> <button>Cancel</button> </div>

    // Recordemos que element es el h6 y queremos poner el container al costado
    // parentNode.insertBefore = coloca el containe antes del h6
    // element.nextSibling = cambien la posición a despues del h6
    element.parentNode.insertBefore(container, element.nextSibling);
}