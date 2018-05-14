 

/* this function hides the first video and plays the second one when you click the next-bt */



  $(function() {

        $(".next-bt").on("click",function() {
            
            $(".within").hide()

            $(".loseyourself").show()

        });
    }); 

  /* this hides lose yourself and plays stronger video */


  $(function() {

  		$(".nexttwo-bt").on("click", function() {

  			$(".loseyourself").hide()

  			$(".stronger").show()
  		});
  });






 $(function() {

        $(".next-bt").on("click",function() {
            
            $(".mute-bt").hide()
            $(".play-bt").hide()
            $(".pause-bt").hide()
            $(".next-bt").hide()

            $(".mutetwo-bt").show()
            $(".playtwo-bt").show()
            $(".pausetwo-bt").show()
            $(".nexttwo-bt").show()

        });
    }); 

 $(function() {

 		$(".nexttwo-bt").on("click", function() {

 			$(".mutetwo-bt").hide()
 			$(".playtwo-bt").hide()
 			$(".pausetwo-bt").hide()
 			$(".nexttwo-bt").hide()
 			$(".logo").hide()

 			$(".mutethree-bt").show()
 			$(".playthree-bt").show()
 			$(".pausethree-bt").show()
 			$(".nextthree-bt").show()
 			$(".colorfullogo").show()
 			
 	   });
    }); 

  $(function() {

 		$(".nextthree-bt").on("click", function() {

 			$(".mutethree-bt").hide()
 			$(".playthree-bt").hide()
 			$(".pausethree-bt").hide()
 			$(".nextthree-bt").hide()
 			$(".stronger").hide()
 			$(".logo").hide()

 			$(".mutefour-bt").show()
 			$(".playfour-bt").show()
 			$(".pausefour-bt").show()
 			$(".nextfour-bt").show()
 			$(".colorfullogo").show()
 			$(".aboutus").show()
 			
 	   });
    });
 


 $(function() {

 		$(".nextfour-bt").on("click", function() {

 			$(".mutefour-bt").hide()
 			$(".playfour-bt").hide()
 			$(".pausefour-bt").hide()
 			$(".nextfour-bt").hide()
 			$(".aboutus").hide()
 			$(".logo").hide()
 			$(".colorfullogo").hide()

 			$(".mutefive-bt").show()
 			$(".playfive-bt").show()
 			$(".pausefive-bt").show()
 			$(".stopfive-bt").show()
 			$(".tronlogo").show()
 			$(".tron").show()
 			
 	   });
    });

