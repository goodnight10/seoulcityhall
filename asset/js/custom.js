
    $(function(){

        
        var swiper = new Swiper(".swiper.main1", {
            loop:true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                allowTouchMove : false,
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
        var swiper = new Swiper(".swiper.main2", {
            loop:true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                allowTouchMove : false,
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
        // 슬라이드버튼 형제는 display:none;처리




      var swiper = new Swiper(".banner-slide", {
        slidesPerView:3,
        loop:true,
        allowTouchMove :false,
        spaceBetween:40,
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

    $('.main-news').click(function(e){
      e.preventDefault();
      if ($('.slide.slide02').hasClass('active')) {
        $('.slide.slide02').removeClass('active')
        $('.slide.slide01').addClass('active')
      } 
    })

    $('.citizen').click(function(e){
      e.preventDefault();
      if ($('.slide.slide01').hasClass('active')) {
        $('.slide.slide01').removeClass('active')
        $('.slide.slide02').addClass('active')
      } 
    })

    $('.btn-stop').click(function(e){
      e.preventDefault();
      $('.btn-start').addClass('active');
      $('.btn-stop').removeClass('active');
      swiper.autoplay.stop();
    })

    $('.btn-start').click(function(e){
      e.preventDefault();
      $('.btn-stop').addClass('active');
      $('.btn-start').removeClass('active');
      swiper.autoplay.start();
    })

    // $('.btn-related').click(function(e){
    //   e.preventDefault();
    //   $('.sub-list').toggleClass('active')
    //   // $(this).next('ul').stop().slideUp();
    //   $(this).siblings().stop().slideToggle();
    // })
    
    $('.btn-related').click(function(e){
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).next('ul').slideUp()
      } else {
        $(this).addClass('active')
        $(this).next('ul').stop().slideDown()
        $(this).siblings('.sub-list').removeClass('active');
      }

      

      // $(this).addClass('active').siblings().removeClass('active');
    })




        

            $(window).scroll(function(){
                curr=$(window).scrollTop();
                target=$('.header-bottom').offset().top;

                if(curr >= target){
                    $('.upper').addClass('active')
                }else{ 
                    $('.upper').removeClass('active')
                }
            })

            
        
    })
