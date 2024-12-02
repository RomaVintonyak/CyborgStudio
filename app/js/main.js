jQuery(document).ready(function () {
  "use script";
  var serviceBtn = $(".radio__button");
  serviceBtn.on("click", function () {
    serviceBtn.removeClass("servicess__active");
    $(this).toggleClass("servicess__active");
  });
});