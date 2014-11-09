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