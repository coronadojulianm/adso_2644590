let numRestar = document.getElementById("numRestar");
let numSumar = document.getElementById("numSumar")
let numView = document.getElementById("numView");
let cantProductos = document.getElementById("cantProductos");

let valorUnitarioProducto= 48000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);
    document.getElementById("valorUnitarioProducto").innerText=valorUnitarioProductoStr;



numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
})
numSumar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt < 10){
            auxInt++;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
            if(auxInt == 1){
                document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        }else if(auxInt == 0 || auxInt > 1){
            document.getElementById('cantProductos').innerHTML = auxInt.toString() + " Productos";
        }
    }
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr= new Intl.NumberFormat("de-De").format(auxSubtotal);
        document.getElementById("valorSubTotal").innerHTML = auxSubtotalStr;
})
numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt > 0){
            auxInt--;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
            if(auxInt == 1){
                document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        }else if(auxInt == 0 || auxInt > 1){
            document.getElementById('cantProductos').innerHTML = auxInt.toString() + " Productos";
        }
    }
    let auxSubtotal = auxInt * valorUnitarioProducto;
    let auxSubtotalStr= new Intl.NumberFormat("de-De").format(auxSubtotal);
        document.getElementById("valorSubTotal").innerHTML = auxSubtotalStr;
})