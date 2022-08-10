$(function () {

 /**
     * 메인 슬라이드1
     *
     * @version 1.0.0
     * @since 2022-07-10
     * @author jy
     */
  var swiper1 = new Swiper(".swiper.main1", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      allowTouchMove: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

   /**
     * 메인 슬라이드2
     *
     * @version 1.0.0
     * @since 2022-07-10
     * @author jy
     */
  var swiper2 = new Swiper(".swiper.main2", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      allowTouchMove: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
  



   /**
     * 하단 슬라이드3
     *
     * @version 1.0.0
     * @since 2022-07-10
     * @author jy
     */
  var swiper3 = new Swiper(".swiper.banner-slide", {
    slidesPerView: 3,
    loop: true,
    allowTouchMove: false,
    spaceBetween: 40,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }
  });

   /**
     * 슬라이드1,2클릭시 바꾸기
     *
     * @version 1.0.0
     * @since 2022-07-12
     * @author jy
     */
  $('.main-news').click(function (e) {
    e.preventDefault();
    if ($('.slide.slide02').hasClass('active')) {
      $('.slide.slide02').removeClass('active')
      $('.slide.slide01').addClass('active')
    }
  })

  $('.citizen').click(function (e) {
    e.preventDefault();
    if ($('.slide.slide01').hasClass('active')) {
      $('.slide.slide01').removeClass('active')
      $('.slide.slide02').addClass('active')
    }
  })

  /**
     * 슬라이드1 정지, 재생버튼
     *
     * @version 1.0.0
     * @since 2022-07-13
     * @author jy
     */

  $('.main1 .btn-stop').click(function (e) {
    e.preventDefault();
    swiper1.autoplay.stop();
    $('.main1 .btn-start').addClass('active');
    $('.main1 .btn-stop').removeClass('active');
  })

  $('.main1 .btn-start').click(function (e) {
    e.preventDefault();
    swiper1.autoplay.start();
    $('.main1 .btn-stop').addClass('active');
    $('.main1 .btn-start').removeClass('active');
  })
  /**
       * 슬라이드2 정지, 재생버튼
       *
       * @version 1.0.0
       * @since 2022-07-13
       * @author jy
       */
  $('.main2 .btn-stop').click(function (e) {
    e.preventDefault();
    swiper2.autoplay.stop();
    $('.main2 .btn-start').addClass('active');
    $('.main2 .btn-stop').removeClass('active');
  })
  $('.main2 .btn-start').click(function (e) {
    e.preventDefault();
    swiper2.autoplay.start();
    $('.main2 .btn-stop').addClass('active');
    $('.main2 .btn-start').removeClass('active');
  })

  /**
     * 슬라이드3 정지, 재생버튼
     *
     * @version 1.0.0
     * @since 2022-07-13
     * @author jy
     */
  $('.banner-slide .btn-stop').click(function (e) {
    e.preventDefault();
    swiper3.autoplay.stop();
    $('.banner-slide .btn-start').addClass('active');
    $('.banner-slide .btn-stop').removeClass('active');
  })

  $('.banner-slide .btn-start').click(function (e) {
    e.preventDefault();
    swiper3.autoplay.start();
    $('.banner-slide .btn-stop').addClass('active');
    $('.banner-slide .btn-start').removeClass('active');
  })





  /**
     * 하단메뉴 열림/닫힘
     *
     * @version 1.0.0
     * @since 2022-07-13
     * @author jy
     */
  $('.btn-related').click(function (e) {
    e.preventDefault();
    $(this).next('ul').slideToggle();
    $(this).parent('li').siblings('li').children('ul').slideUp();
    $(this).toggleClass('active').parent('li').siblings('li').children('a').removeClass('active');
  });

  $(document).mouseup(function (e){
    var sub = $('.relaterd-item');
    if(sub.has(e.target).length === 0){
      $('.sub-list').hide();
      $('.btn-related').removeClass('active')
    }
  });







/**
     * upper버튼
     *
     * @version 1.0.0
     * @since 2022-07-12
     * @author jy
     */
//위로 올라가기
 $( '.upper' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 300 );
	return false;
} );

//버튼나타나는 위치
  $(window).scroll(function () {
    curr = $(window).scrollTop();
    target = $('.header-bottom').offset().top;

    if (curr >= target) {
      $('.upper').addClass('active')
    } else {
      $('.upper').removeClass('active')
    }
  })



})
