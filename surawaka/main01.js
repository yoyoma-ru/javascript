$(function(){
	$("#sendBtn").on("click", inputCheck);
});
function inputCheck(){
	var errors = [];

	if(!$("input[name='lastname']").val()){
		// !でinputが空のときfalseで返すのをtrueに変換
		errors.push("姓を入力して下さい");
	}
	if(!$("input[name='firstname']").val()){
		errors.push("名を入力して下さい");
	}
	if(!$("input[name='gender']:checked").val()){
		errors.push("性別を選択して下さい");
	}

	if(errors.length > 0){
		$("#errorsArea").html(errors.join("<br>"));
	}
	else{
		$("form[name='frml']").submit();
	}
}