// Constants
var THRESHOLD = .2
    ,MCKAYLA_IMG_URL = chrome.extension.getURL('mckayla.png')
    ,ORIG_HEIGHT = 1483
    ,ORIG_WIDTH = 1024
    ,HEIGHT_RATIO = 0.8
    ,WIDTH_RATIO = 0.3

var McKayla = {
    generate: function(src) {
        var
            width
            ,height
            ,src_img = {
                zIndex: $(src).css('z-index')
                ,width: $(src).outerWidth()
                ,height: $(src).outerHeight()
                // ,width: $(src).width()
                // ,height: $(src).height()
                // ,right: $(src).offset().left + $(src).outerWidth()
                // ,bottom: $(src).offset().top + $(src).outerHeight()
            }

        src_img.right = $(src).offset().left + src_img.width
        src_img.bottom = $(src).offset().top + src_img.height

        console.log(src_img)

        // Calculate McKayla dimensions
        if(src_img.height <= src_img.width) {
            height = HEIGHT_RATIO * src_img.height
            width = ORIG_WIDTH * height/ORIG_HEIGHT
        } else {
            width = WIDTH_RATIO * src_img.width
            height = ORIG_HEIGHT * width/ORIG_WIDTH
        }

        var img = document.createElement('img')
        img.width = width
        img.height = height
        img.src = MCKAYLA_IMG_URL
        img.style.position = 'absolute'
        img.style.left = (src_img.right - width) + 'px'
        img.style.top = (src_img.bottom - height) + 'px'
        img.style['z-index'] = 1 + (src_img.zIndex !== 'auto' ? src_img.zIndex : 0)
        return img;
    }
    ,add: function(src_img, parent) {
        var img = this.generate(src_img)
        $(img).click(function(e) {
            e.preventDefault()
            $(this).hide(250)
        })

        parent = parent || document.body
        parent.appendChild(img)
    }
}

jQuery(document).ready(function($) {
    console.log('Overlaying McKayla...:')

    $('img:visible').each(function() {
        if (Math.random() <= THRESHOLD
                && $(this) != undefined
                && $(this).attr('src') != undefined
                && $(this).attr('src') != MCKAYLA_IMG_URL
                && $(this).height() >= 50) {

            console.log($(this).attr('src'))

            // Create instance of McKayla object and add to document body
            McKayla.add(this)
        }
    })
})