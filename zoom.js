$('img').click(function () {
    var zoomable = $(this);
    var clickedElemHTML = zoomable[0].outerHTML;
    if ($('.zoom').length) {
        var zoomableElemntHTML = $('.zoom').children()[0].outerHTML;
        if (clickedElemHTML === zoomableElemntHTML) {
            $('.zoom').hide(500, function () {
                $('.zoom').remove();
            });
        } else {
            $('.zoom').hide(500, function () {
                $('.zoom').remove();
                zoomable.parent().after('<div class="zoom">' + clickedElemHTML + '</div>').slideDown(400);
            });
        }
    } else {
        zoomable.parent().after('<div class="zoom">' + clickedElemHTML + '</div>').slideDown(400);
    }
});