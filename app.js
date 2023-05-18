const hoy = new Date(); //Obtenemos la fecha de Hoy con new Date()
const diaHoy = hoy.getDate();//Obtenemos el dia de la fecha de Hoy con getDate()
const mesHoy = hoy.getMonth() + 1;//Obtenemos el mes de la fecha de Hoy con getMonth()
const añoHoy = hoy.getFullYear();//Obtenemos el año de la fecha de Hoy con getFullYear()

const año = document.getElementById("valorAño");
const mes = document.getElementById("valorMes");
const dia = document.getElementById("valorDia");
const btn = document.querySelector("button"); //Capturamos el button de HTML a traves del document.querySelector()

//Capturamos los inputs de HTML a traves del id por medio del document.getElementById()
const añoNac = document.getElementById("año");
const mesNac = document.getElementById("mes");
const diaNac = document.getElementById("día");

//Validamos las entradas de cada input (dia, mes, año) de nacimiento
diaNac.addEventListener("blur", (e) => {
    const diaNacim = e.target.value;
    if (diaNacim > 31) {
        document.getElementById("data-dia").classList.add("data-incorrecta");
    }
});

mesNac.addEventListener("blur", (e) => {
    const mesNacim = e.target.value;
    if (mesNacim > 12) {
        document.getElementById("data-mes").classList.add("data-incorrecta");
    }
});

añoNac.addEventListener("blur", (e) => {
    const añoNacim = e.target.value;
    if (añoNacim > añoHoy || añoNacim < 1900) {
        document.getElementById("data-año").classList.add("data-incorrecta");
    }
    if (añoNacim.length < 4) {
        document.getElementById("data-año").classList.add("data-incorrecta");
    }
});

//Inciamos a realizar la funcion que realizara el Calculo de la Edad
btn.addEventListener("click", () => {
    //Capturamos los valores ingresados en los inputs (dia, mes,año) de la Fecha de Nacimiento
    const añoNacimiento = añoNac.value;
    const mesNacimiento = mesNac.value;
    const diaNacimiento = diaNac.value;

    const edadAños = añoHoy - añoNacimiento;
    const edadMeses = mesHoy - mesNacimiento;
    const edadDias = diaHoy - diaNacimiento;

    if (mesHoy < mesNacimiento) {
        let edadAñosMesMenor = edadAños - 1;
        año.innerHTML = edadAñosMesMenor;

        let edadMesesMesMenor = edadMeses + 11;
        mes.innerHTML = edadMesesMesMenor;

        let edadDiasMesMenor = edadDias + 30;
        dia.innerHTML = edadDiasMesMenor;

        if (diaHoy == diaNacimiento || diaHoy > diaNacimiento) {
            let edadMesDiaHoyIgualoDiaHoyMayor = edadMesesMesMenor + 1;
            mes.innerHTML = edadMesDiaHoyIgualoDiaHoyMayor;

            let edadDiasDiaHoyIgualoDiaHoyMayor = edadDias;
            dia.innerHTML = edadDiasDiaHoyIgualoDiaHoyMayor;
        }
    } else if (mesHoy == mesNacimiento && diaHoy < diaNacimiento) {
        let edadAñosMesIgualDiaMenor = edadAños - 1;
        año.innerHTML = edadAñosMesIgualDiaMenor;

        let edadMesesMesIgualDiaMenor = edadMeses + 11;
        mes.innerHTML = edadMesesMesIgualDiaMenor;

        let edadDiasMesIgualDiaMenor = edadDias + 30;
        dia.innerHTML = edadDiasMesIgualDiaMenor;
    } else if (diaHoy == diaNacimiento && mesHoy > mesNacimiento) {
        año.innerHTML = edadAños;

        let edadMesesDiaIgualMesMayor = edadMeses;
        mes.innerHTML = edadMesesDiaIgualMesMayor;
        dia.innerHTML = edadDias;
    } else if (diaHoy < diaNacimiento && mesHoy > mesNacimiento) {
        año.innerHTML = edadAños;
        let edadMesesDiaHoyMenorYMesHoyMayor = edadMeses - 1;
        mes.innerHTML = edadMesesDiaHoyMenorYMesHoyMayor;

        let edadDiasDiaHoyMenorYMesHoyMayor = edadDias + 30;
        dia.innerHTML = edadDiasDiaHoyMenorYMesHoyMayor;
    } else {
        año.innerHTML = edadAños;
        mes.innerHTML = edadMeses;
        dia.innerHTML = edadDias;
    }
    //Si la longitud de algun input es 0, que no calcule la edad, por falta de datos
    if (diaNacimiento.length === 0 || mesNacimiento.length === 0 || añoNacimiento.length === 0) {
        dia.innerHTML = "--";
        mes.innerHTML = "--";
        año.innerHTML = "--";
    }
});
