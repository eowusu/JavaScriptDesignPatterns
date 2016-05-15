$(document).ready(function() {
	$(".imgContain").on("click", "img", function(){
				$("#count span").text(parseInt($("#count span").text()) + 1);
			});
});