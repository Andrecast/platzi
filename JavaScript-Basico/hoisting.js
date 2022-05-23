//https://www.youtube.com/watch?v=uI6o97A4IrI
//Las variables y las funciones se procesan antes de que se ejecute cualquier tipo de código

console.log(miNombre);
var miNombre = "Andrea";
//undefined
console.log(miNombre);

//Internamente JavaScript en el g compiler está haciendo lo siguiente:
// primero, ve que se quiere imprimir una variable que no existe
//entonces la crea -> var miNombre
//y como no sabe que contiene, le asigna un undefined -> var miNombre = undefined;
// luego al hacer console.log(miNombre); lo que va a salir es ese undefined
// luego si pongo miNombre = "Andrea"; le va a asignar este valor a la variable, imprimiendo primero undefined y luego Andrea

//En el caso de una función, las funciones se declaran antes de las variables

hey();

function hey() {
    console.log("Hola " + miNombre);
}

var miNombre = "Diego";