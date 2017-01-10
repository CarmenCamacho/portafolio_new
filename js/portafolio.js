$(document).ready(function(){

	console.log("documento listo");
	$(".dropdown-button").dropdown();
	$('.scrollspy').scrollSpy({
		scrollOffset:30
	});
	$('.modal').modal();

//------------------------> ANIMA HEPTAGONO AL CARGAR 

	$("#heptagono").addClass("animated");
	$("#heptagono").addClass("rotateIn");

	// $("#heptagono").removeClass("animated");
	// $("#heptagono").removeClass("rotateIn");

//--------------------------> Añade colores a logo 

	$(".logo").mouseover(function(){
		
		$("<img src='images/triangulo-logo2.png' class='logo'></img>").insertBefore("#logo");
		$("#heptagono").addClass("animated");
		$("#heptagono").addClass("rotateIn");
	});

// ----------------------------> HOLA 

	$("#yo").mouseover(function(){
		$("#yoyoyo").fadeIn()
	});
	$("#yo").mouseleave(function(){
		$("#yoyoyo").fadeOut()
	});


// ----------------------------> Activa el modal 

	$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '5%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      console.log(modal, trigger);
      },
     
    });

    $("#proy1").click(function(){
		$('#modal1').modal('open');
	});

	$("#proy2").click(function(){
    	console.log("click")
		$('#modal2').modal('open');
	});
	$("#proy3").click(function(){
    	console.log("click")
		$('#modal3').modal('open');
	});
	$("#proy4").click(function(){
    	console.log("click")
		$('#modal4').modal('open');
	});
	$("#proy5").click(function(){
    	console.log("click")
		$('#modal5').modal('open');
	});
	$("#proy6").click(function(){
    	console.log("click")
		$('#modal6').modal('open');
	});


   // ----------------> Muestra on scroll los botones de contacto

  var contactos = [
    {selector: '#batshit', offset: 50, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#batshit2', offset: 50, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#batshit3', offset: 50, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#primero', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));;
    } },
    {selector: '#segundo', offset: 150, callback: function(el) {
      Materialize.fadeInImage($(el));;
    } },
    {selector: '#tercero', offset: 200, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#cuarto', offset: 250, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },



  ];
  Materialize.scrollFire(contactos);

  // var letras = [
  //   {selector: '#primero', offset: 50, callback: function(el) {
  //     Materialize.fadeInImage($(el));;
  //   } },
  //   {selector: '#segundo', offset: 100, callback: function(el) {
  //     Materialize.fadeInImage($(el));;
  //   } },
  //   {selector: '#tercero', offset: 250, callback: function(el) {
  //     Materialize.fadeInImage($(el));
  //   } },
  //   {selector: '#cuarto', offset: 260, callback: function(el) {
  //     Materialize.fadeInImage($(el));
  //   } }

 //  ];
 // Materialize.scrollFire(contactos);



// -----------------> Mantiene ratio apariencia den circulos proyecto

$(window).on('resize', function(){
     var anchoCirculo = $(".alto").height(); 
     console.log(anchoCirculo);
 	$("#p-uno").css("width",anchoCirculo)
});



// -----------------> Estilos circulos proyectos

  $("#proy1").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-uno").fadeIn();
  		$("#p-uno").css("display", "inline-block");
  });
   $("#proy1").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-uno").fadeOut();
  });

   $("#proy2").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-dos").fadeIn();
  });
   $("#proy2").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-dos").fadeOut();
  });

   $("#proy3").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-tres").fadeIn();
  });
   $("#proy3").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-tres").fadeOut();
  });
   $("#proy4").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-cuatro").fadeIn();
  });
  $("#proy4").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-cuatro").fadeOut();
  });
  $("#proy5").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-cinco").fadeIn();
  });
  $("#proy5").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-cinco").fadeOut();
  });
   $("#proy6").mouseover(function(){
  		$(this).addClass("z-depth-3")
  		$("#p-seis").fadeIn();
  });
  $("#proy6").mouseleave(function(){
   		$(this).removeClass("z-depth-3")
  		$("#p-seis").fadeOut();
  });

// -----------------> Colores colores!

$(".crazy").mouseover(function(){
		var arregloColor = ["#ff897f", "#1de9b6", "#310020", "#9b80ff", "#d0c9e5"];
	  color = arregloColor[Math.floor(Math.random() * (5 - 0 + 0)) + 0];	    
	  $(this).css("background-color", color)
		$(this).css("box-shadow", "none")
		$(this).next(".letra").css("color",color)
	});


 });

