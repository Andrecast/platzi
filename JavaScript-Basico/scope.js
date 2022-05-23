var miNombre = "Andrea"; //variable global, no tienen acceso a las variables locales

function nombreCompleto(){
    var miApellido = "Castrillón"; //variabe local, lo que pasa en las Vegas, se queda en las Vegas...
    console.log(miNombre + " " + miApellido);
}

nombreCompleto(); //aquí la función tiene acceso a las dos variables, porque el scope local si tiene acceso al gobal

console.log(miNombre); //Desde afuera (scope global) puedo acceder a las variables de scope global
console.log(miApellido); //Pero no a las de scope local, va a decir quee la variable no está definida
