$(document).ready(function(){
	addGrids();
	$(".container > div").addClass("grid");

	$("div.grid").hover(function(){
	$(this).addClass("hoveredOn");
	});
});

function addGrids() {
	for(i = 1; i <= 256; i++){
		$(".container").append("<div></div>");
	}
}

