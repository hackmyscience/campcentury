var Snow = function (options) {
	var DISPLACE_AMOUNT = 0.12,
		PAN_AMOUNT = 0.05,
		VERTICAL_DISPLACE = 0.3,
		FOG_SCALE = 1 / 2,

		totalOffset = 2 * (0.03 + PAN_AMOUNT + DISPLACE_AMOUNT),

		seriously,
		backgroundImage,
		depthMap,
		canvas,

		//seriously nodes
		transfer,
		simplex,
		channels,
		saturation,
		blend,
		displace,
		target,
		scale,

		reformatBackground,
		reformatDepth,
		reformatNoise,

		resizables = [],

		start = Date.now() / 1000,
		noiseOffset = [0, 0],
		props = {
			slope: [1, 1, 1, 1],
			intercept: [0.8, 0.8, 0.8, 1],
			mapScale: [0, 0]
		};

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

		props.mapScale[0] = -DISPLACE_AMOUNT * 2 * (x / window.innerWidth - 0.5);
		props.mapScale[1] = VERTICAL_DISPLACE * (DISPLACE_AMOUNT * 2 * (y / window.innerHeight - 0.5));

		displace.mapScale = props.mapScale;
		//displace.amount = 0.2 * x / window.innerWidth - 0.1;
	}

	seriously = new Seriously();

	canvas = document.createElement('canvas');
	options.container.appendChild(canvas);
	target = seriously.target(canvas);
	resizables.push(target);

	backgroundImage = document.createElement('img');
	backgroundImage.src = 'images/ccTitleBackgroundCropped.jpg';
	reformatBackground = seriously.transform('reformat');
	reformatBackground.source = backgroundImage;
	reformatBackground.mode = 'cover';
	resizables.push(reformatBackground);

	saturation = seriously.effect('hue-saturation');
	saturation.source = reformatBackground;
	saturation.hue = 0;
	saturation.saturation = 0.3;

	//todo: set up displacement node
	depthMap = document.createElement('img');
	depthMap.src = 'images/ccTitleBackgroundDepth.jpg';
	reformatDepth = seriously.transform('reformat');
	reformatDepth.source = depthMap;
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

	reformatNoise = seriously.transform('reformat');
	reformatNoise.source = simplex;
	resizables.push(reformatNoise);

	//adjust "distance" of fog by moving depth channel value up/down
	transfer = seriously.effect('linear-transfer');
	transfer.source = reformatDepth;
	transfer.slope = props.slope;
	transfer.intercept = props.intercept;

	//set depth value as alpha channel of fog
	channels = seriously.effect('channels');
	channels.source = reformatNoise; //simplex;
	channels.alphaSource = transfer;
	channels.alpha = 'red';

	//apply fog to image with "screen" blend mode
	blend = seriously.effect('blend');
	blend.top = channels;
	blend.bottom = scale;
	blend.mode = 'screen';

	target.source = blend; //blend;

	window.addEventListener('mousemove', mouseMove, false);

	return {
		resize: function (width, height) {
			resizables.forEach(function (node) {
				node.width = width;
				node.height = height;
			});
			simplex.width = width * FOG_SCALE;
			simplex.height = height * FOG_SCALE;
		},
		render: function () {
			var time = (Date.now() / 1000 - start) % 1000;
			simplex.time = time / 10;

			//animate wind blowing fog
			noiseOffset[0] = time * 0.2 - props.mapScale[0] / 2;
			simplex.noiseOffset = noiseOffset;

			seriously.render();
		}
	};
};