/* global require, $, imagesLoaded, Scrolling, SceneManager, AudioLoop, Snow, Choice, Science, Military, Sociological */


 /* --------------------------- */ 

var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

function normalize(x, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
}

 /* --------------------------- */ 

var Scrolling = function(slides){
	this.slides = slides;
	this.currentSlide = 0;
	this.animating = false;
	this.canScroll = false;

	this.add = function(id, index){
		if(!index) {
			index = this.slides.length;
		}

		//no duplicates please
		if (this.slides.indexOf(id) >= 0) {
			return;
		}

		this.slides.splice(index, 0, id);

		if(index < this.currentSlide){
			this.currentSlide++;
		}

	};

	this.remove = function(index){
		if (typeof index === 'string') {
			index = this.slides.indexOf(index);
		}

		if (index < 0 || index >= this.slides.length) {
			return;
		}

		if(index == this.currentSlide){
			return false; //todo: allow to remove the current slide
		}

		this.slides.splice(index, 1);
		
		if(index < this.currentSlide){
			this.currentSlide--;
		}
	};

	this.goNext = function(){
		this.jumpTo(this.currentSlide+1);
	};

	this.goPrev = function(){
		this.jumpTo(this.currentSlide-1);
	};

	this.jumpTo = function(destination){
		if( destination >= this.slides.length || destination < 0 || destination === this.currentSlide || this.animating || !this.canScroll) {
			return false;
		}


		this.animating = true;
		
		var oldSlideN = this.currentSlide,
			oldSlide = this.getSlide( this.currentSlide ),
			newSlide = this.getSlide( destination ),
			self = this;

		$(document).trigger('scrolling:change', {
			newSlide: destination,
			oldSlide: this.currentSlide,
			status: 'start'
		});

		var enterAnim = destination > this.currentSlide ? 'slideIn' : 'slideInInv',
			exitAnim = destination > this.currentSlide ? 'slideOut' : 'slideOutInv';

		oldSlide.removeClass('current').addClass(enterAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(enterAnim);
		});

		newSlide.addClass(exitAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(exitAnim).addClass('current');
			self.animating = false;

			$(document).trigger('scrolling:change', {
				newSlide: destination,
				oldSlide: oldSlideN,
				status: 'end'
			});

		});

		$('.adiacent').removeClass('adiacent');
		this.getSlide(destination-1).addClass('adiacent');
		this.getSlide(destination+1).addClass('adiacent');

		this.currentSlide = destination;
	};

	this.getSlide = function(n){
		return $('#'+this.slides[n]);
	};


};

 /* --------------------------- */ 

