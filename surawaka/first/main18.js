var currentIndex = 1;

$(function(){
	var photoFrame = $("#photoFrame");
	console.log(photoFrame);
	for(var i=1; i<=5; i++){
		photoFrame.find(".imageArea").append(
			"<img src='images/list" + i + ".jpg'>");
	}

	$("#next").on("click", function(){
		toDisabled();
		photoFrame.find(".imageArea").animate(
			{"left": "-=200px"}, "fast", "linear", next);
	});

	$("#prev").on("click", function(){
		toDisabled();
		photoFrame.find(".imageArea").animate(
			{"left": "+=200px"}, "fast", "linear", prev);
	});
});

function next(){
	// 隠れている方のimageAreaのインデックスを算出
	var otherIndex = 1-currentIndex;
	console.log(otherIndex);
	if(parseInt($("#imageArea" + currentIndex).css("left")) == -800){
		// 末尾の画像を表示したときの処理
		// 隠れている方のimageAreaのleftプロパティをphotoFrameの右側に設定
		$("#imageArea" + otherIndex).css("left", "200px");
	}
	else if(parseInt($("#imageArea" + currentIndex).css("left")) == -1000){
		// imageAreaが切り替わったタイミングでカレントインデックスを変更
		currentIndex = otherIndex;
	}
	toEnabled();
}

function prev(){
	// 隠れているほうのimageAreaのインデックスを算出
	var otherIndex = 1 - currentIndex;
	if(parseInt($("#imageArea" + currentIndex).css("left")) == 0){
		// 先頭の画像を表示したときの処理
		// 隠れている方のimageAreaのleftプロパティをphotoFrameの左側に設定
		$("#imageArea" + otherIndex).css("left", "-1000px");
	}
	else if(parseInt($("#imageArea" + currentIndex).css("left")) == 200){
		// imageAreaが切り替わったタイミングでカレントインデックスを変更
		currentIndex = otherIndex;
	}
	toEnabled();
}

function toDisabled(){
	$("#prev, #next").attr("disabled", "disabled");
}
function toEnabled(){
	$("#prev, #next").removeAttr("disabled");
}