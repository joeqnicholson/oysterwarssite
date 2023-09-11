window.onload = function()
{
	var layers = [];
	var banner = document.querySelectorAll(".banner")[0];

	// create layer data
	{
		var layerElements = document.querySelectorAll(".layer");
		for (var i = 0; i < layerElements.length; i ++)
		{
			layers.push(
			{
				element: layerElements[i],
				scroll: layerElements[i].getAttribute("data-scroll"),
				offset: layerElements[i].getAttribute("data-yoffset")
			});
		}
		layerElements = null;
	}

	// update a speicifc layer offset
	function updateLayerOffset(scroll, layer)
	{
        var offset = -((scroll * layer.scroll) - layer.offset * (banner.clientHeight / 3680));
		layer.element.style.transform = "translate3d(0, " + offset + "px, 0)";
	}

	function updateScrollValue()
	{
        var scroll = window.scrollY;
		for (var i = 0; i < layers.length; i ++)
				updateLayerOffset(scroll, layers[i]);
	}

	
    document.addEventListener("scroll", updateScrollValue);
    window.addEventListener("resize", updateScrollValue);
    updateScrollValue();
}

// handle video
function handleVideo()
{
	var vidHolder = document.getElementsByClassName("video-holder");
	for (var i = 0; i < vidHolder.length; i ++)
	{		
		if  (vidHolder[i] != undefined)
		{
			var iframe = vidHolder[i].getElementsByTagName("iframe")[0];
			var resolution = parseInt(vidHolder[i].getAttribute("data-resolution-height")) / parseInt(vidHolder[i].getAttribute("data-resolution-width"));

			if (iframe != undefined)
			{
				iframe.style.width = vidHolder[i].offsetWidth + "px";
				iframe.style.height = vidHolder[i].style.height = (vidHolder[i].offsetWidth * resolution) + "px"; 
			}
			lastVideoWidth = vidHolder[i].offsetWidth;
		}
	}
}

// on-resize
window.addEventListener("resize", handleVideo);
handleVideo();