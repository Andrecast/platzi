//coersión: cambiar un tipo de valor a otro tipo de valor
//coersión implícita, cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro

//coersión explícita, es cuando obligamos a que cambie el tipo de valor

var a = 4 + "7"; //47  concatenación, coersión implícita
console.log(typeof a); // string

var b = 4 * "7"; //28 si hace la operación, coersión implícita
console.log(typeof b); // number

var c = 20;
var d = c + "s"; //aquí la variable d será un string, porque al concatenarle un string se forma una coersión implícita
// para obligar a c a que sea un string ...
var e = String(c); //sería un 20 pero string
console.log(typeof e);

var f = Number(e); //lo vuelvo a convertir en número



