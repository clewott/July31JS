$(document).ready(function() {

  $(".tn a").click(function(event) {

    event.preventDefault();
    var pageToNavigate = "." + $(this).attr("rel");
    console.log(pageToNavigate);

    $(".container").children().removeClass("currentPage");

    $(pageToNavigate).addClass("currentPage");


  });

$('.Album1 li').click(function(event) {

    event.preventDefault();
    $(this).siblings('li').toggle(); return false; });

$('.Album2 li').click(function(event) {

    event.preventDefault();
    $(this).siblings('li').toggle(); return false; });

$('.Album3 li').click(function(event) {

    event.preventDefault();
    $(this).siblings('li').toggle(); return false; });


});
