//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

//generar una instancia del objeto auto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
console.log(autoNuevo);

//Reto, hacer lo mismo, de forma menos manual, con 30 carros

var autos = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");  // prompt() es un método del objeto de global window que se encuentra en los navegadores. No es parte del lenguaje JavaScript. Si no ejecuta su código en un navegador o en un entorno que admita el modelo de objetos del navegador, la ventana no estará allí y si la ventana no está allí, tampoco lo estará prompt(). Ejecute su código en un navegador.
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año d el auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}