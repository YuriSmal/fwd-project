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
       
//AJAX форма
$(document).ready(function () {
  
  var myForm = $('form');
  myForm.on('submit', function() {
    var form_data = $(this).serialize();
      $.ajax({
            method: 'POST', 
            url: '/send',
            type: 'POST',
            cache: false, 
            data: form_data
         }).done(function() {
           $('.modal').show('50');
           $('#modal-close').click(function() {
             $('.modal').hide('50');
           })
         }).fail(function() {
           alert("An error has occured");
         });

      return false;
  });
});