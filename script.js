

$(document).ready(function(){

  var elementClicked = "";
  $(".circle").on("click",function(){
    if($(this).hasClass( "available"))
    {
      $("label").text(" "+this.id);
      $(".prompt").css("display","flex");
      elementClicked = $(this);
  }
});


  $("#reserved").on("click",function(){
    if($(".circle.available")){
      $(elementClicked).removeClass('available').addClass('reserved');
      $(elementClicked).css("background-color","#ADAAAA");
      $(elementClicked).css("color","#EEE");
      $(elementClicked).css("cursor","not-allowed");
    $(".prompt").hide();
  }
  });

$("img").click(function(){
  $(".prompt").hide();
});






});
