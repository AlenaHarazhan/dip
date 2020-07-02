window.addEventListener("load", function () {
var slide = document.querySelectorAll(".slide");
	
	Array.prototype.forEach.call(slide, F);

	function F(x, i, arr) {
		var img = document.getElementById("arr_2");
		img.style.cssText = "transform: rotate(225deg)";

		x.style.left = "-550px";

		x.addEventListener("click", funSlide, false);
		function funSlide(e) {
		switch (e.type) {

		case "click":

			var toSlide = x;
				if (x.style.left !== "-75px") {
					TweenLite.to(x, 0.5, {left: "-75px"}),
						img.style.cssText = "transform: rotate(45deg)";
				} else {
					TweenLite.to(x, 0.5, {left: "-550px"}),
						img.style.cssText = "transform: rotate(225deg)";
				}	
			break;
		}
	}
}
	

	
}, false);
