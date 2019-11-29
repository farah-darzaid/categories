$("document").ready(function() {
	$(".menue").click(function() {
		$(".popup").fadeToggle();
		$(".popup").css("z-index","2");
		$(".menue").css("z-index","0");
	})

	$(".redbtn").click(function() {
		$(".red").fadeIn(2000);
		$(".black").fadeOut(2000);
		$(".green").fadeOut(2000);

	})
	$(".blackbtn").click(function() {
		$(".red").fadeOut(2000);
		$(".black").fadeIn(2000);
		$(".green").fadeOut(2000);

	})
	$(".greenbtn").click(function() {
		$(".red").fadeOut(2000);
		$(".black").fadeOut(2000);
		$(".green").fadeIn(2000);

	})
});