

var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

  //  gsap anime

  gsap.to('.landingSectionSvg',{duration:1,y:10})