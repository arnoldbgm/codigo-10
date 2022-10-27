class Task extends HTMLElement {
    constructor(_text = "") {
        super();
        this.text = _text;
        this.status = "created";
        this.created_at = new Date();
    }

    static get observedAttributes() {
        return ["text", "status"];
    }

    setAttribute(attr, value){
        
    }

    attributeChangedCallback(prop, oldvalue, newvalue) {
        this[prop] = newvalue;
    }
    connectedCallback() {

        const className = {
            created: "",
            done: "bg-primary",
        }

        this.innerHTML = `
        <my-card classname="${className[this.status]}">
        ${this.text}
        </my-card>
        `
	}
}

customElements.define("my-task", Task);