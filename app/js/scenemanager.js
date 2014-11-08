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
			isActive = false,
			width = 0,
			height = 0;

		id = lastId++;

		scene = definition.call(this, options);
		render = scene.render || function () {};
		start = scene.start || function () {};
		stop = scene.stop || function () {};
		resize = scene.resize || function () {};
		destroy = scene.destroy || function () {};

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
			this.stop();
		};

		this.active = function () {
			return isActive;
		};

		this.render = render.bind(this);

		this.resize = function (w, h) {
			if (w !== width || h !== height) {
				width = w;
				height = h;
				resize(width, height);
			}
		};
	}

	function SceneManager(inintialWidth, initialHeight) {
		var self = this,
			scenes = [],
			activeScenes = {},
			width = 0,
			height = 0,
			auto = false;

		function findScene(index) {
			if (index instanceof Scene) {
				return index;
			}

			if (isNaN(index) || index < 0 || index >= scenes.length) {
				return null;
			}

			return scenes[index];
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

			if (typeof scene === 'function' ||
					typeof scene === 'object' && !(scene instanceof Scene)) {
				scene = new Scene(scene, options);
			} else if (scenes.indexOf(scene) >= 0) {
				return;
			}

			if (index === undefined || index >= scenes.length || index < 0) {
				scenes.push(scene);
			} else {
				scenes.splice(index, 0, scene);
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
			scene.destroy();
			scenes.splice(index, 1);

			return this;
		};

		this.activate = function (index) {
			var scene = findScene(index);
			activeScenes[scene.id] = scene;
			scene.resize(width, height);
			scene.activate();

			return this;
		};

		this.deactivate = function (index) {
			var scene = findScene(index);
			scene.deactivate();
			delete activeScenes[scene.id];

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

		this.resize(inintialWidth || 0, initialHeight || 0);
	}

	SceneManager.Scene = Scene;
	window.SceneManager = SceneManager;
}(this));