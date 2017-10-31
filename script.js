

$(document).ready(function(){
  $(".circle").click(function(){
    if($( this ).hasClass( "available"))
    {
      $(".prompt").css("display","flex");
  }
});
  $("button").click(function(){
    if($(".circle.available")){
      $(".circle").removeClass('available').addClass('reserved');
    $(".prompt").hide();
  }
  });
});
