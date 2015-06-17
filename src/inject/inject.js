chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Hello. This message was sent from scripts/inject.js");

		var button_begin = '<div id="label_toggle" class="T-I J-J5-Ji adg T-I-awG T-I-ax7 T-I-Js-IF L3" role="button" tabindex="0" aria-label="Hide labels" data-tooltip="Hide labels" style="-webkit-user-select: none;"><span class="adi" aria-hidden="true">&nbsp;</span>';
		var button_end = '</div>';
		var arrow = '<img class="adj T-I-J3" src="images/cleardot.gif" alt="">';
		
		$( '.aki.pp').append( button_begin + arrow + button_end);

		$("#label_toggle").css({'margin-left': 20});

		$( '#label_toggle').click(function() {
  			$( '.ajl.aib.aZ6').toggle();

  			if ( $('#label_toggle img').hasClass('adk') ) {
  				$('#label_toggle img').attr('class', 'adj T-I-J3');
  				$('#label_toggle').attr('aria-label', 'Hide labels');
  				$('#label_toggle').attr('data-tooltip', 'Hide labels');
  			}

  			else {
  				$('#label_toggle img').attr('class', 'adk T-I-J3');
  				$('#label_toggle').attr('aria-label', 'Show labels');
  				$('#label_toggle').attr('data-tooltip', 'Show labels');
  			}

		});

	}
	}, 10);

});