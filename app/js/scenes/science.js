var Science = function (options) {

	var imagePaths = [
		'images/rain.png',
		'images/rain2.png',
		'images/rain3.png'
	];

	var canvas = document.getElementById("science-canvas"),
				stage = new PIXI.Stage(0x0),
				emitter = null,
				renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas),
				bg = null;

	// Calculate the current time
	var elapsed = Date.now();

	// Resize the canvas to the size of the window
	window.onresize = function(event) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		renderer.resize(canvas.width, canvas.height);
		if(bg)
		{
			//bg is a 1px by 1px image
			bg.position.x = 0;
			bg.position.y = 0;
		}
	};
	window.onresize();

	// Preload the particle images and create PIXI textures from it
	var urls = imagePaths.slice();
	urls.push("images/ccChaptersLeft.jpg");
	var loader = new PIXI.AssetLoader(imagePaths);
	loader.onComplete = function()
	{
		bg = new PIXI.Sprite(PIXI.Texture.fromImage("images/ccChaptersLeft.jpg"));
		//bg is a 1px by 1px image
		/*bg.scale.x = canvas.width;
		bg.scale.y = canvas.height;
		bg.tint = 0x000000;*/
		bg.position.x = 0;
		bg.position.y = 0;

		stage.addChild(bg);
		//collect the textures, now that they are all loaded
		var textures = [];
		for(var i = 0; i < imagePaths.length; ++i)
			textures.push(PIXI.Texture.fromImage(imagePaths[i]));
		// Create the new emitter and attach it to the stage
		var emitterContainer = new PIXI.DisplayObjectContainer();
		stage.addChild(emitterContainer);
		emitter = new cloudkid.Emitter(
			emitterContainer,
			textures,
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

		// Center on the stage
		emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);


	};
	loader.load();	

	return {
		render: function () {
				var now = Date.now();
				emitter.update((now - elapsed) * 0.001);
				elapsed = now;

				// render the stage
			    renderer.render(stage);
		}
	};
};