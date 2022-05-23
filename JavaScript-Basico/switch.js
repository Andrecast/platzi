//Está hecho para validar casos

var numero;
switch (numero) {
    case 1:
        console.log("Soy un 1!");
        break; //si este caso se cumple no sigue validando más casos
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
}

//sin el break, el valida todo, generando validaciones erroneas

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function ppt(usuario, maquina){
    switch (true) {
        case usuario === maquina :
            console.log("empate");
            break;
        case usuario === tijera && maquina === papel:
            console.log("ganaste");
            break;
        case usuario === tijera && maquina === piedra:
            console.log("perdiste");
            break;
        case usuario === piedra && maquina === papel:
            console.log("perdiste");
            break;
        case usuario === piedra && maquina === tijera:
            console.log("ganaste");
            break;
        case usuario === papel && maquina === tijera:
            console.log("perdiste");
            break;
        case usuario === papel && maquina === piedra:
            console.log("ganaste");
            break;
        default:
            console.log("ingresa un nombre válido");
    }
}

ppt("tijera", "papel");
