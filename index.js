let a = document.querySelector('.icon');
let b = document.querySelectorAll('.inner');

a.addEventListener("click", () => {
    b.forEach(add_class);
});

function add_class(b){
    b.classList.toggle("active");
}
var swiper = new Swiper(".body1Swiper", {
    loop:true,
    effect: "cube",
    grabCursor: true,
    // cubeEffect: {
    //   slideShadows: false,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  var swiper = new Swiper(".swiper-features", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