(function (window) {
	var lastId = 0;

	function Scene(definition, options) {
		var scene,
			id,
			start,
			stop,
			resize,
			destroy,
			render,
			fadeOut,
			muted,
			isActive = false,
			name,
			width = 0,
			height = 0;

		id = lastId++;

		scene = definition.call(this, options);
		render = (scene.render || function () {}).bind(this);
		start = (scene.start || function () {}).bind(this);
		stop = (scene.stop || function () {}).bind(this);
		resize = (scene.resize || function () {}).bind(this);
		fadeOut = (scene.fadeOut || function () {}).bind(this);
		muted = (scene.muted || function () {}).bind(this);
		destroy = (scene.destroy || function () {}).bind(this);

		this.name = options.name || definition.name || 'scene-' + id;

		Object.defineProperty(this, 'id', {
			configurable: true,
			enumerable: true,
			get: function () {
				return id;
			}
		});

		this.activate = function () {
			if (!isActive) {
				isActive = true;
				start();
			}
		};

		this.deactivate = function () {
			if (isActive) {
				stop();
				isActive = false;
			}
		};

		this.destroy = function () {
			this.deactivate();
			destroy();
		};

		this.active = function () {
			return isActive;
		};

		this.render = render.bind(this);
		this.fadeOut = fadeOut.bind(this);

		this.resize = function (w, h) {
			if (w !== width || h !== height) {
				width = w;
				height = h;
				resize(width, height);
			}
		};

		this.mute = function () {
			muted(true);
		};

		this.unMute = function () {
			muted(false);
		};
	}

	function SceneManager(inintialWidth, initialHeight) {
		var self = this,
			scenes = [],
			scenesByName = {},
			activeScenes = {},
			width = 0,
			height = 0,
			muted = false,
			auto = false;

		function findScene(index) {
			if (index instanceof Scene) {
				return index;
			}

			if (typeof index === 'string') {
				return scenesByName[index] || null;
			}

			if (isNaN(index) || index < 0 || index >= scenes.length) {
				return null;
			}

			return scenes[index] || null;
		}

		function animate() {
			if (auto) {
				self.render();
				requestAnimationFrame(animate);
			}
		}

		this.add = function (scene, options, index) {
			if (typeof options === 'number' && index === undefined) {
				index = options;
				options = null;
			}

			if (typeof scene === 'function') {
				scene = new Scene(scene, options);
			} else if (scenes.indexOf(scene) >= 0) {
				return;
			}

			if (!(scene instanceof Scene)) {
				throw 'SceneManager needs a scene or a function';
			}

			if (scenesByName[scene.name]) {
				throw 'Attempt to add duplicate scene';
			}

			if (index === undefined || index >= scenes.length || index < 0) {
				scenes.push(scene);
			} else {
				scenes.splice(index, 0, scene);
			}

			scenesByName[scene.name] = scene;

			if (muted) {
				scene.mute();
			} else {
				scene.unMute();
			}

			return this;
		};

		this.remove = function (scene) {
			var index;

			if (!scenes.length) {
				return;
			}

			if (scene === undefined) {
				index = scenes.length - 1;
				scene = scenes[index];
			} else if (typeof scene === 'number') {
				if (isNaN(scene) || scene < 0 || scene >= scenes.length) {
					return;
				}
				index = scene;
				scene = scenes[index];
			} else {
				index = scenes.indexOf(scene);
				if (index < 0) {
					return;
				}
			}

			this.deactivate(index);
			//scene.destroy();
			scenes.splice(index, 1);
			delete scenesByName[scene.name];

			return this;
		};

		this.activate = function (index) {
			var scene = findScene(index);
			if (scene) {
				activeScenes[scene.id] = scene;
				scene.resize(width, height);
				scene.activate();
			}

			return this;
		};

		this.fadeOut = function (index) {
			var scene = findScene(index);
			if (scene) {
				scene.fadeOut();
			}

			return this;
		};

		this.deactivate = function (index) {
			var scene = findScene(index);
			if (scene) {
				scene.deactivate();
				delete activeScenes[scene.id];
			}

			return this;
		};

		this.render = function () {
			var k;
			for (k in activeScenes) {
				if (activeScenes.hasOwnProperty(k)) {
					activeScenes[k].render();
				}
			}

			return this;
		};

		this.go = function () {
			if (!auto) {
				auto = true;
				animate();
			}

			return this;
		};

		this.stop = function () {
			auto = false;
			return this;
		};

		this.resize = function (w, h) {
			var k;

			if (width !== w || height !== h) {
				width = w;
				height = h;

				for (k in activeScenes) {
					if (activeScenes.hasOwnProperty(k)) {
						activeScenes[k].resize(width, height);
					}
				}

				/*
				todo: maybe resize inactive scenes as well, but after a timeout
				so they get spaced out. Resizing can be slow and can cause jank.
				*/
			}
		};

		this.mute = function () {
			muted = true;
			scenes.forEach(function (scene) {
				scene.mute();
			});
		};

		this.unMute = function () {
			muted = false;
			scenes.forEach(function (scene) {
				scene.unMute();
			});
		};

		this.muted = function () {
			return muted;
		};

		this.resize(inintialWidth || 0, initialHeight || 0);
	}

	SceneManager.Scene = Scene;
	window.SceneManager = SceneManager;
}(this));

 /* --------------------------- */ 

