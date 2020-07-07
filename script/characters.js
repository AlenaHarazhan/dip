/*window.addEventListener("load", function () {
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
					if (x.style.left !== "-75px") {
						TweenLite.to(x, 0.5, {
								left: "-75px"
							}),
							img.style.cssText = "transform: rotate(45deg)";
					} else {
						TweenLite.to(x, 0.5, {
								left: "-550px"
							}),
							img.style.cssText = "transform: rotate(225deg)";
					}
					break;
			}
		}
	}



}, false);*/

/*window.addEventListener("load", function () {

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
};
}, false);*/
