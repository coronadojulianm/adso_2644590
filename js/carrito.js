let numRestar = document.getElementById("numRestar");
let numSumar = document.getElementById("numSumar")
let numView = document.getElementById("numView");

numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
})

numRestar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt > 0){
            auxInt--;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
        }
})

numSumar.addEventListener("click",function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
        if(auxInt < 10){
            auxInt++;
            console.log(auxInt);
            document.getElementById("numView").innerText = auxInt.toString();
        }

})