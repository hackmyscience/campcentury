var Military = function (options) {
	var TRANSITION_TIME = 0.75,
		FLICKER_MIN = -0.2000,
		FLICKER_MAX = -0.2005,
		MIN_FACTOR = 0.1,
		FLICKER_RATE = 1 / 100,
		FALLOFF_TIME = 1000,

		maxFactor = 1 - MIN_FACTOR,
		flickerRange = FLICKER_MAX - FLICKER_MIN,
		flickerMid = FLICKER_MIN + flickerRange / 2,

		seriously,
		canvas,

		//seriously nodes
		reformat,
		exposure,
		target,

		resizables = [],

		//state variables
		isMuted = false,
		flickerFactor = 0,
		simplex,
		lastRender = 0,

		audio,
		lateralText = $("#military .lateral-text"),
		lateralMenu = $("#military .lateral-menu");

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		//bump flicker scaling
		flickerFactor = Math.min(1, flickerFactor + 0.1);

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

	exposure = seriously.effect('exposure');
	exposure.source = '#military-image';

	reformat = seriously.transform('reformat');
	reformat.source = exposure;
	reformat.mode = 'cover';
	resizables.push(reformat);

	target.source = reformat;

	simplex = new SimplexNoise();

	audio = new AudioLoop('audio/ccExtraFlicker.mp3');

	window.addEventListener('mousemove', mouseMove, false);

	return {
		start: function () {
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
			audio.gain(0);
			seriously.purge();
		},
		resize: function (width, height) {
			resizables.forEach(function (node) {
				node.width = width;
				node.height = height;
			});
		},
		render: function () {
			var now = Date.now(),
				seed = now * FLICKER_RATE;

			if (flickerFactor) {
				flickerFactor = Math.max(0, flickerFactor - (now - lastRender) / FALLOFF_TIME);
			}

			exposure.exposure = flickerMid + (MIN_FACTOR + flickerFactor * maxFactor) * Math.pow(simplex.noise2D(seed, seed), 2);
			seriously.render();
			lastRender = now;
		}
	};
};