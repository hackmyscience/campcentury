var Scrolling = function(elements){
	this.currentSlide = 0;
	this.slides = $(elements);
	this.animating = false;


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
			newSlide = this.getSlide( destination );

		$(document).trigger('scrolling:change', {
			newSlide: destination,
			oldSlide: this.currentSlide
		});

		oldSlide.removeClass('current');
		newSlide.addClass('current');

		this.currentSlide = destination;
		this.animating = false;
	};

	this.getSlide = function( n ){
		return this.slides.eq(n);
	};

};