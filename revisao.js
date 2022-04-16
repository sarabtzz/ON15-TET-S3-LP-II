/* if (horario >= 0 && horario < 6) { 
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) { 
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 &&  horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido"); 
} */

//construindo o mesmo caso do if acima em switch


// EXERCICIO DE REVISÃO DE IF...ELSE

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

/*
escala de IDH

muitoBaixo 0 - 0.499
baixa .5 - 0.599
medio .6 - 0.699
alto .7 - 0.799
muitoAlto .8 - 1
*/

let idh = canada

if(idh >=0 && idh < 0.5) {
    console.log('IDH muito baixo')
 } else if (idh >= 0.5 && idh <= 0.599) {
     console.log ('IDH baixo')
 } else if (idh >= .6 && idh < .699) {
     console.log ('IDH médio')
 } else if (idh >= .7 && idh < .899) {
    console.log ('IDH alto')
 } else if (idh >= .8 && idh < .999) {
    console.log ('IDH muito alto')
 } else {
     console.log('IDH inválido')
 }
 
