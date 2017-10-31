

$(document).ready(function(){

  var elementClicked = "";
  $(".circle").click(function(){
    if($(this).hasClass( "available"))
    {
      $("label").text(" "+this.id);
      $(".prompt").css("display","flex");
      elementClicked = $(this);
  }
});


  $("button").click(function(){
    if($(".circle.available")){
      $(elementClicked).removeClass('available').addClass('reserved');
      $(elementClicked).css("background-color","#ADAAAA");
      $(elementClicked).css("color","#EEE");
    $(".prompt").hide();
  }
  });

$("img").click(function(){
  $(".prompt").hide();
});






});
