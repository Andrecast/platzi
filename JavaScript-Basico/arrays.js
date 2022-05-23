var frutas = ["manzana", "banano", "fresa", "piña"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[2]);

//mutaciones o cambios en arrays

//añadir elementos al final del array
var masFrutas = frutas.push("uvas"); //podrían ser varios elementos .push("uvas", "cerezas"), por ejemplo
console.log(frutas);
console.log(frutas.length);

//eliminar el último elemento del array
var eliminarUltimo = frutas.pop(); //ponga lo que ponga dentro de pop, el me va a eliminar siempre el último elemento
console.log(frutas);
console.log(frutas.length);

//añadir elementos al inicio del array
var nuevaFruta = frutas.unshift("pera");
console.log(frutas);
console.log(frutas.length);

//eliminar el primer elemento del array
var nuevaFruta = frutas.shift(); //ponga lo que ponga dentro de shift, el me va a eliminar siempre el primer elemento
console.log(nuevaFruta); //en la variable nuevaFruta se va a guardar el elemento que eliminé
console.log(frutas);
console.log(frutas.length);

//conocer el index de un elemento
var posicion = frutas.indexOf("banano");
console.log(posicion);
