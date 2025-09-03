/*preloader*/
$(window).on("load", function () {
  $("#preloader_post").fadeOut();
  $("#preloader").delay(300).fadeOut();
});

/*owl carosuel*/
$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    loop: true,
    dots: false,
    smartSpeed: 600,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<span><i class="fa-solid fa-angle-left"></i></span>',
      '<span><i class="fa-solid fa-angle-right"></i></span>',
    ],
  });
});

/*Way points*/
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(function () {
        $(".progress-bar").each(function () {
          $(this).animate(
            {
              width: $(this).attr("aria-valuenow") + "%",
            },
            500
          );
        });
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

/*Responsive Tabs*/
$(function () {
  $("#service-tabs").responsiveTabs({
    animation: "slide",
  });
});

/*Isotope*/

$(window).on("load", function () {
  // init Isotope
  var $grid = $(".grid").isotope({});
  // filter items on button click
  $(".Profolio-buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    $(".Profolio-buttons").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

/* magnific popups */
$(function () {
  $(".Profolio-item ").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/* Tesimonials -owl carosuel*/
$(document).ready(function () {
  $("#Testmonials").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    smartSpeed: 500,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<span><i class="fa-solid fa-angle-left"></i></span>',
      '<span><i class="fa-solid fa-angle-right"></i></span>',
    ],
  });
});

/* counter-up*/
$(function () {
  $(".Counter").counterUp({
    delay: 20,
    time: 3000,
  });
});
/* Clients -owl carosuel*/
$(document).ready(function () {
  $("#client").owlCarousel({
    items: 5,
    autoplay: true,
    loop: true,
    dots: false,
    smartSpeed: 500,
    autoplayHoverPause: true,
  });
});

/* contact from */
$(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let number = $("#number").val().trim();
    let sub = $("#sub").val().trim();
    let message = $("#message").val().trim();

    if (name && email && number && sub && message) {
      $("#formMsg")
        .text("Thank You For Contacting!")
        .css("color", "green")
        .text(" Send Message  Successfully.")
        .delay(1000)

        .fadeOut();
      $("#contactForm")[0].reset();
    } else {
      $("#formMsg").text("Please fill all fields.").css("color", "red");
    }
  });
});

/* nav-bar */
$(function () {
  navbarwhite();
  $(window).scroll(function () {
    navbarwhite();
  });
  function navbarwhite() {
    if ($(window).scrollTop() > 50) {
      //show white
      $("nav").addClass("nav-top-white");
      $("#btn-back").fadeIn();
    } else {
      //hide white
      $("nav").removeClass("nav-top-white");
      $("#btn-back").fadeOut();
    }
  }
});

/* smooth-scroll */
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var sec_id = $(this).attr("href");

    $("html,body").animate(
      {
        scrollTop: $(sec_id).offset().top - 50,
      },
      500,
      "easeInOutExpo"
    );
  });
});
/* nav menu-collapse */
const navItems = document.querySelectorAll(".nav-item");
const navMenu = document.querySelector("#navMenu");
navItems.forEach((li) => {
  li.addEventListener("click", () => {
    let ww = window.innerWidth;
    if (ww < 992) {
      let bsToggle = new bootstrap.Collapse(navMenu);
      bsToggle.toggle();
    }
  });
});



