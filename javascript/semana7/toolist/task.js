
// Una clase es un objeto
// Nos permite poner constructores 
/*
Reglas de nuestras ckases
1) Debemos de recibir 3 parametro cuando isntanciemos
2) Tendremos 3 estados
    * status 1 = cread0
    * status 2 = done
    * status 3 = delete
3) TEndremos una funcion para poder renderizar nuestras tareas
4) Tendremos una funcion para poder actualzir nuestra tarea
5) tendremos una function para eliminar nuestra tarea
CRUD :> Cread  Read Update Delete;
*/

// !!Para instanciar siempre va ir la palabra new
// cosnt task = new Task("tarea1", 14,15)

// ?Importante: Una clase siempre inicia con una Mayuscula : Carro, Computadora, Materias
// ?Para poder usar import de este archivo tenemos que decir que nuestra clase sea exportable
// !    Que pueda ser usada desde otro archivo "EXPORT"

class Task {
    constructor(id, name, date, status) {
        // La variable que contiene los datos introducidos es _name,_date,_status
        this._id = id;
        this._name = name;
        this._date = date;
        this._status = status
    }

    // Llmar una funcion sin instanciar(ejecutarla)
    // Static nos permite instanciar una clase
    static destroyRender(id){
        const element = document.querySelector(`#task-${id}`)
        element.remove();
    }

    // Es una clase que no hace falta usar la palabra function
    render() {
        return ` <div  id="task-${this._id}"  class="item__task">
        <input type="checkbox" >
        <h6>${this._name}</h6>
        <button>
            <img src="./images/edit.png" alt="Edit" width="15">
        </button>
        <button onclick="destroy(${this._id});">
            <img src="./images/delete.png" alt="" width="15">
        </button>
    </div>`
    }
}
