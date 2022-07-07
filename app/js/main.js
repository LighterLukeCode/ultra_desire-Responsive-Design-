$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 650) {
    $(".works-path__item--measurements").appendTo($(".works-path__items-box"));
  }
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    slidesToScroll: 10,
    slidesToShow: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: { slidesToScroll: 8, slidesToShow: 8 },
      },
      {
        breakpoint: 1511,
        settings: { slidesToScroll: 6, slidesToShow: 6 },
      },
      {
        breakpoint: 1201,
        settings: { slidesToScroll: 4, slidesToShow: 4 },
      },
      {
        breakpoint: 841,
        settings: { slidesToScroll: 3, slidesToShow: 3 },
      },
      {
        breakpoint: 550,
        settings: { slidesToScroll: 2, slidesToShow: 2 },
      },
      {
        breakpoint: 376,
        settings: { slidesToScroll: 1, slidesToShow: 1 },
      },
    ],
  });
  $(".article__slider-box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/blog/slider-arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/blog/slider-arrow-right.svg"></button>',
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
