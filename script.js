

$(document).ready(function(){

  var tables =[];
  var elementClicked = "";
  var index;
  var reservation = {
    name:"",
    number:"",
    party:"",
  };

  $(".circle").on("click",function(){
    if($(this).hasClass( "available"))
    {
      $("#tableNumber").text("Table Number "+this.id);
      $(".prompt").css("display","flex");
      elementClicked = $(this);
  }
});

//save button instructions
  $("#reserve").on("click",function(){
    if($(".circle.available")){
      index = tables.length;

      $(elementClicked).html("<span class=hovering id="+(index)+"></span>Reserved");
      $(elementClicked).removeClass("available").addClass("reserved");

      reservation.name = $(".name").val();
      reservation.number = $(".phone").val();
      reservation.party = $(".party").val();

      //push the reservation to the reservation array
      tables.push("reservation");

      //reset the form
      $(".form")[0].reset();


    $(".prompt").hide();
  }
  });

  // $(function () {
  //     $(".hovering").hover(function () {
  //       index = $('.hovering').html($(this).attr('id'));
  //       $(".hovering").html("name: "+tables[index].name+"<br>reservation: "+tables[index].party)
  //     });
  // });

  $(".circle").on('mouseenter','.hovering',function () {
    index = $('.hovering').html($(this).attr('id'));
    $(".hovering").html("name: "+tables[index].name+"<br>reservation: "+tables[index].party)
});

  // $(".circle").on({
  //     mouseenter: function () {
  //       index = $('.hovering').html($(this).attr('id'));
  //       $(".hovering").html("name: "+tables[index].name+"<br>reservation: "+tables[index].party)
  //     },
  //     mouseleave:function () {
  //     }
  // },'.hovering');


$("img").click(function(){
  $(".prompt").hide();
});



});
