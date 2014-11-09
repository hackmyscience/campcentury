var Scrolling = function(slides){
	this.slides = slides;
	this.currentSlide = 0;
	this.animating = false;
	this.canScroll = false;

	History.pushState(null, null, "/");

	this.add = function(id, index){
		if(!index) {
			index = this.slides.length;
		}

		//no duplicates please
		if (this.slides.indexOf(id) >= 0) {
			return;
		}

		this.slides.splice(index, 0, id);

		if(index < this.currentSlide){
			this.currentSlide++;
		}

	};

	this.remove = function(index){
		if (typeof index === 'string') {
			index = this.slides.indexOf(index);
		}

		if (index < 0 || index >= this.slides.length) {
			return;
		}

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
		if( destination >= this.slides.length || destination < 0 || destination === this.currentSlide || this.animating || !this.canScroll) {
			return false;
		}

		//History.pushState(null, null, "/"+this.slides[destination]);

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


	/*History.Adapter.bind(window,'statechange',$.proxy(function(){
		var State = History.getState();
		
		var destinationId = State.hash.substr(1),
			destination = this.slides.indexOf(destinationId);

		if(typeof destination === 'undefined'){
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
	}, this));*/

};