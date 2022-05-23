//todos los metodos que se verán a continuación, generan un nuevo array con la respuesta solicitada, no modifican el array original

var arrayArticulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 1500 },
    { nombre: "celular", costo: 2000 },
    { nombre: "libro", costo: 150 },
    { nombre: "teclado", costo: 300 }
];

//filter, filtra, valida si algo es verdadero o falso y crea un nuevo array con esos valores
var articulosFiltrados = arrayArticulos.filter(function(articulo){
    return articulo.costo <= 500
});
console.log(articulosFiltrados);

//map, mapea ciertos elementos, genera un nuevo array con lo que encuentra
var arrayArticulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 1500 },
    { nombre: "celular", costo: 2000 },
    { nombre: "libro", costo: 150 },
    { nombre: "teclado", costo: 300 }
];

var nombreArticulos = arrayArticulos.map(function(articulo){
    return articulo.nombre
});
console.log(nombreArticulos);

//find, devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, 
//no verificará los valores restantes en la colección de matriz.
// a diferencia de filter que devuelve los valores coincidentes en una matriz de la colección. 
//Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.
var arrayArticulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 1500 },
    { nombre: "celular", costo: 2000 },
    { nombre: "libro", costo: 150 },
    { nombre: "teclado", costo: 300 }
];

var encuentraArticulo = arrayArticulos.find(function(articulo){
    return articulo.nombre === "libro"; //si no encuentra el articulo, no retorna nada
});
console.log(encuentraArticulo);

//forEach, este no genera un nuevo array, sino que hace el filtrado sobre el array indicado, 
//por eso no se crea una variable, porque no  va a guardar nada

var arrayArticulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 1500 },
    { nombre: "celular", costo: 2000 },
    { nombre: "libro", costo: 150 },
    { nombre: "teclado", costo: 300 }
];

arrayArticulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some, si genera un nuevo array, también hace una validación de verdadero o falso

var arrayArticulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 1500 },
    { nombre: "celular", costo: 2000 },
    { nombre: "libro", costo: 150 },
    { nombre: "teclado", costo: 300 }
];

var articulosCaros = arrayArticulos.some(function(articulo){
    return articulo.costo >= 1000;
});
//retornará true o false