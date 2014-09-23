$(function(){




	var random = 1.0;

	$("#byell").css('opacity', random);


	$(window).load(function() { // makes sure the whole site is loaded

			$("#status").delay(1600).fadeOut(); // will first fade out the loading animation

			$("#preloader").delay(1600).fadeOut("slow"); // will fade out the white DIV that covers the website.

	})








	$.getJSON( "js/data.json", function( data ) {

		   //carousel.init();

		var counter = 0;

		var gcolor = "";

		$.each( data, function( key, val ) {

			$("<li/>").appendTo("ul");


			if( val.genre == "Pinky"){

				gcolor = '#FF7272';

				}else if( val.genre == "Giallo"){

				gcolor = '#FFDC59';

			}

			var li = $( "#carousel ul li").eq(counter).css('background-color', gcolor);

			counter++;

			//var film = val.video;



			//film.addClass("watch");

			$( "<h2/>").html( "Title: " + val.movie + "</br>" + "Genre: " + val.genre + "</br>" + "Year: " + val.year + "</br>").appendTo( li );


			$("<a href/>").attr("href", val.video).appendTo( li );
			//var video = val.video;
			$('li > a').addClass("watch");
			//film.val(video);

			$("<img />").attr("src", val.image).appendTo(li);

			

			//var pink = genre.val("Pinky");



	


		});


			var carousel = new Carousel("#carousel");

    		carousel.init();

    		$('body').append($('<div/>', {id:'cover'}));

			window.addEventListener("load", init);

			function init(){


				var hammer_options = { };	

					$('#carousel img').hammer().on("tap", function(event) {

						console.log(event);
						
		   				$(this).fadeOut().siblings('h2, a').clone().appendTo('body').show();

		   				$('body > a').show();

		   				$('body > h2').addClass("eso");

		   				$('#cover').show();	

					
				    });



		   			$('#cover').hammer().on("tap", function(event) {

						console.log(event);
						
		   				$('#cover').hide();

		   				$('.eso').remove();

		   				$('body > a').remove();
						
						$('#carousel img').fadeIn();

						

		    		});







			}

	});




});