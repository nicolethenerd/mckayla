// Constants
var THRESHOLD = .2
    ,MCKAYLA_IMG_URL = chrome.extension.getURL('mckayla.png')
    ,ORIG_HEIGHT = 1483
    ,ORIG_WIDTH = 1024
    ,HEIGHT_RATIO = .8
    ,WIDTH_RATIO = .3

function McKayla(src_img) { this.src_img = src_img }

McKayla.prototype = {
    generate: function() {
        var src_img = {
                height: $(this.src_img).height()
                ,width: $(this.src_img).width()
                ,right: $(this.src_img).offset().left + $(this.src_img).outerWidth()
                ,bottom: $(this.src_img).offset().top + $(this.src_img).outerHeight()
                ,zIndex: $(this.src_img).css('z-index')
            }
            ,width
            ,height

        // Calculate McKayla dimensions
        if(src_img.height <= src_img.width) {
            height = HEIGHT_RATIO * src_img.height
            width = ORIG_WIDTH * height/ORIG_HEIGHT
        } else {
            width = WIDTH_RATIO * src_img.width
            height = ORIG_HEIGHT * width/ORIG_WIDTH
        }

        this.img = document.createElement('img')
        this.img.width = width
        this.img.height = height
        this.img.src = MCKAYLA_IMG_URL
        this.img.style.position = 'absolute'
        this.img.style.left = src_img.right - width + "px"
        this.img.style.top = src_img.bottom - height + "px"
        this.img.style['z-index'] = 1 + (src_img.zIndex !== 'auto' ? src_img.zIndex : 0)
    }
    ,add: function(parent) {
        // Call generate() if this.img is null
        this.img || this.generate()

        $(this.img).click(function(e) {
            e.preventDefault()
            $(this).hide(250)
        })

        parent = parent || document.body
        parent.appendChild(this.img)
    }
}

jQuery(document).ready(function($) {
    $('img:visible').each(function() {
        if (Math.random() <= THRESHOLD
                && $(this) != undefined
                && $(this).attr('src') != undefined
                && $(this).attr('src') != MCKAYLA_IMG_URL
                && $(this).height() >= 50) {

            console.log("Overlaying McKayla on: " + $(this).attr('src'))

            // Create instance of McKayla object and add to document body
            var mckayla = new McKayla(this)
            mckayla.add()
        }
    })
})