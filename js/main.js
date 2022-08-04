
//アコーディオン
$(function () {
  $(".accordion-item:first-of-type .accordion-content").css("display", "block");
  $(".accordion-item:first-of-type .js-accordion-title").addClass("open");
  $(".js-accordion-title").on("click", function () {
    $(this).next().slideToggle(300);
  });
});


//スライダー
$(function () {
  $(".slider").slick({
    autoplay: false,
    centerMode: true,
    centerPadding: "10%",
    prevArrow: '<img src="/assets/img/slide_arrow-l.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/img/slide_arrow-r.png" class="slide-arrow next-arrow">',
  });
});

//モーダル生徒の声
MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
});



//モーダル資料請求
$(window).scroll(function () {
  let nowscroll = $(window).scrollTop();
  if (nowscroll >= 700) {
    if (!localStorage.hasOwnProperty('modal')) {
      $('.modaal').click();
      localStorage.setItem('modal', 'opend');
    }
  }
});

$(function () {
  const listItems = $(".js-accordion .notification__main__content").length;
  $(".js-accordion").each(function () {
    let num = 3,
      closeNum = num - 1;
    $(this).find(".js-btn-more").show();
    $(this).find(".js-btn-close").hide();
    $(this)
      .find(".notification__main__content:not(:lt(" + num + "))")
      .hide();
    $(".js-btn-more").click(function () {
      num += 50;
      $(this)
        .parent()
        .find(".notification__main__content:lt(" + num + ")")
        .slideDown();
      if (listItems <= num) {
        $(".js-btn-more").hide();
      }
    });
  });
});
