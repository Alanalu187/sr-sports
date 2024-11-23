$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.header').addClass('fadeout');
    }
    else {
        $('nav').removeClass('black');
        $('.header').removeClass('fadeout');

    }
})
  /*menu button onclick function*/         $(document).ready(function () {
    $('.menu h4').click(function () {
        $("nav ul").toggleClass("active")
    })
})


$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});


document.addEventListener("click", e => {
    const dropdownBtn = e.target.closest(".dropdown-btn");

    if (dropdownBtn) {
        const dropdown = dropdownBtn.closest(".dropdown");
        const isAlreadyActive = dropdown.classList.contains("active");

        hideDropElements();
        if (isAlreadyActive) {
            dropdown.classList.remove("active");
            return;
        }

        dropdown.classList.add("active");
    } else { hideDropElements() }

    function hideDropElements() {
        const dropElements = document.querySelectorAll(".dropdown, .dropright");
        for (let element of dropElements) {
            element.classList.remove("active");
        }
    }
});

document.addEventListener("mouseover", e => {
    const dropright = e.target.closest(".dropright");
    const button = e.target.closest(".dropdown-content button");
    if (button) { hideDroprightElements() }
    if (dropright) { dropright.classList.add("active") }

    function hideDroprightElements() {
        const dropElements = document.querySelectorAll(".dropright");
        for (let element of dropElements) {
            element.classList.remove("active");
        }
    }
});