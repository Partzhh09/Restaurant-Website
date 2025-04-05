document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.getElementById("restaurantCarousel");
    let title = document.getElementById("dish-title");
    let description = document.getElementById("dish-description");

    carousel.addEventListener("slid.bs.carousel", function () {
        let activeItem = document.querySelector(".carousel-item.active");
        title.textContent = activeItem.dataset.title;
        description.textContent = activeItem.dataset.description;
    });
});
