$(document).ready(function(){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav1").style.background = "white";
        document.getElementById("nav1").style.boxShadow = " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        document.getElementById("toggler").style.color = "#2F363F";
        document.getElementById("nav-link1").style.color = "#2F363F";
        document.getElementById("nav-link2").style.color = "#2F363F";
        document.getElementById("nav-link3").style.color = "#2F363F";
        document.getElementById("nav-link4").style.color = "#2F363F";
        document.getElementById("nav-link5").style.color = "#2F363F";
        document.getElementById("nav-link7").style.color = "#2F363F";
      } 
      else
      {
        document.getElementById("nav1").style.background = "transparent";
        document.getElementById("nav1").style.boxShadow = "none";
         document.getElementById("nav-link1").style.color = "white";
          document.getElementById("toggler").style.color = "#2F363F";
        document.getElementById("nav-link2").style.color = "white";
        document.getElementById("nav-link3").style.color = "white";
        document.getElementById("nav-link4").style.color = "white";
        document.getElementById("nav-link5").style.color = "white";
        document.getElementById("nav-link6").style.color = "white";
        document.getElementById("nav-link7").style.color = "white";
      } 
        window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav1").style.background = "white";
        document.getElementById("nav1").style.boxShadow = " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        document.getElementById("toggler").style.color = "#2F363F";
        document.getElementById("nav-link1").style.color = "#2F363F";
        document.getElementById("nav-link2").style.color = "#2F363F";
        document.getElementById("nav-link3").style.color = "#2F363F";
        document.getElementById("nav-link4").style.color = "#2F363F";
        document.getElementById("nav-link5").style.color = "#2F363F";
         document.getElementById("nav-link6").style.color = "#2F363F";
         document.getElementById("nav-link7").style.color = "#2F363F";
        
      } 
      else
      {
        document.getElementById("nav1").style.background = "transparent";
        document.getElementById("nav1").style.boxShadow = "none";
          document.getElementById("nav-link1").style.color = "white";
          document.getElementById("toggler").style.color = "#2F363F";
        document.getElementById("nav-link2").style.color = "white";
        document.getElementById("nav-link3").style.color = "white";
        document.getElementById("nav-link4").style.color = "white";
        document.getElementById("nav-link5").style.color = "white";
        document.getElementById("nav-link6").style.color = "white";
        document.getElementById("nav-link7").style.color = "white";
      } 
    }

    // Animation on Scroll

    AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});

    hljs.initHighlightingOnLoad();

			$('.hero__scroll').on('click', function(e) {
				$('html, body').animate({
					scrollTop: $(window).height()
				}, 1200);
			});

    });

