// JavaScript Document

$(document).ready(function(e) {
$('#AniPantalla').height($('#page2').height()); //Calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;  //Crear una carpta audio que contenga los sonidos de las notas en formato mp3
		audio.preloadFX('vaca','audio/vaca.mp3', function(){}, function (e){alert('Error  ' +e);}); 
		audio.preloadFX('pato','audio/pato.mp3', function(){}, function (e){alert('Error  ' +e);});
		audio.preloadFX('gato','audio/gato.mp3', function(){}, function (e){alert('Error  ' +e);});
		audio.preloadFX('perro','audio/perro.mp3', function(){}, function (e){alert('Error  ' +e);});
		audio.preloadFX('caballo','audio/caballo.mp3', function(){}, function (e){alert('Error  ' +e);});
		audio.preloadFX('oveja','audio/oveja.mp3', function(){}, function (e){alert('Error  ' +e);});
		
		//Reproducir las notas
		
		$('.nota').bind('touchstart' , function() {$ (this) .addClass('tocada');   //Al tocar la pantalla (las notas) tendra que hacer el sonido indicado
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend' , function () {$(this).removeClass('tocada');});
		
		},false); //deviceready
		
}); //ready