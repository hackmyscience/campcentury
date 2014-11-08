require('./scrolling.js');

var Scrolling = new Scrolling("#scrolling section");
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

$(document).on("scrolling:change", function(e, info){
	console.log(info);
});