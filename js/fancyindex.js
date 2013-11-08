function animSlide(slideParam){
  animParam = 1;
  if (animParam==1){
    $(slideParam).hover(function() {
	    $(this).stop().animate({ marginRight: "-20px", marginLeft: "20px", opacity: 0.5 }, 200);
	    },function(){
		$(this).stop().animate({ marginRight: "0px", marginLeft:"0px", opacity: 0.85 }, 300);
	    });
  }
}

$(document).ready(function(){
	animSlide(".o");
	animSlide(".e");
	animSlide(".social-icon-col");
});