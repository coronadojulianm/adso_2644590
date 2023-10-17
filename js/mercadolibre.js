let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil { 
    constructor(marca, modelo, precio, imagen, year, kilometraje, ubicacion){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.year = year;
        this.kilometraje = kilometraje;
        this.ubicacion = ubicacion;
    }
}

let auto1 = new Automovil("Toyota" , "TXL", 150000000, "/imagenes/toyotaimg.jpg", 2023, 25000, "Pitalito - Huila");

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
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class", "img-auto");
    
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marcas = document.createElement("label");
    boxInfo.appendChild(marcas);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marcas.appendChild(txtNodeMarca);
    marcas.setAttribute("class", "marcas")

    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let precioStr = Intl.NumberFormat("de-DE").format(auto1.precio);
    let txtNodePrecio = document.createTextNode("$" + precioStr);
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    let year = document.createElement("label");
    boxInfo.appendChild(year);
    let txtNodeYear = document.createTextNode(auto1.year + " · ");
    year.appendChild(txtNodeYear);
    year.setAttribute("class", "year");

    let kilometraje = document.createElement("label");
    boxInfo.appendChild(kilometraje);
    let kilometrajeStr = Intl.NumberFormat("de-DE").format(auto1.kilometraje);
    let txtNodeKilometraje = document.createTextNode(kilometrajeStr + "Km");
    kilometraje.appendChild(txtNodeKilometraje);
    kilometraje.setAttribute("class", "kilometraje");

    let ubicacion = document.createElement("label");
    boxInfo.appendChild(ubicacion);
    let txtNodeUbicacion = document.createTextNode(" · " + auto1.ubicacion);
    ubicacion.appendChild(txtNodeUbicacion);
    ubicacion.setAttribute("class", "ubicacion");

    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");


    /* Linea divisora */
    let lineaDiv = document.createElement("hr");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div")
}

});