
$(document).ready(function(){
	//When document is finished loading, run addGrids() function.
	addGrids();

	$("div.grid").mouseenter(function(){
		$(this).addClass("hoveredOn");
	});
	$("div.newline").mouseenter(function(){
		$(this).addClass("hoveredOn");
	});
});

//Injects 16x16 grid of divs into HTML tree.
function addGrids(){
	var squareSize = $(".container").width() / 16 ; 
	for(var i = 1; i <= 16; i++){
		for(var j = 1; j <= 16; j++){
		$(".container").append('<div class="grid"></div>');
	}
		$(".container").append('<div class="newline"></div>');
	}
	$(".grid").css("height",squareSize);
	$(".grid").css("width",squareSize);
}

//Clear current grid, prompt user for new specs and
//create new grid. Function and process are identical 
//to initialization, except that user input is accepted and
//factored in instead of a basic 16x16 grid.

function clearGrid(input){
	$(".grid").remove();
	var input = prompt("Choose a height for the new grid.");
	squareSize = $(".container").width() / input;

	for(var i = 1; i <= input; i++){
		for(var j = 1; j <= input; j++){
			$(".container").append('<div class="grid"></div>');
		}
		$(".container").append('<div class="newline"></div>');
	}
	$(".grid").css("height", squareSize);
	$(".grid").css("width", squareSize);

	$("div.grid").mouseenter(function(){
		$(this).addClass("hoveredOn");
	});
	$("div.newline").mouseenter(function(){
		$(this).addClass("hoveredOn");
	});
	
}
