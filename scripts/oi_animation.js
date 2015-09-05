$(document).ready(function() {
	console.log("document ready");

	$("#scenes .scene").css("display:none");

	$("#btnSceneNext").click(function(){
		refreshScene();
	});

	console.log('kita1');
	console.log('kita2');
	/*
*/
});

function refreshScene(){
	console.log('kita');
	var selecter = "#scenes .scene:eq(0)";
//	var selecter = "#scenes .scene:eq("+currentSceneId+")";
	$(selecter).css("display:block");
}
/*
*/
var currentSceneId = 0;


