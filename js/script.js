
$(document).ready(function() {
    $(".active-nav li a").on('click', function(e) {
        e.preventDefault()
        var page = $(this).data('page');
        $("#pages .page:not('hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#pages .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});

$(document).ready(function() {
    $(".side-bar span a").on('click', function(e) {
        e.preventDefault()
        var pages = $(this).data('page');
        $("#page-change .pagebar:not('hides')").stop().fadeOut('fast', function() {
            $(this).addClass('hides');
            $('#page-change .pagebar[data-page="'+pages+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});

$(document).ready(function() {
    $(".top-bar li a").on('click', function(e) {
        e.preventDefault()
        var page = $(this).data('page');
        $("#page01 .pages:not('hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#page01 .pages[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});

$(document).ready(function() {
    $(".top-bar02 li a").on('click', function(e) {
        e.preventDefault()
        var page = $(this).data('page');
        $("#page02 .board:not('hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#page02 .board[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
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