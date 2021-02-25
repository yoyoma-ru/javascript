$(function(){
	var photoFrame = $("#photoFrame");
	for(var i=1; i<=5; i++){
		photoFrame.find(".imageArea").append(
			"<img src='images/list" + i + ".jpg'>");
	}
	// setIntervalメソッドで関数を定期実行する
	setInterval(slide, 5000);
});

function slide(){
	$("#photoFrame").find(".imageArea").animate(
		{"left": "-=200px"}, "fast", "linear", next);
}

currentIndex = 1;
function next(){
	var otherIndex = 1 - currentIndex;
	if(parseInt($("#imageArea" + currentIndex).css("left")) == -800){
		$("#imageArea" + otherIndex).css("left", "200px");
	}
	else if(parseInt($("#imageArea" + currentIndex).css("left")) == -1000){
		currentIndex = otherIndex;
	}
}