// ES una clase xq va a extender de HTMLElement
// HTMLElement es un clase nativa de JS
class Card extends HTMLElement{
    
    // Como esta clase tiene un extendes requerimos de un super
    constructor(){
        // Usando super() dentro del constructor vamos a poder crear
        // atributos propios
        super();
    }

    // Para poder asignar html dentro de mi tag
    // Dbemos de llamar al ufnccion connected callback

    // esta funcion se ejecuta de forma automatica
    // cuando nuestro componenete se crea en htmml

    connectedCallback(){
        this.innerHTML = `
        <div class="card">
        <img width="400px" src="https://pics.me.me/almost-done-almost-html-css-oh-yes-oh-shit-bootstrap-42009628.png"/>
        <h4>Hola desde mi componente</h4>
        </div>`
    }
}

// my-card es el nombre de la etiqueta con el que vamos a crear
customElements.define("my-card", Card)