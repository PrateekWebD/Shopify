$(document).ready(function() {
  if (/Edge\/\d./i.test(navigator.userAgent)){
    jQuery('html').addClass('ie');
  };

  $(".menu-btn").click(function(){
    $("body").toggleClass("menu-open");
    $(this).toggleClass("active");
  });
});

$(window).load(function() {
  objectFitImages();
});
