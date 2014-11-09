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