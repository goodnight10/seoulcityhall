
    $(function(){

        
        var swiper = new Swiper(".main-slide", {
            loop:true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        // 슬라이드버튼 형제는 display:none;처리

        



        var swiper = new Swiper(".swiper.bottom-slide", {
        // loop:true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        // autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });

      var appendNumber = 9;
      var prependNumber = 1;




      // $('.bottom-title').click(function(e){
        //         e.preventDefault();
        //         $('.bottomnav-list').stop().slideUp();
        //         $(this).siblings().stop().slideToggle();

        //     })


        $('.bottomnav-tab a').click(function(e){
                e.preventDefault();
                link = $(this).attr('href');
                $(this).addClass('active').siblings().removeClass('active');
                $(link).addClass('active').siblings().removeClass('active');
            })


        

            $(window).scroll(function(){
                curr=$(window).scrollTop();
                target=$('.gnb-top').offset().top;

                if(curr >= target){
                    $('.upper').addClass('active')
                }else{ 
                    $('.upper').removeClass('active')
                }
            })

            
        
    })
