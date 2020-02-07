// анімація якоря
$(document).ready(function() {
  $(".anchor").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//прелоадер
var $preloader = $("#p_prldr"),
  $svg_anm = $preloader.find(".svg_anm");
$svg_anm.fadeOut();
$preloader.delay(500).fadeOut("slow");

//from post sending 
$('#contact-form').click(function(){  

  $.ajax({ 
        url: '/send',
        type: 'POST',
        cache: false, 
     
     })
  });            
