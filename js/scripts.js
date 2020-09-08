/* Autor: Marco Antonio Ramírez Alfaro  v1.1 | 04-09-2020 */

// POP UP
let mainVideoWrapper = document.getElementById('mainVideoWrapper'),
closeVideo = document.getElementById('closeVideo'),
btnCloseVideo = document.getElementById('btnCloseVideo'),
popupVideo = document.getElementById('popupVideo')


// CLOSE VIDEO REF: https://gist.github.com/cferdinandi/9044694
var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
};

mainVideoWrapper.addEventListener('click', function(){
  popupVideo.classList.add('showPop')
})

closeVideo.addEventListener('click', function(){
  popupVideo.classList.remove('showPop')
  stopVideos();
})

btnCloseVideo.addEventListener('click', function(){
  popupVideo.classList.remove('showPop')
  stopVideos();
})



// Poner la fecha del contador
var contadorFecha = new Date("Sep 15, 2020 00:00:00").getTime()

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
document.getElementById("comparativoTimer").innerHTML = horasReales + "h " + minutosContador + "m " + segundosContador + "s "

// Texto cuando se acabe el contador
if (distancia < 0) {
clearInterval(contador)
document.getElementById("comparativoTimer").innerHTML = " "
}
}, 1000)



// CALCULADORA
let opcionesTresMeses,
opcionesDoceMeses,
resultadoTresMeses = document.getElementById('resultadoTresMeses'),
resultadoDoceMeses = document.getElementById('resultadoDoceMeses'),
resultadoCalcTresMeses,
resultadoCalcDoceMeses,
unidadesTresMesesUno = 700,
unidadesTresMesesDos = 600,
unidadesTresMesesTres = 580,
unidadesDoceMesesUno = 1600,
unidadesDoceMesesDos = 1550

//OPERACIONES CALCULADORA TRES MESES
function calculadoraTresMeses(){
  opcionesTresMeses = document.getElementById('opcionesTresMeses').value

  if (opcionesTresMeses == 100) {
    resultadoCalcTresMeses = opcionesTresMeses*unidadesTresMesesUno,
    resultadoCalcTresMeses = resultadoCalcTresMeses.toLocaleString("en-US")
  }else if (opcionesTresMeses == 200) {
    resultadoCalcTresMeses = opcionesTresMeses*unidadesTresMesesDos,
    resultadoCalcTresMeses = resultadoCalcTresMeses.toLocaleString("en-US")
  }else {
    resultadoCalcTresMeses = opcionesTresMeses*unidadesTresMesesTres,
    resultadoCalcTresMeses = resultadoCalcTresMeses.toLocaleString("en-US")
  }

  resultadoTresMeses.innerHTML = '$'+resultadoCalcTresMeses+' MXN'

}

//OPERACIONES CALCULADORA DOCE MESES
function calculadoraDoceMeses(){
  opcionesDoceMeses = document.getElementById('opcionesDoceMeses').value

  if (opcionesDoceMeses == 100) {
    resultadoCalcDoceMeses = opcionesDoceMeses*unidadesDoceMesesUno
    resultadoCalcDoceMeses = resultadoCalcDoceMeses.toLocaleString("en-US")
  }else {
    resultadoCalcDoceMeses = opcionesDoceMeses*unidadesDoceMesesDos
    resultadoCalcDoceMeses = resultadoCalcDoceMeses.toLocaleString("en-US")
  }

  resultadoDoceMeses.innerHTML = '$'+resultadoCalcDoceMeses+' MXN'

}
