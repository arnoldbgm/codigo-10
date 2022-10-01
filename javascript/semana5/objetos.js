const personas = [];

function crearPersona() {
    persona1 = {
        name: "arnold",
        years: 24,
        gender: "masculino",
        height: 170,
        is_adult: function () {
            //this es igual a la persona
            return this.years >= 18;
        },
        inches: function () {
            return this.height / 2.54;
        },
        upper_name: function () {
            return this.name.toUpperCase();
        },
        capital_name: function () {
            return this.upper_name().substring(0, 1) + this.name.substring(1, this.name.length);
        }
    };

    personas.push(persona1);
    console.log(personas)
}

function crearPersonas() {
    persona1 = {
        name: "arnold",
        years: 24,
        gender: "masculino",
        height: 170,
        is_adult: function () {
            //this es igual a la persona
            return this.years >= 18;
        },
        inches: function () {
            return this.height / 2.54;
        },
        upper_name: function () {
            return this.name.toUpperCase();
        },
        capital_name: function () {
            return this.upper_name().substring(0, 1) + this.name.substring(1, this.name.length);
        }
    };
    persona2 = {
        name: "arnold",
        years: 24,
        gender: "masculino",
        height: 170,
        is_adult: function () {
            //this es igual a la persona
            return this.years >= 18;
        },
        inches: function () {
            return this.height / 2.54;
        },
        upper_name: function () {
            return this.name.toUpperCase();
        },
        capital_name: function () {
            return this.upper_name().substring(0, 1) + this.name.substring(1, this.name.length);
        }
    };
    persona3 = {
        name: "arnold",
        years: 24,
        gender: "masculino",
        height: 170,
        is_adult: function () {
            //this es igual a la persona
            return this.years >= 18;
        },
        inches: function () {
            return this.height / 2.54;
        },
        upper_name: function () {
            return this.name.toUpperCase();
        },
        capital_name: function () {
            return this.upper_name().substring(0, 1) + this.name.substring(1, this.name.length);
        }
    };
    personas.push(persona1);
    personas.push(persona2);
    personas.push(persona3);

    console.log(personas);

}

//Funcion para crear varuas personas a partir de 1 modelo:
class Person{
    constructor (name,years,gender,height){
       this.name = name;
       this.years = years;
       this.gender = gender;
       this.height = height;
    }
    is_adult (){
        return this.years >= 18;
    }
    inches () {
        return this.height / 2.54;
    }
    upper_name() {
        return this.name.toUpperCase();
    }
    capital_name() {
        return this.upper_name().substring(0, 1) + this.name.substring(1, this.name.length);
    }
}

//Instanciar es a partir de una clase crear los objetos que
//tenemos en la clase
//Objetos literales o de tipo clase son diferentes

function crearPersonasClass(){
    const persona1 = new Person ("bruno", 32, "masculino",170),
          persona2 = new Person ("arnold", 24, "masculino", 170),
          persona3 = new Person ("diego", 16, "masculino", 172);
    
    personas.push(persona1);
    personas.push(persona2);
    personas.push(persona3);

    console.log(personas)
}

function crearPersonasPrompt() {
    const persona1 = new Person(prompt("Nombre"),prompt("Edad"),prompt("Sexo"),prompt("Talla"));
    
    personas.push(persona1);

    console.log(personas)
}

function notification() {
    window.alert("Soy una notificacion");
    console.log(window.location.host);
    console.log(window.location.pathname);
    console.log(window.innerHeight);
    console.log(window.innerWidth)
}