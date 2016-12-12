/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {

    $('header nav button').click(function () {
        $(this).toggleClass('on');
        $('header .navbar-nav').toggleClass('actif');
    });

    $('.single-item').slick({
        variableHeight: true,
        speed: 300,
        dots: true,
    });

    $('#edit-field-evaluation').addClass('rating');
    var i;

    console.log('test0');
    for (i=1; i <= 10; i++) {
        console.log('test1');
        if( i % 2 == 0) {
            console.log('test2');
            $('.form-item-field-evaluation label').addClass('full');
        } else {
            console.log('test2.1');
            $('.form-item-field-evaluation label').addClass('half');
        }
    }
})(jQuery);
