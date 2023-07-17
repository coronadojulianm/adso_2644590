let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow")
let eveVisible = document.getElementById("eveVisible");
let luluVisible = document.getElementById("luluHidden")
let shacoVisible = document.getElementById("shacoVisible")

leftArrow.addEventListener("click",function(){
    eveVisible.classList.add("img-eve-visible");
    eveVisible.classList.remove("img-eve-hidden");
    luluVisible.classList.add("img-lulu-hidden");
    luluVisible.classList.remove("img-lulu-visible");
});

rightArrow.addEventListener("click", function(){
    eveVisible.classList.remove("img-eve-visible");
    eveVisible.classList.add("img-eve-hidden");
    luluVisible.classList.remove("img-lulu-hidden");
    luluVisible.classList.add("img-lulu-visible");
});