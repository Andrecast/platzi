var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020, //no reconoce la ñ
    detalle: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //this hace referencia al objeto, miAuto en este caso, es igual a decir: miAuto.modelo
    }
};

miAuto.marca; // "Toyota"
miAuto.detalle();

