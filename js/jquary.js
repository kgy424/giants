//--------------- nav-menu toggle
$(".down .btn").click(function(){
    $(".menu_toggle").slideToggle();
    $(".down .btn").toggleClass("on");
})

// ----------------- section05 arrow

$(".etc_R .youtube").mouseover(function(){
  $(".arrow1 i").removeClass("far")
  $(".arrow1 i").addClass("fas")
})
$(".etc_R .youtube").mouseleave(function(){
  $(".arrow1 i").removeClass("fas")
  $(".arrow1 i").addClass("far")
})
$(".etc_R .instagram").mouseover(function(){
  $(".arrow2 i").removeClass("far")
  $(".arrow2 i").addClass("fas")
})
$(".etc_R .instagram").mouseleave(function(){
  $(".arrow2 i").removeClass("fas")
  $(".arrow2 i").addClass("far")
})