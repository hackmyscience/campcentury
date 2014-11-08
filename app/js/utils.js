var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

function normalize(x, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
}