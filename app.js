const hoy = new Date();
const diaHoy = hoy.getDate();
//console.log(diaHoy);
const mesHoy = hoy.getMonth()+1;
// console.log(mesHoy);
const añoHoy = hoy.getFullYear();
// console.log(añoHoy)


const año = document.getElementById("valorAño")
const mes = document.getElementById("valorMes")
const dia = document.getElementById("valorDia")


const calcular = () => {
    const añoNacimiento = document.getElementById("año").value;
    const mesNacimiento = document.getElementById("mes").value;
    const diaNacimiento = document.getElementById("día").value;
    
    const edadAños = añoHoy - añoNacimiento
    const edadMeses = mesHoy - mesNacimiento
    const edadDias = diaHoy - diaNacimiento

    if(mesHoy < mesNacimiento){
        let edadAñosMesMenor = edadAños - 1;
        //console.log(edadAñosMesMenor);
        año.innerHTML = edadAñosMesMenor;

        let edadMesesMesMenor = edadMeses + 11;
        //console.log(edadMesesMesMenor);
        mes.innerHTML = edadMesesMesMenor; 

        let edadDiasMesMenor = edadDias + 30;
        //console.log(edadDiasMesMenor);
        dia.innerHTML = edadDiasMesMenor;

            if(diaHoy == diaNacimiento || diaHoy > diaNacimiento){
                let m=edadMesesMesMenor + 1;
                //console.log(m);
                mes.innerHTML=m;
                let a = edadDias
               //console.log(a);
                dia.innerHTML=a;
            }
    }

    else if(mesHoy == mesNacimiento && diaHoy < diaNacimiento) {
        let edadAñosMesIgualDiaMenor = edadAños - 1;
        //console.log(edadAñosMesIgualDiaMenor)
        año.innerHTML = edadAñosMesIgualDiaMenor;

        let edadMesesMesIgualDiaMenor = edadMeses + 11;
        //console.log(edadMesesMesIgualDiaMenor);
        mes.innerHTML = edadMesesMesIgualDiaMenor;

        let edadDiasMesIgualDiaMenor = edadDias + 30;
        //console.log(edadDiasMesIgualDiaMenor);
        dia.innerHTML = edadDiasMesIgualDiaMenor;
    }

    else if (diaHoy == diaNacimiento && mesHoy > mesNacimiento){
        año.innerHTML = edadAños
        let edadMesesDiaIgualMesMayor = edadMeses;
        //console.log(edadMesesDiaIgualMesMayor);
        mes.innerHTML = edadMesesDiaIgualMesMayor;
        dia.innerHTML=edadDias;
    }

    else if (diaHoy < diaNacimiento && mesHoy > mesNacimiento){
        año.innerHTML = edadAños;
        let m=edadMeses-1;
        //console.log(m);
        mes.innerHTML=m;
        let a = edadDias + 30
        //console.log(a);
        dia.innerHTML=a;
    }

    else {
        año.innerHTML=edadAños;
        mes.innerHTML=edadMeses;
        dia.innerHTML=edadDias;
    }  
}



