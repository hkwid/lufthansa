var currentSceneId = 0;

function refreshScene(){

	hiddenAll();

	if(currentSceneId>7) currentSceneId = 0;
	var selecter = "#scene0"+currentSceneId;
	console.log(selecter);
//	var selecter = "#scenes .scene:eq("+currentSceneId+")";
	$(selecter).show();
}

function hiddenAll(){
	$("#scene00").hide();
	$("#scene01").hide();
	$("#scene02").hide();
	$("#scene03").hide();
	$("#scene04").hide();
	$("#scene05").hide();
	$("#scene06").hide();
	$("#scene07").hide();
	$("#scene08").hide();
}


$(document).ready(function() {
	console.log("document ready");

	refreshScene();

	$("#btnSceneNext").click(function(){
		console.log("click");
		currentSceneId++;
		refreshScene();
	});


});