(function (root) {
	var LOAD_FADE = 2;
	var AudioContext = window.AudioContext || window.webkitAudioContext;

	var visibilityChange,
		hidden;

	if (document.hidden !== undefined) {
		hidden = 'hidden';
		visibilityChange = 'visibilitychange';
	} else if (document.mozHidden !== undefined) {
		hidden = 'mozHidden';
		visibilityChange = 'mozvisibilitychange';
	} else if (document.msHidden !== undefined) {
		hidden = 'msHidden';
		visibilityChange = 'msvisibilitychange';
	} else if (document.webkitHidden !== undefined) {
		hidden = 'webkitHidden';
		visibilityChange = 'webkitvisibilitychange';
	}

	function AudioLoop(src) {
		var context,
			xhr,
			buffer,
			gainNode,
			gain = 1,
			fadeInTime,
			source,
			pageHidden = document[hidden];

		if (AudioContext) {
			context = new AudioContext();
			xhr = new XMLHttpRequest();
			source = context.createBufferSource();
			source.loop = true;
			gainNode = context.createGain();
			source.connect(gainNode);
			gainNode.connect(context.destination);
		}

		this.load = function () {
			if (context && !xhr.readyState) {
				xhr.open('GET', src, true);
				xhr.responseType = 'arraybuffer';
				xhr.onload = function () {
					context.decodeAudioData(xhr.response, function(b) {
						var time = context.currentTime;
						buffer = b;
						source.buffer = buffer;
						fadeInTime = time + LOAD_FADE;

						if (pageHidden) {
							gainNode.gain.value = 0;
						} else {
							gainNode.gain.linearRampToValueAtTime(0, time);
							gainNode.gain.linearRampToValueAtTime(gain, fadeInTime);
						}
						source.start(0);
					}, function (err) {
						console.log('error loading audio file', src, err);
					});
				};
				xhr.send();
			}
		};

		this.gain = function (val, time) {
			gain = val;
			if (gainNode && buffer) {
				time = time || 0;
				gainNode.gain.linearRampToValueAtTime(gainNode.gain.value, context.currentTime);
				gainNode.gain.linearRampToValueAtTime(gain, Math.max(fadeInTime, context.currentTime + time));
			}
		};

		document.addEventListener(visibilityChange, function () {
			pageHidden = document[hidden];
			if (gainNode && buffer) {
				if (pageHidden) {
					gainNode.gain.linearRampToValueAtTime(0, context.currentTime);
				} else if (fadeInTime <= context.currentTime) {
					gainNode.gain.linearRampToValueAtTime(gain, context.currentTime);
				} else {
					gainNode.gain.linearRampToValueAtTime(0, context.currentTime);
					gainNode.gain.linearRampToValueAtTime(gain, fadeInTime);
				}
			}
		}, false);
	}

	root.AudioLoop = AudioLoop;
}(this));

 /* --------------------------- */ 

var Snow = function (options) {
	var DISPLACE_AMOUNT = 0.2, // 0.12 is a good amount, but making it higher for demo
		PAN_AMOUNT = 0.05,
		VERTICAL_DISPLACE = 0.3,
		FOG_SCALE = 1 / 2,
		FADE_DURATION = 6000,
		TRANSITION_TIME = 0.75,

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
		isMuted = false,
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
		rotateIconInterval,
		currentInstruction = 0,
		audio;

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

	function rotateIcon() {
		instructions.css('opacity', 0);
		instructions.eq(currentInstruction).css('opacity', 1);

		currentInstruction = (currentInstruction + 1) % instructions.length;
	}

	if (options.scrollNext) {
		$('#intro .scrolldownArea').on('click', options.scrollNext);
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

	target.source = blend;

	audio = new AudioLoop('audio/ccTitleAudio.mp3');

	window.addEventListener('mousemove', mouseMove, false);

	return {
		start: function () {
			rotateIconInterval = window.setInterval(rotateIcon, 2000);
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
			//window.removeEventListener('mousemove', mouseMove, false);
			window.clearInterval(rotateIconInterval);
			audio.gain(0);
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

 /* --------------------------- */ 

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
		if (options.activateBranch) {
			options.activateBranch($(this).data('scene'));
		}
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

 /* --------------------------- */ 

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

 /* --------------------------- */ 

var Science2 = function (options) {
	
	var lateralText = $("#science2 .lateral-text"),
		lateralMenu = $("#science2 .lateral-menu");

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
	};
};

 /* --------------------------- */ 

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

 /* --------------------------- */ 

var Military2 = function (options) {
	
	var lateralText = $("#military2 .lateral-text"),
		lateralMenu = $("#military2 .lateral-menu");

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
	};
};

 /* --------------------------- */ 

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
			//window.removeEventListener('mousemove', mouseMove, false);
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

 /* --------------------------- */ 

var Sociological2 = function (options) {
	
	var lateralText = $("#sociological2 .lateral-text"),
		lateralMenu = $("#sociological2 .lateral-menu");

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
	};
};

 /* --------------------------- */ 

var End = function (options) {
	
	var lateralText = $("#end .lateral-text"),
		lateralMenu = $("#end .lateral-menu");

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
	};
};

 /* --------------------------- */ 

/*
set up scene manager and load scenes
*/

