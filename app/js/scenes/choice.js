var Choice = function (options) {
	var DISPLACE_AMOUNT = 0.2, // 0.12 is a good amount, but making it higher for demo
		PAN_AMOUNT = 0.05,
		VERTICAL_DISPLACE = 0.3,
		TRANSITION_TIME = 0.75,

		totalOffset = 2 * (0.03 + PAN_AMOUNT + DISPLACE_AMOUNT),

		seriously,
		canvas,

		//seriously nodes
		saturation,
		displace,
		reformatBackground,
		scale,
		target,

		resizables = [],

		//state variables
		props = {
			mapScale: [0, 0]
		},
		isMuted = false,

		audio;


	$("#choice .changeFill").on('mouseenter', function(){
		var n = $(this).data('n');
		$("#choice .text").addClass("choice"+n);
	}).on('mouseleave', function(){
		var n = $(this).data('n');
		$("#choice .text").removeClass("choice"+n);
	}).on('click', function(){
		var scene = $(this).data('scene');
		addScene(scene);
		scrolling.goNext();
	});

	

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		props.mapScale[0] = -DISPLACE_AMOUNT * 2 * (x / window.innerWidth - 0.5);
		props.mapScale[1] = VERTICAL_DISPLACE * (DISPLACE_AMOUNT * 2 * (y / window.innerHeight - 0.5));

		displace.mapScale = props.mapScale;
	}

	seriously = new Seriously();

	canvas = document.createElement('canvas');
	options.container.appendChild(canvas);
	target = seriously.target(canvas);
	resizables.push(target);

	reformatBackground = seriously.transform('reformat');
	reformatBackground.source = '#title-image';
	reformatBackground.mode = 'cover';
	resizables.push(reformatBackground);

	//todo: remove saturation effect. do it in photoshop instead
	saturation = seriously.effect('hue-saturation');
	saturation.source = reformatBackground;
	saturation.hue = 0;
	saturation.saturation = 0.3;

	//todo: set up displacement node
	reformatDepth = seriously.transform('reformat');
	reformatDepth.source = '#title-depth';
	reformatDepth.mode = 'cover';
	resizables.push(reformatDepth);

	displace = seriously.effect('displacement');
	displace.source = saturation;
	displace.map = reformatDepth;
	displace.mapScale = [0, 0];
	displace.offset = 1.03 + PAN_AMOUNT;

	scale = seriously.transform('2d');
	scale.source = displace;
	scale.scale(1 + totalOffset);

	target.source = scale;

	audio = new AudioLoop('audio/ccTitleAudio.mp3');

	return {
		start: function () {

			scrolling.slides = ['intro', 'choice'];
			//todo - do not hardcode ids

			window.addEventListener('mousemove', mouseMove, false);
			audio.load();
			if (!isMuted) {
				audio.gain(0.5, TRANSITION_TIME);
			}
		},
		fadeOut: function () {
			audio.gain(0, TRANSITION_TIME);
		},
		muted: function (muted) {
			isMuted = !!muted;
			if (this.active()) {
				audio.gain(isMuted ? 0 : 0.5);
			}
		},
		stop: function () {
			window.removeEventListener('mousemove', mouseMove, false);
			audio.gain(0);
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