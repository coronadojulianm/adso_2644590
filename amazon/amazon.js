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

btnGraficar.addEventListener("click", function() {
    let sumaCalificacion = 0;

    for (let key in calificaciones) {
        sumaCalificacion += Number(calificaciones[key].input.value);
    }

    for (let key in calificaciones) {
        let promedio = (Number(calificaciones[key].input.value) * 100) / sumaCalificacion;
        console.log(`Promedio ${key}: ${promedio}%`);

        calificaciones[key].barra.style.width = `${promedio}%`;
    }
});