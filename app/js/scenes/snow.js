var Snow = function (options) {
	var DISPLACE_AMOUNT = 0.2, // 0.12 is a good amount, but making it higher for demo
		PAN_AMOUNT = 0.05,
		VERTICAL_DISPLACE = 0.3,
		FOG_SCALE = 1 / 2,
		FADE_DURATION = 6000,

		totalOffset = 2 * (0.03 + PAN_AMOUNT + DISPLACE_AMOUNT),

		seriously,
		canvas,

		//seriously nodes
		transfer,
		simplex,
		saturation,
		blend,
		displace,
		target,
		scale,

		reformatBackground,
		reformatDepth,
		reformatNoise,

		resizables = [],

		//state variables
		lastRender = 0,
		revealRemaining = 1,
		start = Date.now() / 1000,
		noiseOffset = [0, 0],
		props = {
			slope: [1, 1, 1, 1],
			intercept: [1, 1, 1, 1],
			mapScale: [0, 0]
		},
		introText = $("#intro .title")[0],
		instructions = $("#intro .instruction"),
		currentInstruction = 0;


	window.setInterval(function(){
		if(currentInstruction >= instructions.length) {
			currentInstruction = 0;
		}

		instructions.css('opacity', 0);
		instructions.eq(currentInstruction).css('opacity', 1);

		currentInstruction++;
	}, 2000);

	$("#intro .scrolldownArea").on('click', function(){
		scrolling.goNext();
	});

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		props.mapScale[0] = -DISPLACE_AMOUNT * 2 * (x / window.innerWidth - 0.5);
		props.mapScale[1] = VERTICAL_DISPLACE * (DISPLACE_AMOUNT * 2 * (y / window.innerHeight - 0.5));

		displace.mapScale = props.mapScale;

		//x, istart, istop, ostart, ostop

		var textX = normalize(window.innerWidth - x, 0, window.innerWidth, -10, 10);

		introText.style.transform = "translate("+(-(window.innerWidth/2) + textX)+"px, "+(-40)+"px)";
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

	//generate "fog" with simplex noise
	simplex = seriously.effect('simplex');
	simplex.octaves = 3;
	simplex.noiseScale = [1, 2.5];
	simplex.black = [0.0, 0.0, 0.0, 1];
	//resizables.push(simplex);

	transfer = seriously.effect('linear-transfer');
	transfer.source = simplex;
	transfer.slope = props.slope;
	transfer.intercept = props.intercept;

	reformatNoise = seriously.transform('reformat');
	reformatNoise.source = transfer;
	resizables.push(reformatNoise);

	//apply fog to image with "screen" blend mode
	blend = seriously.effect('blend');
	blend.top = reformatNoise;
	blend.bottom = scale;
	blend.mode = 'screen';

	target.source = blend; //blend;

	return {
		start: function () {
			window.addEventListener('mousemove', mouseMove, false);
		},
		end: function () {
			window.removeEventListener('mousemove', mouseMove, false);
		},
		resize: function (width, height) {
			resizables.forEach(function (node) {
				node.width = width;
				node.height = height;
			});
			simplex.width = width * FOG_SCALE;
			simplex.height = height * FOG_SCALE;
		},
		render: function () {
			var now = Date.now(),
				time = (now / 1000 - start) % 1000;
			simplex.time = time / 10;

			//animate wind blowing fog
			noiseOffset[0] = time * 0.2 - props.mapScale[0] / 2;
			simplex.noiseOffset = noiseOffset;

			//lower fog
			if (revealRemaining && lastRender) {
				revealRemaining = Math.max(0, revealRemaining -  (now - lastRender) / FADE_DURATION);
				//console.log(now, lastRender, now - lastRender, revealRemaining);
				props.intercept[0] = revealRemaining * 1.15 - 0.15;
				props.intercept[1] = revealRemaining * 1.15 - 0.15;
				props.intercept[2] = revealRemaining * 1.15 - 0.15;
				transfer.intercept = props.intercept;
			}

			seriously.render();
			lastRender = now;
		}
	};
};