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

    const filterTask = arrayTasks.filter((task)=> task._id !== Number(id))

    // console.log(filterTask);

    arrayTasks = filterTask

    Task.destroyRender(id);
}
