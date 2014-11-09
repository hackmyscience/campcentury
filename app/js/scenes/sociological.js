var Sociological = function (options) {
	var DISPLACE_AMOUNT = 0.1, // 0.12 is a good amount, but making it higher for demo
		PAN_AMOUNT = 0,
		VERTICAL_DISPLACE = 0.1,
		TRANSITION_TIME = 0.75,

		totalOffset = 2 * (0.03 + PAN_AMOUNT + DISPLACE_AMOUNT),

		seriously,
		canvas,

		//seriously nodes
		displace,
		reformat,
		scale,
		target,

		resizables = [],

		//state variables
		props = {
			mapScale: [0, 0]
		},
		isMuted = false,
		audio,
		lateralText = $("#sociological .lateral-text"),
		lateralMenu = $("#sociological .lateral-menu");

	

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		props.mapScale[0] = -DISPLACE_AMOUNT * 2 * (x / window.innerWidth - 0.5);
		props.mapScale[1] = VERTICAL_DISPLACE * (DISPLACE_AMOUNT * 2 * (y / window.innerHeight - 0.5));

		displace.mapScale = props.mapScale;

		var deg = Math.min(90, Math.max(0, normalize(x, 250, (window.innerWidth/2), 0, 90)));
		var opacity = Math.min(1, Math.max(0, normalize(x, 250, (window.innerWidth/2), 1, 0)));
		lateralText.css({
			'transform': 'rotate3d(0, 1, 0, '+deg+'deg) translateY(-50%)',
			'opacity': opacity
		});

		deg = Math.min(90, Math.max(0, normalize(x, (window.innerWidth/2), window.innerWidth, 90, 0)));
		opacity = Math.min(1, Math.max(0, normalize(x, (window.innerWidth/2), window.innerWidth, 0, 1)));
		lateralMenu.css({
			'transform': 'rotate3d(0, 1, 0, '+(-deg)+'deg) translateY(-50%)',
			'opacity': opacity
		});
	}

	seriously = new Seriously();

	canvas = document.createElement('canvas');
	options.container.appendChild(canvas);
	target = seriously.target(canvas);
	resizables.push(target);

	displace = seriously.effect('displacement');
	displace.source = '#sociological-image';
	displace.map = '#sociological-depth';
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

	audio = new AudioLoop('audio/ccChaptersRightSfx.mp3');

	return {
		start: function () {
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
			audio.gain(isMuted ? 0 : 0.5);
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