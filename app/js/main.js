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

});
