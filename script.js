$(document).ready(function () {
    // Menu mobile
    $('.menu-toggle').click(function () {
        $('nav ul').toggleClass('active');
        $(this).toggleClass('active');
    });

    // --- Lyrics Modal System ---
    
    // Open Modal
    $('.track-card').click(function () {
        const trackId = $(this).data('track');
        const $data = $('#data-' + trackId);
        
        const title = $data.find('.title').text();
        const enLyrics = $data.find('.en').text();
        const ptLyrics = $data.find('.pt').text();

        // Populate Modal
        $('.modal-track-title').text(title);
        $('.modal-lyrics-body').text(enLyrics).attr('data-en', enLyrics).attr('data-pt', ptLyrics);
        
        // Reset Toggle
        $('.modal-lyrics-toggle .lang-btn').removeClass('active');
        $('.modal-lyrics-toggle .lang-btn[data-lang="en"]').addClass('active');

        // Show Modal
        $('#lyrics-modal').fadeIn(400);
        $('body').css('overflow', 'hidden'); // Prevent scroll
    });

    // Close Modal
    $('.close-modal, #lyrics-modal').click(function (e) {
        if (e.target !== this && !$(e.target).hasClass('bi-x')) return;
        $('#lyrics-modal').fadeOut(400);
        $('body').css('overflow', 'auto');
    });

    // Language Toggle inside Modal
    $('.modal-lyrics-toggle .lang-btn').click(function () {
        const lang = $(this).data('lang');
        const $body = $('.modal-lyrics-body');
        
        $('.modal-lyrics-toggle .lang-btn').removeClass('active');
        $(this).addClass('active');

        $body.fadeOut(200, function() {
            $body.text($body.attr('data-' + lang)).fadeIn(200);
        });
    });

    // --- End Lyrics Modal System ---

    // Scroll Suave
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 80
            }, 800);
            
            // Fecha menu mobile se estiver aberto
            $('nav ul').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });

    // Fade-in no scroll
    $(window).scroll(function() {
        $('.fade-up').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('visible');
            }
        });
    });

    // Trigger inicial
    $(window).trigger('scroll');
});
