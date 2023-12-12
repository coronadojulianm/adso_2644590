let calificaciones = {
    calificacion1: {
      input: document.getElementById("calificacion-1"),
      barra: document.getElementById("barra-1"),
    },
    calificacion2: {
      input: document.getElementById("calificacion-2"),
      barra: document.getElementById("barra-2"),
    },
    calificacion3: {
      input: document.getElementById("calificacion-3"),
      barra: document.getElementById("barra-3"),
    },
    calificacion4: {
      input: document.getElementById("calificacion-4"),
      barra: document.getElementById("barra-4"),
    },
    calificacion5: {
      input: document.getElementById("calificacion-5"),
      barra: document.getElementById("barra-5"),
    },
  };
  
  let btnGraficar = document.getElementById("btnGraficar");
  
  btnGraficar.addEventListener("click", function () {
    let sumaCalificacion = 0;
  
    for (let key in calificaciones) {
      sumaCalificacion += Number(calificaciones[key].input.value);
    }
  
    for (let key in calificaciones) {
      let promedio = (Number(calificaciones[key].input.value) * 100) / sumaCalificacion;
  
      calificaciones[key].barra.style.width = `${promedio}%`;
  
      // Agregar un elemento span dentro de la barra
      let spanElement = document.createElement("span");
      spanElement.textContent = `${promedio.toFixed(2)}%`;
      spanElement.style.position = "absolute";
      spanElement.style.right = "5px";
      spanElement.style.top = "50%";
      spanElement.style.transform = "translateY(-50%)";
  
      // Eliminar elementos span existentes antes de agregar uno nuevo
      while (calificaciones[key].barra.firstChild) {
        calificaciones[key].barra.removeChild(calificaciones[key].barra.firstChild);
      }
  
      // Agregar el nuevo elemento span a la barra
      calificaciones[key].barra.appendChild(spanElement);
    }
  });
  