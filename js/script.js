$('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1500,
 });


const burgerIcon = document.querySelector('.burger__icon');
const menu = document.querySelector('.menu');
if (burgerIcon) {
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}
