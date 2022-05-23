//Declarativas, guarda en  memoria lo que realice la función

function miFuncion() {
    return 3;
}

miFuncion();

//De expresión o anónima

var miFuncion2 = function(a,b){
    return a + b;
}

miFuncion2();

//Diferencias: A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
//Ya que el hoisting solo se aplica en las palabras reservadas var y function.
//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada(por ejemplo en un callback o recursion)), 
//y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

//Ejemplo
function saludar(persona) {
    console.log(`Hola ${persona}`);
}

saludar("Juan");

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(4,7);

//de otra forma mas abreviada

function sumar(a,b) {
    return a + b;
}

console.log(sumar(7,8)); //uso console.log para que me muestre el resultado en pantalla