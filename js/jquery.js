$(document).ready(function(){

    var opacity = $(".opacity");
    var modal = $(".modal");
    var boton = $(".boton");

    // OCULTAR MODAL
    modal.hide();
    opacity.hide();

    boton.click(function(){ 
        opacity.fadeIn();
        modal.fadeIn();
    }); 
    
    // MOSTRAR
    opacity.click(function(){ 
        $(this).fadeOut();
        modal.fadeOut();
    }); 
    
    // CENTRAR
    
    var ventanaAncho = $(window).width();
    var ventanaAlto = $(window).height();
    
    var modalAncho = $(".modal").width();
    var modalAlto = $(".modal").height();
    
//    var modalAncho = $(".modal").outerWidth();
//    var modalAlto = $(".modal").outerHeight();
    
    var modalTop = (ventanaAlto-modalAlto)/2;
    var modalLeft = (ventanaAncho-modalAncho)/2;
    
//    console.log(ventanaAncho);
//    console.log(ventanaAlto);
    
    // MODAL
    console.log(modalAncho);
    console.log(modalAlto);
    
//    console.log(modalTop);
//    console.log(modalLeft);
    
    modal.css("top", modalTop);
    modal.css("left", modalLeft);
    

});