$(function(){
	var imageArea = $("#imageArea");
	console.log(imageArea);

	for(var i=1; i<=5; i++){
		imageArea.append("<img src='./images/list"+i+".jpg'>");
	}

	$("#next").on("click", function(){
		if(parseInt(imageArea.css("left")) > -800){
			toDisabled();
			imageArea.animate({
				"left": "-=200px"
			}, "fast", "linear", toEnabled);
		}
	});

	$("#prev").on("click", function(){
		if(parseInt(imageArea.css("left")) < 0){
			toDisabled();
			imageArea.animate({
				"left": "+=200px"
			}, "fast", "linear", toEnabled);
		}
	});
});
function toDisabled(){
	$("#prev, #next").attr("disabled", "disabled");
}
function toEnabled(){
	$("#prev, #next").removeAttr("disabled");
}