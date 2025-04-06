document.addEventListener("DOMContentLoaded", () => {
    let carousel = document.getElementById("restaurantCarousel");
    let title = document.getElementById("dish-title");
    let description = document.getElementById("dish-description");

    carousel.addEventListener("slid.bs.carousel", () => {
        let activeItem = document.querySelector(".carousel-item.active");
        title.textContent = activeItem.dataset.title;
        description.textContent = activeItem.dataset.description;
    });
});
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.backToTop');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = '1';
        backToTop.style.transition = 'opacity 0.5s ease-in-out';
    } else {
        backToTop.style.display = 'none';
        backToTop.style.opacity = '0';
        backToTop.style.transition = 'opacity 0.5s ease-in-out';
    }
});