var scrolling = new Scrolling([]);
var manager = new SceneManager();
var scrollNext = scrolling.goNext.bind(scrolling);
var music = document.getElementById('music');
var musicStarted = false;
var scenes = {
	intro: {
		definition: Snow,
		options: {
			scrollNext: scrollNext
		},
		index: 0
	},
	choice: {
		definition: Choice,
		options: {
			activateBranch: activateBranch
		},
		index: 1
	},
	science: {
		definition: Science,
		options: {},
		index: 2,
		delay: true,
		branch: 'science'
	},
	science2: {
		definition: Science2,
		options: {},
		index: 3,
		delay: true,
		branch: 'science'
	},
	military: {
		definition: Military,
		options: {},
		index: 2,
		delay: true,
		branch: 'military'
	},
	military2: {
		definition: Military2,
		options: {},
		index: 3,
		delay: true,
		branch: 'military'
	},
	sociological: {
		definition: Sociological,
		options: {},
		index: 2,
		delay: true,
		branch: 'sociological'
	},
	sociological2: {
		definition: Sociological2,
		options: {},
		index: 3,
		delay: true,
		branch: 'sociological'
	},
	end: {
		definition: End,
		options: {},
		index: 4,
		delay: true
	}
};

function addScene(key, index) {
	var scene = scenes[key];
	if (index === undefined) {
		index = scene.index;
	}

	manager.add(scene.scene, index);
	scrolling.add(key, index);
}

function setUpScenes() {
	var k,
		scene;

	scrolling.canScroll = false;

	for (k in scenes) {
		if (scenes.hasOwnProperty(k)) {
			scene = scenes[k];
			scene.key = k;
			scene.options.container = $("#" + k)[0];

			if (!scene.options.name) {
				scene.options.name = k;
			}

			scene.scene = new SceneManager.Scene(scene.definition, scene.options);
			
			if (!scene.delay) {
				addScene(k);
			}
		}
	}
}

function activateBranch(branch) {
	_.forEach(scenes, function (scene) {
		if (scene.branch === branch) {
			addScene(scene.key);
		} else if (scene.branch) {
			manager.remove(scene.scene);
			scrolling.remove(scene.key);
		}
	});

	addScene('end');

	scrolling.goNext();
}

setUpScenes();

function ready(){
	//after the loading and white transition
	scrolling.canScroll = true;
	$("#menu").css('opacity', 1);

	$("#menu .home").on('click', function(){
		scrolling.jumpTo(0);
	});
	$("#menu .word").on('click', function(){
		scrolling.jumpTo(1);
	});
	$("#menu .sound").on('click', function(){
		if (manager.muted()) {
			manager.unMute();
			if (musicStarted) {
				music.play();
			}
		} else {
			manager.mute();
			music.pause();
		}
	});

	$("#intro .scroll-stuff").css('opacity', 1);

	$("#menu .fullscreen").on('click', function(){
		$('body').fullScreen();
	});
}

imagesLoaded( document.querySelector('#intro'), function( instance ) {
	$("#loading").css('opacity', 0).on(transitionEnd, function(){
		$(this).remove();
	});

	manager.activate(0);

	window.setTimeout(ready, 6000);

});



function resize() {
	var dpr = 1;//window.devicePixelRatio || 1;
	manager.resize(window.innerWidth * dpr, window.innerHeight * dpr);
	//todo: throttle/bounce resize
}


function handleScroll(e, delta, deltaX, deltaY){
	e.preventDefault();


	if(deltaY >= 1){
		scrolling.goPrev();
	}

	if(deltaY < 1){
		scrolling.goNext();
	}
}

$(window).on('mousewheel', _.throttle(handleScroll, 1700, { leading: true, trailing: false }));

document.onkeyup = function(event) {
    event = event || window.event;
    switch (event.keyCode || event.which) {
        case 38:
            //up
            scrolling.goPrev();
            break;
        case 40:
            //down
            scrolling.goNext();
            break;
    }
};

$(document).on('scrolling:change', function(e, info){
	if (info.status === 'start') {
		manager.activate(info.newSlide);
		manager.fadeOut(info.oldSlide);
	} else {
		manager.deactivate(info.oldSlide);
	}

	if (!musicStarted && info.newSlide > 0) {
		musicStarted = true;
		if (!manager.muted()) {
			music.play();
		}
	}
});

$(window).on('resize', _.throttle(resize, 100));

resize();
manager.go();
