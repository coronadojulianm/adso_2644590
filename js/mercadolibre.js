let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil { 
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Toyota" , "TXL");

alert(auto1.marca + " " + auto1.modelo);

window.addEventListener("load", function(event) {

// inputBusqueda.addEventListener("keydown", function(event){

if(event.key = "Enter"){

    let mainContent = document.getElementById("mainContent");
    
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
    
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", "imagenes/toyotaimg.jpg");
    imgAuto.setAttribute("class", "img-auto");
    
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marcas = document.createElement("label");
    boxInfo.appendChild(marcas);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marcas.appendChild(txtNodeMarca);
}

});