$(document).ready(function() {

  $(".tn a").click(function(event) {

    event.preventDefault();
    var pageToNavigate = "." + $(this).attr("rel");
    console.log(pageToNavigate);

    $(".container").children().removeClass("currentPage");

    $(pageToNavigate).addClass("currentPage");

  });

  // $('.album').on('click', '.image', function(event) {
  //
  //   event.preventDefault();
  //   $(this).closest('li').siblings().addClass('invisible');
  //   $(this).addClass('currentImage').removeClass('image');
  //   $(this).closest('li').siblings().find('a').removeClass('image');
  // });
  //
  // $('.album').on('click', '.currentImage', function(event) {
  //
  //   event.preventDefault();
  //   $(this).addClass('image');
  //   $(this).closest('li').siblings().find('a').addClass('image');
  //   $(this).removeClass('currentImage');
  //   $(this).closest('li').siblings().removeClass('invisible');
  //
  // });

  $('.album a').on('click', function(event) {
    event.preventDefault();
    $(this).closest('li').siblings().toggleClass('invisible');
    $(this).toggleClass('currentImage');
});

});
