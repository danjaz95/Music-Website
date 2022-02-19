// Download Button Animation
$(".btn-dark").hover(
  function () {
    $(this).addClass("btn-hover");
  },
  function () {
    $(this).removeClass("btn-hover");
  }
);

// slideshow
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
});
