$(document).ready(function() {
    const height_ratio = .8;
    const width_ratio = .3;
    const orig_height = 1483;
    const orig_width = 1024;

    $('img').each(function() {
      const randomnumber = Math.floor(Math.random() * 10);
        // If this is a valid image and one of the lucky random 30%
      if(randomnumber <= 3 &&
            $(this).attr('src') != chrome.extension.getURL('mckayla.png') &&
            $(this) != undefined &&
            $(this).attr('src') != undefined &&
            $(this).height() >= 50 &&
            $(this).is(':visible')) {

            const mckayla = document.createElement('img');
            mckayla.src = chrome.extension.getURL('mckayla.png');
            mckayla.style.position = 'absolute';

            // If image is in portrait mode
            if ($(this).height() <= $(this).width()) {
                mckayla.height = $(this).height() * height_ratio;
                mckayla.style.left = ($(this).offset().left + $(this).outerWidth() - orig_width * mckayla.height / orig_height) + 'px';
                mckayla.style.top = ($(this).offset().top + $(this).outerHeight() - mckayla.height) + 'px';
            } else { // landscape
                 mckayla.width = $(this).width() * width_ratio;
                 mckayla.style.left = ($(this).offset().left + $(this).outerWidth() - mckayla.width) + 'px';
                 mckayla.style.top = ($(this).offset().top + $(this).outerHeight() - orig_height * mckayla.width / orig_width) + 'px';
            }

            // Make sure McKayla appears on top of the image
            mckayla.style.zIndex = $(this).css('z-index') + 1;
            document.body.appendChild(mckayla)
        }
    });
});
