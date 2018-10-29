$(document).ready(function () {
    $('.main_btn, .main_btna, .main_nav nav ul li:eq(1), .close').on('click', function () {
        $('.overlay').animate({
            opacity: 'toggle',
        }, 3000);
        
        $('.modal').animate({
            height: 'toggle',
        }, 3000);
    });
});
