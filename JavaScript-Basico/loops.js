//Loops for


var estudiantes = ["Maria", "Juan", "Sergio", "Laura", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); //siempre que se va a llamar a una variable se deben usar esas comillas simples
}

for(var i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

//otra forma de hacerlo, más resumido
for(var j of estudiantes){
    saludarEstudiantes(j);
}

//for/in - recorre las propiedades de un objeto

//Loops while

var estudiantes = ["Maria", "Juan", "Sergio", "Laura", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); //siempre que se va a llamar a una variable se deben usar esas comillas simples
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //va eliminando al estudiante que va saludando
    console.log(estudiante); //recordar que estudiante me va a guardar el elemento eliminado
    saludarEstudiantes(estudiante);
}