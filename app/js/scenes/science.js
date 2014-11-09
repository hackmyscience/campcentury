var Science = function (options) {

	var lateralText = $("#science .lateral-text"),
		lateralMenu = $("#science .lateral-menu");

	var imagePaths = [
		'images/snow1.png',
		'images/rain2.png'
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
			var owidth = 1280, //720x405
				oheight = 720, actualheight, actualwidth;

			var windowWidth = window.innerWidth,
			    windowHeight = window.innerHeight,
			    windowAspectRatio = windowHeight / windowWidth,
			    imgAspectRatio = 1280/720;

           if (windowWidth / windowHeight > owidth / oheight) {
               actualheight = Math.floor((oheight * windowWidth) / owidth) + 1;
               actualwidth = Math.floor((actualheight * owidth) / oheight) + 1;
           } else {
               actualwidth = Math.floor((windowHeight * owidth) / oheight) + 1;
               actualheight = Math.floor((oheight * actualwidth) / owidth) + 1;
           }

           bg.width = actualwidth;
           bg.height = actualheight;
           bg.position.y = (windowHeight/2) + (-actualheight / 2);
           bg.position.x = (windowWidth/2) + (-actualwidth / 2);

		}
	};
	window.onresize();

	// Preload the particle images and create PIXI textures from it
	var urls = imagePaths.slice();
	urls.push("images/ccSnowBackground.jpeg");
	var loader = new PIXI.AssetLoader(imagePaths);
	loader.onComplete = function()
	{
		bg = new PIXI.Sprite(PIXI.Texture.fromImage("images/ccSnowBackground.jpeg"));

		window.onresize();

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
					"start": 0.05,
					"end": 0.30
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
					"start": 600,
					"end": 3000
				},
				"acceleration": {
					"x": null,
					"y": null
				},
				"startRotation": {
					"min": 15,
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
				"frequency": 0.004,
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

	function mouseMove(evt) {
		var x = evt.pageX,
			y = evt.pageY;

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

	window.addEventListener('mousemove', mouseMove, false);

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