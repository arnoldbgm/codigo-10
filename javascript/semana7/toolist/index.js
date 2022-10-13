//!     Importa nuesto task

import { Task } from "./task.js";

const inputTask = document.querySelector(".input__task");
const bntCreate = document.querySelector(".btn__create");

bntCreate.onclick = function () {
    const tasText = inputTask.value;
    // !!Esto es para depurar
    // console.log("TaskText", tasText);

    // Ahroa vmoas a validar que el taskTEst no este vacio

    if (tasText === "") {
        alert("Debes completar la caja de texto");
        return;
    }

    const task = new Task(tasText, new Date(), 1)

    console.log(task);
};