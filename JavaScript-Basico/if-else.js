//if

if (false) {  //si lo que hay dentro de la condición no es verdad, true, no se ejecuta la acción (si tengo un else, lo que haya allí sí)
console.log("Hola")
} else {
    console.log("soy falso");
}

//para hacer más de dos validaciones, usamos else if, tantos como se necesiten
var edad = 23;
if(edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
    console.log("Podrás votar nuevamente");
} else {
    console.log("Aún no puedes votar");
}

//operador ternario, es generar un if else en una sola línea de código

condition ? true : false; //sintaxis

var numero = 3;
var resultado = numero === 1 ? "Sí soy un 1" : "No soy un 1";
console.log(resultado);