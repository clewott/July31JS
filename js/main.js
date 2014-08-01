$(document).ready(function() {

  $(".tn a").click(function(event) {

    event.preventDefault();
    var pageToNavigate = "." + $(this).attr("rel");
    console.log(pageToNavigate);

    $(".container").children().removeClass("currentPage");

    $(pageToNavigate).addClass("currentPage");

  });

$('.Album1').on('click', '.image', function(event) {

  event.preventDefault();
  $(this).closest('li').siblings().addClass('invisible');
  $(this).addClass('currentImage').removeClass('image');
  $(this).closest('li').siblings().find('a').removeClass('image');
});

$('.Album1').on('click', '.currentImage', function(event) {

  event.preventDefault();
  $(this).addClass('image');
  $(this).closest('li').siblings().find('a').addClass('image');
  $(this).removeClass('currentImage');
  $(this).closest('li').siblings().removeClass('invisible');

});


  $('.Album2').on('click', '.image', function(event) {

    event.preventDefault();
    $(this).closest('li').siblings().addClass('invisible');
    $(this).addClass('currentImage').removeClass('image');
    $(this).closest('li').siblings().find('a').removeClass('image');
  });

  $('.Album2').on('click', '.currentImage', function(event) {

    event.preventDefault();
    $(this).addClass('image');
    $(this).closest('li').siblings().find('a').addClass('image');
    $(this).removeClass('currentImage');
    $(this).closest('li').siblings().removeClass('invisible');

  });

  $('.Album3').on('click', '.image', function(event) {

    event.preventDefault();
    $(this).closest('li').siblings().addClass('invisible');
    $(this).addClass('currentImage').removeClass('image');
    $(this).closest('li').siblings().find('a').removeClass('image');
  });

  $('.Album3').on('click', '.currentImage', function(event) {

    event.preventDefault();
    $(this).addClass('image');
    $(this).closest('li').siblings().find('a').addClass('image');
    $(this).removeClass('currentImage');
    $(this).closest('li').siblings().removeClass('invisible');

  });


});
