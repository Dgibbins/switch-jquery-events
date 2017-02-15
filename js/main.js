

$(document).ready(function(){
    $('body').addClass("light");

  $('.switch button').on('click', function(){
    $(this).toggleClass("on off");
    $('body').toggleClass("light dark");

    if ($('body').attr("class") === 'light'){
      $('.status').html("Lights on!");
    } else {
      $('.status').html("Lights off");
    }
  });
});
