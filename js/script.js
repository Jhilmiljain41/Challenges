
$(document).ready(function() {
    $(".nav li a").on('click', function(e) {
        e.preventDefault()
        var page = $(this).data('page');
        $("#pages .page:not('hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#pages .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
        $(this).removeClass('hide');
    });
});

var items = $(".past-card .card-box");
    var numItems = items.length;
    var perPage = 1;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber , evt) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });