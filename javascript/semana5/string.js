function stringSplit() {
    const fullname = prompt("Nombre completo");
    const firstName = fullname.split(" ");
    console.log(firstName)
    // firstName.forEach(element => {
    //     console.log(element)
    // });
}

function stringReplace(){
    const fullname = "arnold bryan gallegos mamani"
    const fullname_replaced = fullname.replaceAll("a", "X");

    console.log(fullname_replaced)
}

function stringLength(){
    const fullname = "arnold bryan gallegos mamani";
    const fullname_length = fullname.length;

    console.log(fullname_length);
    const fullname_non_spaces = fullname.replaceAll(" ","");
    const fullname_non_spaces_length = fullname_non_spaces.length;

    console.log(fullname_non_spaces_length);
}

function stringSlice(){
    const fullname = "arnold bryan gallegos mamani";
    const fullname_length = fullname.slice(0,6);

    console.log(fullname_length)
}