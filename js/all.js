$(document).ready(function () {
    // 切換愛心
  $(".fa-heart").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("fa-solid");
  });
    // 漢堡選單開啟
  $(".ham").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("menu-show");
  });

  $(".ham").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  // go top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
});
