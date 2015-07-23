$('img').click(function () {
    var zoomable = $(this);
    var imgURL = $(this).attr('src');
    var zoom = '<div id="zoom"><img src="' + imgURL + '"></div>';
    var zoomURL = $('#zoom').find('img').attr('src');

    if ($('#zoom').length) {
        if (imgURL === zoomURL) {
            $('#zoom').hide(500, function () {
                $('#zoom').detach();
            });
        } else {
            $('#zoom').hide(500, function () {
                $('#zoom').detach();
                zoomable.parent().after(zoom);
                $('#zoom').hide().slideDown(1000);
            });
        }
    } else {
        zoomable.parent().after(zoom);
        $('#zoom').hide().slideDown(1000);
    }
});