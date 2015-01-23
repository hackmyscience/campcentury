/* global require, $, imagesLoaded, Scrolling, SceneManager, AudioLoop, Snow, Choice, Science, Military, Sociological */

require('./utils.js');
require('./scrolling.js');
require('./scenemanager.js');
require('./audioloop.js');
require('./scenes/snow.js');
require('./scenes/choice.js');

require('./scenes/science.js');
require('./scenes/science2.js');

require('./scenes/military.js');
require('./scenes/military2.js');

require('./scenes/sociological.js');
require('./scenes/sociological2.js');

require('./scenes/end.js');

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
	var dpr = 1; //window.devicePixelRatio || 1;
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
