const hoy = new Date();
const diaHoy = hoy.getDate();
const mesHoy = hoy.getMonth() + 1;
const añoHoy = hoy.getFullYear(); 

const calcularEdad = document.querySelector("button");
const inputs = document.querySelectorAll(".inputs");
const inputAñoNacimiento = document.getElementById("año");
const inputMesNacimiento = document.getElementById("mes");
const inputDiaNacimiento = document.getElementById("día");

const año = document.getElementById("valorAño");
const mes = document.getElementById("valorMes");
const dia = document.getElementById("valorDia");

const calculate = () => {
    //Capturamos los valores ingresados en los inputs (dia, mes,año) de la Fecha de Nacimiento
    const añoDeNacimiento = inputAñoNacimiento.value;
    const mesDeNacimiento = inputMesNacimiento.value;
    const diaDeNacimiento = inputDiaNacimiento.value;

    const fechaActual = new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate());
    const fechaDeNacimiento = new Date(añoDeNacimiento,mesDeNacimiento - 1,diaDeNacimiento);
  
    if (fechaDeNacimiento <= fechaActual) {
        
        //Calculamos la diferencia entre años, meses y dias actuales frente a los de nacimiento
        let edadAños = añoHoy - añoDeNacimiento;
        let edadMeses = mesHoy - mesDeNacimiento;
        let edadDias = diaHoy - diaDeNacimiento;

        año.innerHTML = edadAños;
        mes.innerHTML = edadMeses;
        dia.innerHTML = edadDias;

        if (edadMeses < 0 || (edadMeses == 0 && edadDias < 0)) {
            año.innerHTML = edadAños - 1;
            mes.innerHTML = edadMeses + 11;
            dia.innerHTML = edadDias + 31;

            if (edadDias >= 0) {
                mes.innerHTML = edadMeses + 12;
                dia.innerHTML = edadDias;
            }
        }

        if (diaHoy < diaDeNacimiento && mesHoy > mesDeNacimiento && añoDeNacimiento <= añoHoy) {
            mes.innerHTML = edadMeses - 1;
            dia.innerHTML = edadDias + 31;
        }

        if(inputDiaNacimiento.value.length==0,inputMesNacimiento.value.length==0,inputAñoNacimiento.value.length==0){
            año.innerHTML = "--";
            mes.innerHTML = "--";
            dia.innerHTML = "--";   
        }
    } else {
        document.getElementById("data-dia").classList.add("data-incorrecta");
        document.getElementById("data-mes").classList.add("data-incorrecta");
        document.getElementById("data-año").classList.add("data-incorrecta")
        año.innerHTML = "--";
        mes.innerHTML = "--";
        dia.innerHTML = "--";
    }
};

const validarInputs = (e) => {
    let valorInput = e.target.name;
    switch (valorInput) {
        case "dia":
            if (!inputDiaNacimiento.value) {
                document.getElementById("data-dia").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            } else if (inputDiaNacimiento.value > 31 || inputDiaNacimiento.value == 0) {
                document.getElementById("data-dia").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            }
            break;

        case "mes":
            if (!inputMesNacimiento.value) {
                document.getElementById("data-mes").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            } else if (inputMesNacimiento.value > 12 || inputMesNacimiento.value == 0) {
                document.getElementById("data-mes").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            }

            if ((inputMesNacimiento.value == 4 || inputMesNacimiento.value == 6 || inputMesNacimiento.value == 9 || inputMesNacimiento.value == 11) && inputDiaNacimiento.value > 30) {
                document.getElementById("data-mes").classList.add("data-incorrecta-nacim");
                calcularEdad.disabled = true;
            }

            if ((inputMesNacimiento.value == 2) && (inputDiaNacimiento.value>29)){
                document.getElementById("data-dia").classList.add("data-incorrecta-nacim");
                document.getElementById("data-mes").classList.add("data-incorrecta-nacim");
                calcularEdad.disabled = true;
            }
            break;

        case "año":
            if (!inputAñoNacimiento.value) {
                document.getElementById("data-año").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            } else if (inputAñoNacimiento.value > añoHoy || inputAñoNacimiento.value < 1900 || inputAñoNacimiento.value.length !== 4) {
                document.getElementById("data-año").classList.add("data-incorrecta");
                calcularEdad.disabled = true;
            }

            if((inputDiaNacimiento.value == 29) && (inputMesNacimiento.value == 2) && !(inputAñoNacimiento.value % 400 === 0 && inputAñoNacimiento.value % 100 !== 0 || inputAñoNacimiento.value % 4 === 0)){
                document.getElementById("data-año").classList.add("data-incorrecta-nacim")
                calcularEdad.disabled = true;
               }
            break;

        default:
            calculate();
            break;
    }  
};

inputs.forEach((input) => {
    input.addEventListener("blur", validarInputs);
});

calcularEdad.addEventListener("click", validarInputs);
