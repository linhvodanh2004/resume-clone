(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  var url = window.location.href;
  var queryString = url.split("?")[1];
  switch (queryString) {
    case "old-pwd-error":
      toastr.error("Mật khẩu cũ không đúng", "Lỗi");
      break;
    case "pwd-not-match":
      toastr.error("Mật khẩu mới không trùng khớp", "Lỗi");
      break;
    case "pwd-change-success":
      toastr.success("Đổi mật khẩu thành công", "Thành công");
      break;
    case "edit-success":
      toastr.success("Chỉnh sửa thông tin thành công", "Thành công");
      break;
    case "update-avatar-success":
      toastr.success("Cập nhật ảnh đại diện thành công", "Thành công");
      break;
    case "update-avatar-fail":
      toastr.error("Cập nhật ảnh đại diện thất bại", "Lỗi");
      break;
  }
})(jQuery);
