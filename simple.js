
function moveBackward()
{
	var scrollLeft = parseInt($('#read').css('width'));
    var props = {'scrollLeft': '-='+ (scrollLeft + 20) +'px'};
    $('#read').animate(props);
}
    
function moveForward()
{
	var scrollLeft = parseInt($('#read').css('width'));
    var props = {'scrollLeft': '+='+ (scrollLeft + 20) +'px'};
    $('#read').animate(props);
}

$(function()
{
	$("#back").click(moveBackward);
	$("#fw").click(moveForward);
})
