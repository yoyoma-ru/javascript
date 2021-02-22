$(function(){
	var imageArea = $("#imageArea");
	var naviArea = $("#naviArea");

	// スライドショー表示エリアとサムネイル画像表示エリアの両方に画像をロード
	for(var i=1; i<=5; i++){
		imageArea.append("<img src='images/list" + i + ".jpg'>");
		naviArea.append("<img src='images/list"+ i + ".jpg'>");
	}

	// サムネイル画像をクリック
	$("#naviArea img").on("click", moveImageArea);
});
function moveImageArea(){
	var imageArea = $("#imageArea");
	var src = $(this).attr("src");
	// スライドショー表示エリア内で選択したサムネイルと同じ位置の表示位置を取得
	// position は親要素に対する要素の相対位置を取得するメソッド
	// 表示されているleftが0pxー200だから表示したい画像のleftを0pxにするために＊-1
	var targetPosition = imageArea.find(
		"img[src='"+ src +"']").position().left*-1;
	imageArea.animate({"left": targetPosition}, 500);
}