const nav = document.querySelector("nav");
const menu = document.querySelectorAll("nav .h-menu > li");
const navBg = document.querySelector(".h-menu-bg");

const humberger = document.querySelector(".p-humberger");
const mobileClose = document.querySelector(".p-close");
const headerInner = document.querySelector("header .h-inner");
const emptyDiv = document.createElement("div");

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("is-start");
  }, 200);

  //pc menu
  menu.forEach(function (item) {
    item.addEventListener("mouseenter", function (e) {
      item.classList.add("is-act");
      navBg.classList.add("is-act");
      nav.classList.add("is-act");
    });
  });

  menu.forEach(function (item) {
    item.addEventListener("mouseleave", function (e) {
      item.classList.remove("is-act");
      navBg.classList.remove("is-act");
      nav.classList.remove("is-act");
    });
  });

  //mobile menu
  emptyDiv.className = "overlay";

  humberger.addEventListener("click", function () {
    nav.classList.add("is-open");
    headerInner.appendChild(emptyDiv);
    document.getElementById("main").classList.add("covering");
  });

  mobileClose.addEventListener("click", function () {
    nav.classList.remove("is-open");
    headerInner.removeChild(headerInner.lastElementChild);
    document.getElementById("main").classList.remove("covering");
  });

  if (window.matchMedia("(max-width: 1024px)").matches) {
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }

    categories = document.querySelectorAll("nav .h-menu > li > a");

    for (var i = 0; i < categories.length; i++) {
      categories[i].onclick = function (e) {
        e.preventDefault();
        []
          .concat(_toConsumableArray(getSiblingsAndMe(this.parentNode)))
          .forEach(function (el) {
            return el.classList.remove("is-show");
          });
        this.parentNode.classList.add("is-show");
      };
    }

    function getSiblingsAndMe(el) {
      return el.parentNode.children;
    }
  }
});

$(function () {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
        }

        if ($("nav").hasClass("is-open")) {
          $("nav").removeClass("is-open");
          $(".overlay").remove();
        }
      }
    });

  //탑버튼
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < 100) {
      $(".back-to-top").addClass("hideAway");
    } else {
      $(".back-to-top").removeClass("hideAway");
    }
    if (window.pageYOffset == 0 || window.scrollY == 0) {
      $("#sub-area .sMenu-area li:first-child")
        .addClass("on")
        .siblings()
        .removeClass("on");
    }
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $(document).on("click", ".overlay", function () {
    $("nav").removeClass("is-open");
    $(".overlay").remove();
  });

  //animation
  TweenMax.set(".anim_ele", { autoAlpha: 0, y: "40" });

  var $animation_elements = $(".anim_ele");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top + 100;
      var element_bottom_position = element_top_position + element_height;

      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        TweenMax.to($element, 1, { y: 0, autoAlpha: 1 });
      } else {
        TweenMax.to($element, 1, { y: "40", autoAlpha: 0 });
      }
    });
  }

  $window.on("scroll resize", check_if_in_view);
  $window.trigger("scroll");

  function isMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
    } else {
      var resizeTimer;
      $(window).bind("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resizeFunction, 500);
      });
      function resizeFunction() {
        document.location.reload();
      }
    }
  }
  isMobile();
});

window.onload = function () {};
