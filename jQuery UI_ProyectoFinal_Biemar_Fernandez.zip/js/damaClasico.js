$(document).ready(function() {
	
	$(document).tooltip();
	$("#fichas1").draggable();
	$("#fichas2").draggable();
	$("#fichas3").draggable();
	$("#fichas4").draggable();
	$("#fichas5").draggable();
	$("#fichas6").draggable();
	$("#fichas7").draggable();
	$("#fichas8").draggable();
	$("#fichas9").draggable();
	$("#fichas10").draggable();
	$("#fichas11").draggable();
	$("#fichas12").draggable();
	$("#fichas13").draggable();
	$("#fichas14").draggable();
	$("#fichas15").draggable();
	$("#fichas16").draggable();
	$("#fichas17").draggable();
	$("#fichas18").draggable();
	$("#fichas19").draggable();
	$("#fichas20").draggable();
	$("#fichas21").draggable();
	$("#fichas22").draggable();
	$("#fichas23").draggable();
	$("#fichas24").draggable();

	$("#ficha").on("drag", function(evento, ui) {
		$(this).css('cursor', 'move');
	});

	$("#ficha").on("dragstop", function(evento, ui) {
		$(this).css('cursor','crosshair');
	});

	$("#ficha").on("dragstart", function(evento, ui) {
			$(this).css('cursor','default');
		});


});