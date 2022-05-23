Boolean(); //función que me dice si una expresión es falsa o verdadera, por defecto es falsa

//Ejemplos en los que Boolean devuelve falso, si una expresión me devuelve falso, no puedo realizar una acción
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false NaN -> No a Number
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también