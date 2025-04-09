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