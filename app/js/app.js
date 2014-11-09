require('./utils.js');
require('./scrolling.js');
require('./scenemanager.js');
require('./audioloop.js');
require('./scenes/snow.js');
require('./scenes/choice.js');

require('./scenes/science.js');
require('./scenes/military.js');
require('./scenes/sociological.js');

/*
set up scene manager and load scenes
*/

var scrolling = new Scrolling([]);
var manager = new SceneManager();
var scrollNext = scrolling.goNext.bind(scrolling);
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
		options: {},
		index: 1
	},
	science: {
		definition: Science,
		options: {},
		index: 2,
		delay: true
	},
	military: {
		definition: Military,
		options: {},
		index: 2,
		delay: true
	},
	sociological: {
		definition: Sociological,
		options: {},
		index: 2,
		delay: true
	}
};

function addScene(key, index) {
	if (index === undefined) {
		index = scenes[key].index;
	}

	manager.add(scenes[key].scene, index);
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
			scene.scene = new SceneManager.Scene(scene.definition, scene.options);
			
			if (!scene.delay) {
				addScene(k);
			}
		}
	}
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
		//todo - disable sound
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
	var dpr = window.devicePixelRatio || 1;
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
});


$("#add").on('click', function(){
	scrolling.add('slide-4');
});
$("#remove").on('click', function(){
	scrolling.remove(0);
});

$(window).on('resize', _.throttle(resize, 100));

resize();
manager.go();
