(function (root) {
	var LOAD_FADE = 2;
	var AudioContext = window.AudioContext || window.webkitAudioContext;

	function AudioLoop(src) {
		var context,
			xhr,
			buffer,
			gainNode,
			gain = 1,
			fadeInTime,
			source;

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
						gainNode.gain.linearRampToValueAtTime(0, time);
						fadeInTime = time + LOAD_FADE;
						gainNode.gain.linearRampToValueAtTime(gain, fadeInTime);
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
	}

	root.AudioLoop = AudioLoop;
}(this));