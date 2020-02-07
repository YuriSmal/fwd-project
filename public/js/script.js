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

// //Telegram Form
// const formId = "telegramForm";
// const form = document.getElementById(formId);
// //функция для захвата данных из тегов формы и синтеза JSON-обьекта
// function toJSONString(form) {
//   var obj = {};
//   var elements = form.querySelectorAll("input, select, textarea");
//   for (var i = 0; i < elements.length; ++i) {
//     var element = elements[i];
//     var name = element.name;
//     var value = element.value;
//     if (name) {
//       obj[name] = value;
//     }
//   }
//   return JSON.stringify(obj);
// }
// if (form) {
//   form.addEventListener("submit", event => {
//     event.preventDefault();
//     //получаем данные из формы
//     const json = toJSONString(form);
//     //создаем соединение
//     const formReq = new XMLHttpRequest();
//     formReq.open("POST", "/telegram", true);
//     ///////////////////////////////////
//     /////////////SweetAlert//////////
//     ///////////////////////////////////
//     //обрабатываем ответ сервера
//     formReq.onload = function(oEvent) {
//       if (formReq.status === 200) {
//         swal({
//           title: "Успешно отправлено!",
//           icon: "success",
//           timer: 2000
//         });
//         document.querySelector(".sa-success").style.display = "block";
//         document.querySelector(".sa-button-container").style.opacity = "0";
//       }
//       if (formReq.status !== 200) {
//         swal({
//           title: "Произошла ошибка!",
//           icon: "error",
//           timer: 2000
//         });
//         document.querySelector(".sa-error").style.display = "block";
//         document.querySelector(".sa-button-container").style.opacity = "0";
//       }
//     };
//     ////////////////////////////
//     ////////////////////////////
//     formReq.setRequestHeader("Content-Type", "application/json");
//     //отправляем
//     formReq.send(json);
//   });
// }