/* $(".within").on("click",function() {

	$(this).prop('muted', !$(this).prop('muted'));
}); */

								

										/* 1 MUTE PLAY STOP WITHIN 1 */ 


									

									$(document).ready(function(){
									var video1 = document.getElementById("within");
									video1.currentTime = 0;
									$(".mute-bt").click(function(){
										 if($(this).hasClass("stop"))
										 {
											 var within = document.getElementById("within");
											 $("#within").prop('muted', false);
											 $(this).removeClass("stop");
										 }
										 else{
											 var within = document.getElementById("within");
											 $("#within").prop('muted', true);
											 $(this).addClass("stop");
										 }
                                     });
									 
                                     $(".play-bt").click(function(){
                                         $(".play-bt").hide();
										 $(".pause-bt").show();
                                         var within = document.getElementById("within");
										 if($(".stop-bt").hasClass("active")){
											 within.currentTime = 0;
										 }
                                         within.play();                                         
                                     });
									 $(".pause-bt").click(function(){
                                         $(".play-bt").show();
										 $(".pause-bt").hide();
										 $(".pause-bt").addClass("active");
										 $(".stop-bt").removeClass("active");
                                         var within = document.getElementById("within");
                                         within.pause();                                         
                                     });
									 $(".stop-bt").click(function(){
                                         $(".play-bt").show();
										 $(".pause-bt").hide();
										 $(".pause-bt").removeClass("active");
										 $(".stop-bt").addClass("active");
                                         var within = document.getElementById("within");
										 within.currentTime = 0;
                                         within.pause();                                         
                                     });

                                     $(".next-bt").click(function() {
                                     	$("within").hide();
                                     	$("loseyourself").show();
                                     	var loseyourself = document.getElementById("loseyourself");
                                     	within.pause
                                     	$("#within").prop('muted', true);

                                     });
								});	



									 /* 2 MUTE PLAY LOSE YOURSELF TO DANCE 2 */ 

									$(document).ready(function(){
									var video2 = document.getElementById("loseyourself");
									video2.currentTime = 0;
									$(".mutetwo-bt").click(function(){
										 if($(this).hasClass("stop"))
										 {
											 var loseyourself = document.getElementById("loseyourself");
											 $("#loseyourself").prop('muted', false);
											 $(this).removeClass("stop");
										 }
										 else{
											 var loseyourself = document.getElementById("loseyourself");
											 $("#loseyourself").prop('muted', true);
											 $(this).addClass("stop");
										 }
                                     });
									 
                                     $(".playtwo-bt").click(function(){
                                         $(".playtwo-bt").hide();
										 $(".pausetwo-bt").show();
                                         var loseyourself = document.getElementById("loseyourself");
										 if($(".stoptwo-bt").hasClass("active")){
											 loseyourself.currentTime = 0;
										 }
                                         loseyourself.play();                                         
                                     });
									 $(".pausetwo-bt").click(function(){
                                         $(".playtwo-bt").show();
										 $(".pausetwo-bt").hide();
										 $(".pausetwo-bt").addClass("active");
										 $(".stoptwo-bt").removeClass("active");
                                         var loseyourself = document.getElementById("loseyourself");
                                         loseyourself.pause();                                         
                                     });
									 $(".stoptwo-bt").click(function(){
                                         $(".playtwo-bt").show();
										 $(".pausetwo-bt").hide();
										 $(".pausetwo-bt").removeClass("active");
										 $(".stoptwo-bt").addClass("active");
                                         var loseyourself = document.getElementById("loseyourself");
										 loseyourself.currentTime = 0;
                                         loseyourself.pause();                                         
                                     });

                                     $(".next-bt").click(function() {
                                     	$("within").hide();
                                     	$("loseyourself").show();
                                     	var loseyourself = document.getElementById("loseyourself");
                                     	within.pause
                                     });
								});	


									/* 3 MUTE PLAY STRONGER 3 */ 

									$(document).ready(function(){
									var video3 = document.getElementById("stronger");
									video3.currentTime = 0;
									$(".mutethree-bt").click(function(){
										 if($(this).hasClass("stop"))
										 {
											 var stronger = document.getElementById("stronger");
											 $("#stronger").prop('muted', false);
											 $(this).removeClass("stop");
										 }
										 else{
											 var stronger = document.getElementById("stronger");
											 $("#stronger").prop('muted', true);
											 $(this).addClass("stop");
										 }
                                     });
									 
                                     $(".playthree-bt").click(function(){
                                         $(".playthree-bt").hide();
										 $(".pausethree-bt").show();
                                         var stronger = document.getElementById("stronger");
										 if($(".stopthree-bt").hasClass("active")){
											 stronger.currentTime = 0;
										 }
                                         stronger.play();                                         
                                     });
									 $(".pausethree-bt").click(function(){
                                         $(".playthree-bt").show();
										 $(".pausethree-bt").hide();
										 $(".pausethree-bt").addClass("active");
										 $(".stopthree-bt").removeClass("active");
                                         var stronger = document.getElementById("stronger");
                                         stronger.pause();                                         
                                     });
									 $(".stopthree-bt").click(function(){
                                         $(".playthree-bt").show();
										 $(".pausethree-bt").hide();
										 $(".pausethree-bt").removeClass("active");
										 $(".stopthree-bt").addClass("active");
                                         var stronger = document.getElementById("stronger");
										 stronger.currentTime = 0;
                                         stronger.pause();                                         
                                     });

                                     $(".nexttwo-bt").click(function() {
                                     	$("loseyourself").hide();
                                     	$("stronger").show();
                                     	var stronger = document.getElementById("stronger");
                                     	loseyourself.pause();
                                     });
								});	


									/* 4 MUTE PLAY STH ABOUT US 4 */ 

									$(document).ready(function(){
									var video4 = document.getElementById("aboutus");
									video4.currentTime = 0;
									$(".mutefour-bt").click(function(){
										 if($(this).hasClass("stop"))
										 {
											 var aboutus = document.getElementById("aboutus");
											 $("#aboutus").prop('muted', false);
											 $(this).removeClass("stop");
										 }
										 else{
											 var aboutus = document.getElementById("aboutus");
											 $("#aboutus").prop('muted', true);
											 $(this).addClass("stop");
										 }
                                     });
									 
                                     $(".playfour-bt").click(function(){
                                         $(".playfour-bt").hide();
										 $(".pausefour-bt").show();
                                         var aboutus = document.getElementById("aboutus");
										 if($(".stopfour-bt").hasClass("active")){
											 aboutus.currentTime = 0;
										 }
                                         aboutus.play();                                         
                                     });
									 $(".pausefour-bt").click(function(){
                                         $(".playfour-bt").show();
										 $(".pausefour-bt").hide();
										 $(".pausefour-bt").addClass("active");
										 $(".stopfour-bt").removeClass("active");
                                         var aboutus = document.getElementById("aboutus");
                                         aboutus.pause();                                         
                                     });
									 $(".stopfour-bt").click(function(){
                                         $(".playfour-bt").show();
										 $(".pausefour-bt").hide();
										 $(".pausefour-bt").removeClass("active");
										 $(".stopfour-bt").addClass("active");
                                         var aboutus = document.getElementById("aboutus");
										 aboutus.currentTime = 0;
                                         aboutus.pause();                                         
                                     });

                                     $(".nextthree-bt").click(function() {
                                     	$("stronger").hide();
                                     	$("aboutus").show();
                                     	var aboutus = document.getElementById("aboutus");
                                     	stronger.pause();
                                     });
								});	


									/* 5 MUTE PLAY TRON 5 */ 

									$(document).ready(function(){
									var video5 = document.getElementById("tron");
									video5.currentTime = 0;
									$(".mutefive-bt").click(function(){
										 if($(this).hasClass("stop"))
										 {
											 var tron = document.getElementById("tron");
											 $("#tron").prop('muted', false);
											 $(this).removeClass("stop");
										 }
										 else{
											 var tron = document.getElementById("tron");
											 $("#tron").prop('muted', true);
											 $(this).addClass("stop");
										 }
                                     });
									 
                                     $(".playfive-bt").click(function(){
                                         $(".playfive-bt").hide();
										 $(".pausefive-bt").show();
                                         var tron = document.getElementById("tron");
										 if($(".stopfive-bt").hasClass("active")){
											 tron.currentTime = 0;
										 }
                                         tron.play();                                         
                                     });
									 $(".pausefive-bt").click(function(){
                                         $(".playfive-bt").show();
										 $(".pausefive-bt").hide();
										 $(".pausefive-bt").addClass("active");
										 $(".stopfive-bt").removeClass("active");
                                         var tron = document.getElementById("tron");
                                         tron.pause();                                         
                                     });
									 $(".stopfive-bt").click(function(){
                                         $(".playfive-bt").show();
										 $(".pausefive-bt").hide();
										 $(".pausefive-bt").removeClass("active");
										 $(".stopfive-bt").addClass("active");
                                         var aboutus = document.getElementById("tron");
										 tron.currentTime = 0;
                                         tron.pause();                                         
                                     });

                                     $(".nextfour-bt").click(function() {
                                     	$("aboutus").hide();
                                     	$("tron").show();
                                     	var tron = document.getElementById("tron");
                                     	aboutus.pause();
                                     	aboutus.stop();
                                     });
								});

									