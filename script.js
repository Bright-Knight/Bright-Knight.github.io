$(".l3").click(function () {
    $('.manga').addClass('aktif');
    $('.series').addClass('aktif');
    $('.card-series').removeClass('aktif');
    $('.l3').addClass('aktif');
    $('.l1').addClass('aktif');
});

$(".l1").click(function () {
    $('.manga').removeClass('aktif');
    $('.series').removeClass('aktif');
    $('.card-manga').removeClass('aktif');
    $('.l3').removeClass('aktif');
    $('.l1').removeClass('aktif');
});


$(window).on('load', function () {
    $('.card-series').each(function (i) {

        setTimeout(function () {
            $('.card-series').eq(i).addClass('aktif');
        }, 300 * (i + 1))
    })

})

$(".l3").click(function () {
    $('.card-manga').each(function (i) {

        setTimeout(function () {
            $('.card-manga').eq(i).addClass('aktif');
        }, 300 * (i + 1))
    })

})

$(".l1").click(function () {
    $('.card-series').each(function (i) {

        setTimeout(function () {
            $('.card-series').eq(i).addClass('aktif');
        }, 300 * (i + 1))
    })

})