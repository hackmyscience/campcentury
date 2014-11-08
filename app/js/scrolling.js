var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

var Scrolling = function(slides){
	this.slides = slides;
	this.currentSlide = 0;
	this.animating = false;

	this.add = function(id, index){
		if(index == this.currentSlide){
			return false; //todo: allow to remove the current slide
		}

		if(!index) {
			index = this.slides.length;
		}

		this.slides.splice(index, 0, id);

		if(index < this.currentSlide){
			this.currentSlide++;
		}

	};

	this.remove = function(index){
		if(index == this.currentSlide){
			return false; //todo: allow to remove the current slide
		}

		this.slides.splice(index, 1);
		
		if(index < this.currentSlide){
			this.currentSlide--;
		}
	};

	this.goNext = function(){
		this.jumpTo(this.currentSlide+1);
	};

	this.goPrev = function(){
		this.jumpTo(this.currentSlide-1);
	};

	this.jumpTo = function(destination){
		if( destination >= this.slides.length || destination < 0 || destination === this.currentSlide || this.animating) {
			return false;
		}

		this.animating = true;

		var oldSlideN = this.currentSlide,
			oldSlide = this.getSlide( this.currentSlide ),
			newSlide = this.getSlide( destination ),
			self = this;

		$(document).trigger('scrolling:change', {
			newSlide: destination,
			oldSlide: this.currentSlide,
			status: 'start'
		});

		var enterAnim = destination > this.currentSlide ? 'slideIn' : 'slideInInv',
			exitAnim = destination > this.currentSlide ? 'slideOut' : 'slideOutInv';

		oldSlide.removeClass('current').addClass(enterAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(enterAnim);
		});

		newSlide.addClass(exitAnim).on(animationEnd, function(){
			$(this).off(animationEnd).removeClass(exitAnim).addClass('current');
			self.animating = false;

			$(document).trigger('scrolling:change', {
				newSlide: destination,
				oldSlide: oldSlideN,
				status: 'end'
			});

		});

		$('.adiacent').removeClass('adiacent');
		this.getSlide(destination-1).addClass('adiacent');
		this.getSlide(destination+1).addClass('adiacent');

		this.currentSlide = destination;
	};

	this.getSlide = function(n){
		return $('#'+this.slides[n]);
	};

};