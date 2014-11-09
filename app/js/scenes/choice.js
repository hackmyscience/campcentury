var Choice = function (options) {
	var DISPLACE_AMOUNT = 0.15, // 0.12 is a good amount, but making it higher for demo
		PAN_AMOUNT = 0.0,
		VERTICAL_DISPLACE = 0.0,
		//TRANSITION_TIME = 0.75,

		totalOffset = 2 * (0.03 + PAN_AMOUNT + DISPLACE_AMOUNT),

		seriously,
		canvas,

		//seriously nodes
		displace,
		background,
		reformat,
		scale,
		target,

		resizables = [],

		//state variables
		props = {
			mapScale: [0, 0]
		};

		//isMuted = false,
		//audio;

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		props.mapScale[0] = -DISPLACE_AMOUNT * 2 * (x / window.innerWidth - 0.5);
		props.mapScale[1] = VERTICAL_DISPLACE * (DISPLACE_AMOUNT * 2 * (y / window.innerHeight - 0.5));

		displace.mapScale = props.mapScale;
	}

	$("#choice .changeFill").on('mouseenter', function(){
		var n = $(this).data('n');
		$("#choice .text").addClass("choice"+n);
	}).on('mouseleave', function(){
		var n = $(this).data('n');
		$("#choice .text").removeClass("choice"+n);
	}).on('click', function(){
		var scene = $(this).data('scene');
		
		if(scene == 'science'){
			addScene('science');
			addScene('science2');
		}
		
		if(scene == 'military'){
			addScene('military');
			addScene('military2');
		}

		if(scene == 'sociological'){
			addScene('sociological');
			addScene('sociological2');
		}
		addScene('end');
		
		scrolling.goNext();
	});

	
	seriously = new Seriously();

	canvas = document.createElement('canvas');
	options.container.appendChild(canvas);
	target = seriously.target(canvas);
	resizables.push(target);

	background = seriously.source('#choice-image');

	displace = seriously.effect('displacement');
	displace.source = background;
	displace.map = '#choice-depth';
	displace.mapScale = [0, 0];
	displace.offset = 1.03 + PAN_AMOUNT;

	reformat = seriously.transform('reformat');
	reformat.source = displace;
	reformat.mode = 'cover';
	resizables.push(reformat);

	scale = seriously.transform('2d');
	scale.source = reformat;
	scale.scale(1 + totalOffset);

	target.source = scale;

	//no sound effect on this page, at least for now
	//audio = new AudioLoop('audio/ccTitleAudio.mp3');

	window.addEventListener('mousemove', mouseMove, false);
	return {
		start: function () {

			scrolling.slides = ['intro', 'choice'];
			//todo - do not hardcode ids

			/*
			audio.load();
			if (!isMuted) {
				audio.gain(0.5, TRANSITION_TIME);
			}
			*/
		},
		/*
		fadeOut: function () {
			audio.gain(0, TRANSITION_TIME);
		},
		muted: function (muted) {
			isMuted = !!muted;
			if (this.active()) {
				audio.gain(isMuted ? 0 : 0.5);
			}
		},
		*/
		stop: function () {
			//window.removeEventListener('mousemove', mouseMove, false);
			//audio.gain(0);
		},
		resize: function (width, height) {
			resizables.forEach(function (node) {
				node.width = width;
				node.height = height;
			});
		},
		render: function () {
			seriously.render();
		}
	};
};