var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

var Scrolling = function(slides){
	this.currentSlide = 0;

	this.slides = slides || [];
	this.animating = false;

	this.add = function(id, index){

		if(!index) {
			index = this.slides.length;
		}

	};

	this.remove = function(index){

	};

	this.goNext = function(){
		this.jumpTo(this.currentSlide+1);
	};

	this.goPrev = function(){
		this.jumpTo(this.currentSlide-1);
	};

	this.jumpTo = function( destination ){
		if( destination >= this.slides.length || destination < 0 || destination === this.currentSlide || this.animating) {
			return false;
		}

		this.animating = true;

		var oldSlide = this.getSlide( this.currentSlide ),
			newSlide = this.getSlide( destination ),
			self = this;

		$(document).trigger('scrolling:change', {
			newSlide: destination,
			oldSlide: this.currentSlide
		});

		var enterAnim = destination > this.currentSlide ? 'slideIn' : 'slideInInv',
			exitAnim = destination > this.currentSlide ? 'slideOut' : 'slideOutInv';

		oldSlide.removeClass('current').addClass(enterAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(enterAnim);
		});

		newSlide.addClass(exitAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(exitAnim).addClass('current');
			self.animating = false;
		});

		this.currentSlide = destination;
	};

	this.getSlide = function( n ){
		return $('#'+this.slides[n]);
	};

};