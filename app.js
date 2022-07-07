/*slideshowe-swipper*/
var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },   
  });
  