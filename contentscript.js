height_ratio=.8
width_ratio=.3
orig_height=1483
orig_width=1024

jQuery(document).ready(function($) {
    $("img").each(function() {
    	var randomnumber=Math.floor(Math.random()*10);
    	if(randomnumber<=3 &&
    	   $(this).attr('src')!=chrome.extension.getURL("mckayla.png") &&
    	   $(this)!=undefined &&
    	   $(this).attr('src')!=undefined &&
    	   $(this).height() >= 50 &&
    	   $(this).is(":visible")) {
    	   	
 		   console.log($(this).attr('src'))
    	   var mckayla=document.createElement("img")
    	   mckayla.src=chrome.extension.getURL("mckayla.png")
    	   mckayla.style.position="absolute"

    	   if($(this).height() <= $(this).width())
    	   {
	    	   mckayla.height=$(this).height()*height_ratio
	    	   mckayla.style.left=($(this).offset().left+$(this).outerWidth() - orig_width*mckayla.height/orig_height)+"px"
	    	   mckayla.style.top=($(this).offset().top+$(this).outerHeight() - mckayla.height)+"px"
	       }
	       else
	       {
	       	   mckayla.width=$(this).width()*width_ratio
	    	   mckayla.style.left=($(this).offset().left+$(this).outerWidth() - mckayla.width)+"px"
	    	   mckayla.style.top=($(this).offset().top+$(this).outerHeight() - orig_height*mckayla.width/orig_width)+"px"
	       }
    	   mckayla.style.zIndex=$(this).css("z-index")+1;
    	   document.body.appendChild(mckayla)
    	}
    })
});

// $("img").each(function() {
//         var randomnumber=Math.floor(Math.random()*10);
//     	if(randomnumber<=3 &&
//     	   $(this).attr('src')!=chrome.extension.getURL("mckayla.png") &&
//     	   $(this)!=undefined &&
//     	   $(this).attr('src')!=undefined &&
//     	   $(this).height() >= 50 &&
//     	   $(this).is(":visible")) {
    	   	
//  		   console.log($(this).attr('src'))
//     	   var mckayla=document.createElement("img")
//     	   mckayla.src=chrome.extension.getURL("mckayla.png")
//     	   mckayla.style.position="absolute"
//     	   mckayla.height=$(this).height()*height_ratio
//     	   mckayla.style.left=($(this).offset().left+$(this).outerWidth() - 1024*mckayla.height/1483)+"px"
//     	   mckayla.style.top=($(this).offset().top+$(this).outerHeight() - mckayla.height)+"px"
//     	   mckayla.style.zIndex=$(this).css("z-index")+1;
//     	   document.body.appendChild(mckayla)
//     	}
// });

