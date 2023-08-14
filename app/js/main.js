$(function () {
    // icon search
    $('#search').click(function() {
        $('.menu-item').addClass('hide-item');
        $('.header__search-form').addClass('active');
        $('.close').addClass('active');
        $('#search').hide();
    })
    $('.close').click(function() {
        $('.menu-item').removeClass('hide-item');
        $('.header__search-form').removeClass('active');
        $('.close').removeClass('active');
        $('.close').removeClass('active');
        $('#search').show();
    })

    // Sticky scroll header  // 

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header-top__inner");
        header.classList.toggle('sticky', this.window.scrollY > 0)
    });

    // Slider //

    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        sliderToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    // Collections //

    $('.collections__inner').slick({
        dots: false,
        arrows: true,
        sliderToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });

    // Load more // 

    $('#loadMore').click(function () {
        $('#boxs .box:hidden').slice(0, 4).slideDown()
        if (($('#boxs .box:hidden')).length == 0)   {
            $('#loadMore').fadeOut('slow')
        }
    });

    $('#newItemsloadMore').click(function () {
        $('#newBoxs .newbox:hidden').slice(0, 4).slideDown()
        if (($('#newBoxs .newbox:hidden')).length == 0)   {
            $('#newItemsloadMore').fadeOut('slow')
        }
    });

    // Cursor //

    var cursor = $('.cursor'), 
        follower = $('.cursor-follower');

    var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posY) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower,  {
                    css: {
                        left: posX - 20,
                        top: posY - 20
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX - 65,
                        top: mouseY - 65
                    }
                });
            }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    })

    $('.js-slider').on("mouseenter", function () {
        cursor.addClass('active');
        follower.addClass('active');
    });

    $('.js-slider').on("mouseleave", function () {
        cursor.removeClass('active');
        follower.removeClass('active');
    });

    $('.js-slider-btn').on("mouseenter", function () {
        cursor.addClass('hoverBtn');
    });

    $('.js-slider-btn').on("mouseleave", function () {
        cursor.removeClass('hoverBtn');
    });

});
