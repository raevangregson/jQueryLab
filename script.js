

$(document).ready(function(){

  var elementClicked = "";
  $(".circle").click(function(){
    if($( this ).hasClass( "available"))
    {
      $(".prompt").css("display","flex");
      elementClicked = $(this);
  }
});


  $("button").click(function(){
    if($(".circle.available")){
      $(elementClicked).removeClass('available').addClass('reserved');
    $(".prompt").hide();
  }
  });

$("img").click(function(){
  $(".prompt").hide();
});






});
