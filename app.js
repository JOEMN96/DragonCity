

var swiper = new Swiper(".swiper-container", {
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