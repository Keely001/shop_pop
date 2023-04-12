let a = document.querySelector('.icon');
let b = document.querySelectorAll('.inner');

a.addEventListener("click", () => {
    b.forEach(add_class);
});

function add_class(b){
    b.classList.toggle("active");
}
var swiper = new Swiper(".body1Swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

