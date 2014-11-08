	
	function getSize(){
		return {
			width: $(window).width(),
			height: $(window).height()
		};
	}
	
	var viewer = new DepthyViewer($("#viewer")[0], {
		depthBlurSize: 10,
		depthFocus: 0.5, // 0 near - 0.5 middle - 1 far 
		depthScale: 0.5, // 0.5 calm - 1 normal - 2 dramatic
		size: getSize()
	});

	$(window).on('resize', function(){
		viewer.setOptions({
			size: getSize()
		});
	});

	viewer.setImage('images/snow.png');
	viewer.setDepthmap('images/snow-depthmap.png');
	viewer.setParticles(
		[
			PIXI.Texture.fromImage('images/rain.png'),
			PIXI.Texture.fromImage('images/rain2.png'),
			PIXI.Texture.fromImage('images/rain3.png'),
		],
		{
			"alpha": {
				"start": 0,
				"end": 0.44
			},
			"scale": {
				"start": 1,
				"end": 1,
				"minimumScaleMultiplier": 1
			},
			"color": {
				"start": "ffffff",
				"end": "ffffff"
			},
			"speed": {
				"start": 2999.7,
				"end": 3000
			},
			"acceleration": {
				"x": null,
				"y": null
			},
			"startRotation": {
				"min": 65,
				"max": 65
			},
			"rotationSpeed": {
				"min": 0,
				"max": 0
			},
			"lifetime": {
				"min": 0.81,
				"max": 0.81
			},
			"blendMode": "normal",
			"frequency": 0.009,
			"emitterLifetime": -1,
			"maxParticles": 1000,
			"pos": {
				"x": 0,
				"y": 0
			},
			"addAtBack": false,
			"spawnType": "rect",
			"spawnRect": {
				"x": -600,
				"y": -460,
				"w": 900,
				"h": 20
			}
		}
	);

	viewer.enableDebug();
	//viewer.exportThumbnail();
	//viewer.update();

