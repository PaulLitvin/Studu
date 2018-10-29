$(document).ready(function () {
    $('.main_btn, .main_btna, .main_nav nav ul li:eq(1), .close').on('click', function () {
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle',
        }, 3000);
    });
});