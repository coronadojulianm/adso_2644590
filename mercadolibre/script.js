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

let auto1 = new Automovil("Toyota" , "TXL", 150000000, "toyotaimg.jpg", 2023, 25000, "Pitalito - Huila");
let auto2 = new Automovil("Renault", "Duster", 91000000, "renault.jpg", 2024, 0, "Bogota D.C");
let auto3 = new Automovil("Chevrolet", "Tracker", 108000000, "Che.jpg", 2023, 0, "Medellin");
let auto4 = new Automovil("Porsche", "Macan", 220000000, "porsche.jpg", 2016, 8100, "Bogota D.C");

alert(auto1.marca + " " + auto1.modelo);



    cargarVehiulo(auto1);
    cargarVehiulo(auto2);
    cargarVehiulo(auto3);
    cargarVehiulo(auto4);

    window.addEventListener("keydown", function(event) {
        let busqueda = this.document.getElementById("inputBusqueda").value;
        if (event.key == "Enter") {
            mainContent.textContent = "";
            let inputUser = busqueda.toLowerCase();
            if (inputUser == "toyota") {
                cargarVehiulo(auto1);
            }
            else if (inputUser == "renault") {
                cargarVehiulo(auto2);
            }
            else if (inputUser == "chevrolet") {
                cargarVehiulo(auto3);
            }
            else {
                cargarVehiulo(auto4)
            }
            
        }
    });
    function cargarVehiulo(auto) {
        let mainContent = document.getElementById("mainContent");
        
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");
        ////////////////////////////////////////////////
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src", auto.imagen);
        imgAuto.setAttribute("class", "img-auto");
        ////////////////////////////////////////////////
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");
        let marcas = document.createElement("label");
        boxInfo.appendChild(marcas);
        let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
        marcas.appendChild(txtNodeMarca);
        marcas.setAttribute("class", "marcas")
        ////////////////////////////////////////////////
        let precio = document.createElement("label");
        boxInfo.appendChild(precio);
        let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        let txtNodePrecio = document.createTextNode("$" + precioStr);
        precio.appendChild(txtNodePrecio);
        precio.setAttribute("class", "precio");
        ////////////////////////////////////////////////
        let year = document.createElement("label");
        boxInfo.appendChild(year);
        let txtNodeYear = document.createTextNode(auto.year + " · ");
        year.appendChild(txtNodeYear);
        year.setAttribute("class", "year");
        ////////////////////////////////////////////////
        let kilometraje = document.createElement("label");
        boxInfo.appendChild(kilometraje);
        let kilometrajeStr = Intl.NumberFormat("de-DE").format(auto.kilometraje);
        let txtNodeKilometraje = document.createTextNode(kilometrajeStr + " km");
        kilometraje.appendChild(txtNodeKilometraje);
        kilometraje.setAttribute("class", "kilometraje");
        ////////////////////////////////////////////////
        let ubicacion = document.createElement("label");
        boxInfo.appendChild(ubicacion);
        let txtNodeUbicacion = document.createTextNode(" · " + auto.ubicacion);
        ubicacion.appendChild(txtNodeUbicacion);
        ubicacion.setAttribute("class", "ubicacion");
        ////////////////////////////////////////////////
        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon)
        let iconoCorazon = document.createElement("i");
        boxCorazon.appendChild(iconoCorazon);
        boxCorazon.setAttribute("class", "box-corazon");
        iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");
        ////////////////////////////////////////////////
        let lineaDiv = document.createElement("hr");
        boxProducto.appendChild(lineaDiv);
        lineaDiv.setAttribute("class", "linea-div"); 
    }