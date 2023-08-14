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

});
