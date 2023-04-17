let menuHamburguer = document.getElementById("menuHamburguer");
let mainMenu= document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function (){
     if (mainMenu.classList.contains("menu-hidden")){
        mainMenu.classList.add("menu-visible");
        mainMenu.classList.remove("menu-hidden");
     } else if (mainMenu.classList.contains("menu-visible")){
        mainMenu.classList.add("menu-hidden");
        mainMenu.classList.remove("menu-visible")
     }
});  