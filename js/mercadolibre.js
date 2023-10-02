let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil { 
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Toyota" , "TXL");

alert(auto1.marca + " " + auto1.modelo);

inputBusqueda.addEventListener("keydown", function(){
    let mainContent = document.getElementById("mainContent");
    let boxProducto = document.getElementById("div");

    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "boxProducto");
});