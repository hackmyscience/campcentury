require('./scrolling.js');
require('./scenemanager.js');
require('./scenes/snow.js');

/*
set up scene manager and load scenes
*/

var manager = new SceneManager();
var scenes = [];

manager.add(Snow, {
	container: $("#slide-1")[0]
});
manager.activate(0);

function resize() {
	manager.resize(window.innerWidth, window.innerHeight);

	//todo: throttle/bounce resize
}

var Scrolling = new Scrolling ([
	'slide-1',
	'slide-2',
	'slide-3'
]);

document.onkeyup = function(event) {
    event = event || window.event;
    switch (event.keyCode || event.which) {
        case 38:
            //up
            Scrolling.goPrev();
            break;
        case 40:
            //down
            Scrolling.goNext();
            break;
    }
};

$(document).on('scrolling:change', function(e, info){
	console.log(info);
});


$("#add").on('click', function(){
	Scrolling.add('slide-4');
});
$("#remove").on('click', function(){
	Scrolling.remove(0);
});

$(window).on('resize', resize);

resize();
manager.go();
