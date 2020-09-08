/* Autor: Marco Antonio Ramírez Alfaro  v1.0 | 26-08-2020 */


// Poner la fecha del contador
var contadorFecha = new Date("Aug 30, 2020 00:00:00").getTime()

// Actualizar contador cada segundo
var contador = setInterval(function() {

// Obtener la fecha actual
var fechaAhora = new Date().getTime()

// Encuentra la diferencia entre la fecha actual y la fecha de la variable
var distancia = contadorFecha - fechaAhora

// Calcular días, horas, minutos y segundos
var diasContador = Math.floor(distancia / (1000 * 60 * 60 * 24)),
horasContador = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
minutosContador = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
segundosContador = Math.floor((distancia % (1000 * 60)) / 1000),
horasReales = Math.floor((diasContador * 24) + horasContador)

// Poner los días restantes
//document.getElementById("offerTime").innerHTML = diasContador + "d " + horasContador + "hs " + minutosContador + "min " + segundosContador + "seg "
document.getElementById("offerTime").innerHTML = horasReales + "h " + minutosContador + "m " + segundosContador + "s "

// Texto cuando se acabe el contador
if (distancia < 0) {
clearInterval(contador)
document.getElementById("offerTime").innerHTML = " "
}
}, 1000)
