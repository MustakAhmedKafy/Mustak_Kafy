(function ($) {
  ("use strict");
  var nav = $("nav");
  var navHeight = nav.outerHeight();

  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 5,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
    } else {
      $(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }

  /*-------Start smooth scroll js----------*/
  $("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 90,
        },
        1000
      );
    e.preventDefault();
  });

  // skillbar
  $(document).ready(function () {
    $(".skillbar").waypoint(
      function () {
        $(".skillbar").css({
          animation: "animate-positive 2s",
          opacity: "1",
        });
      },
      {
        offset: "70%",
      }
    );
  });

  // gallery
  $(document).ready(function () {
    $("#lightgallery").lightGallery();
    $("#lightgallery1").lightGallery();
    $("#lightgallery2").lightGallery();
    $("#lightgallery3").lightGallery();
  });

  // clock
  function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let amPm = "AM";

    if (h === 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      amPm = "PM";
    }

    if (h < 10) {
      h = `0${h}`;
    }
    if (m < 10) {
      m = `0${m}`;
    }
    if (s < 10) {
      s = `0${s}`;
    }
    let clock = document.querySelector("#my-clock");
    clock.innerHTML = `${h}:${m}:${s} ${amPm}`;
    setTimeout(showTime, 1000);
  }
  showTime();

  // scroll position
  $(window).scroll(function () {
    var positiontop = $(document).scrollTop();
    console.log(positiontop);
    // about
    if (positiontop > 300 && positiontop < 750) {
      $("#about_1").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#about_3").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
    } else {
      $("#about_1").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#about_3").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
    }
    // about end
    if (positiontop > 550 && positiontop < 1420) {
      // skillBar
      jQuery(".skillbar").each(function () {
        jQuery(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            4000
          );
      });
    }
    // services
    if (positiontop > 1420 && positiontop < 2120) {
      $("#services_1").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#services_2").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#services_3").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#services_4").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#services_5").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#services_6").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
    } else {
      $("#services_1").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#services_2").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#services_3").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#services_4").removeClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#services_5").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#services_6").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
    }
    // services end

    // project
    if (positiontop > 2100 && positiontop < 2600) {
      $("#project_1").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_2").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_3").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_4").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_5").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_6").addClass(
        "animate__animated animate__flipInX animate__slow"
      );
    } else {
      $("#project_1").removeClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_2").removeClass(
        " animate__animated animate__flipInX animate__slow"
      );
      $("#project_3").removeClass(
        " animate__animated animate__flipInX animate__slow"
      );
      $("#project_4").removeClass(
        "animate__animated animate__flipInX animate__slow"
      );
      $("#project_5").removeClass(
        " animate__animated animate__flipInX animate__slow"
      );
      $("#project_6").removeClass(
        " animate__animated animate__flipInX animate__slow"
      );
    }
    // project end
    // particles
    if (positiontop > 2520 && positiontop < 3100) {
      $("#particles").addClass(
        "animate__animated animate__zoomInDown animate__slow"
      );
    } else {
      $("#particles").removeClass(
        "animate__animated animate__zoomInDown animate__slow"
      );
    }
    // particles end

    // photography
    if (positiontop > 3460 && positiontop < 4210) {
      $("#photo_1").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#photo_2").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#photo_3").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#photo_4").addClass(
        "animate__animated animate__backInUp animate__slow"
      );

      $("#photo_5").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#photo_6").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#photo_7").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#photo_8").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
       $("#photo_9").addClass(
         "animate__animated animate__backInDown animate__slow"
       );
       $("#photo_10").addClass(
         "animate__animated animate__backInDown animate__slow"
       );
       $("#photo_11").addClass(
         "animate__animated animate__backInDown animate__slow"
       );
       $("#photo_12").addClass(
         "animate__animated animate__backInUp animate__slow"
       );

       $("#photo_13").addClass(
         "animate__animated animate__backInUp animate__slow"
       );
       $("#photo_14").addClass(
         "animate__animated animate__backInUp animate__slow"
       );
       $("#photo_15").addClass(
         "animate__animated animate__backInUp animate__slow"
       );
       $("#photo_16").addClass(
         "animate__animated animate__backInUp animate__slow"
       );
    } else {
      $("#photo_1").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#photo_2").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#photo_3").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#photo_4").removeClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#photo_5").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_6").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_7").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_8").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_9").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#photo_10").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#photo_11").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#photo_12").removeClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#photo_13").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_14").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_15").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#photo_16").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
    }
    // photography end
    // video editing
    if (positiontop > 4320 && positiontop < 4600) {
      $("#video_1").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#video_2").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#video_3").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#video_4").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#video_5").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#video_6").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
    } else {
      $("#video_1").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#video_2").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#video_3").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#video_4").removeClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#video_5").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#video_6").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
    }
    // video editing end
    // counter
    if (positiontop > 4830 && positiontop < 5060) {
      $("#ex_counter_1").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#ex_counter_2").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
      $("#ex_counter_3").addClass(
        "animate__animated animate__backInDown animate__slow"
      );
      $("#ex_counter_4").addClass(
        "animate__animated animate__backInUp animate__slow"
      );
    } else {
      $("#ex_counter_1").removeClass(
        "animate__animated animate__backInDown animate__slow"
      );

      $("#ex_counter_2").removeClass(
        " animate__animated animate__backInUp animate__slow"
      );
      $("#ex_counter_3").removeClass(
        " animate__animated animate__backInDown animate__slow"
      );
      $("#ex_counter_4").removeClass(
        "animate__animated animate__backInUp animate__slow"
      );
    }
    // counter end
    // contact
    if (positiontop > 5300 && positiontop < 5460) {
      $("#contact").addClass(
        "animate__animated animate__zoomInDown animate__slow"
      );
    } else {
      $("#contact").removeClass(
        "animate__animated animate__zoomInDown animate__slow"
      );
    }
  });

  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
})(jQuery);
