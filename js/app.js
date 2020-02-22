var common = {
	init: function() {
		common.main();
		common.owl();
		common.sliderNumbers();
	},
	main: function(){

		$('.nav-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
		});
		
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$('header').removeClass('open');
		});
	},
	owl: function(){
		$('.banner-slider').owlCarousel({
			nav:true,
			dots: true,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			navContainer: '.banner-arrows',
			margin: 65,
			items: 1
		});

		$('.best-slider').owlCarousel({
			nav:true,
			dots: false,
			loop: true,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			margin: 30,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1551:{
					items:2
				}
			}
		});
		
		$('.gallery-slider').owlCarousel({
			nav:true,
			dots: false,
			loop: true,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			margin: 30,
			responsive: {
				0:{
					items:1
				},
				501:{
					items:2
				},
				768:{
					items:3
				},
				1551:{
					items:4
				}
			}
		});

		$('.banner-arrows .owl-next').click(function() {
			$('.banner-slider').trigger('next.owl.carousel');
		})

		$('.banner-arrows .owl-prev').click(function() {
			$('.banner-slider').trigger('prev.owl.carousel', [300]);
		})

	},
	sliderNumbers: function(){

		function navInfo() {

			$('.banner-slider, .best-slider').each(function(){

				var maxItems = $(this).find('.owl-item:not(.cloned)').length;

				var oneItemPercentage = 100 / maxItems;

				if(maxItems > 9){
					$(this).closest('.wrapper').find('.banner-item-max, .percentage-max, .best-item-max').text(maxItems);
				}else {
					$(this).closest('.wrapper').find('.banner-item-max, .percentage-max, .best-item-max').text('0' + maxItems);
				}

				$(this).find('.owl-item:not(.cloned) .banner-item').each(function(index, elem){
					if($(this).parent().hasClass('active')) {

						var activeItem = index + 1,
							activeItemPercentage = activeItem * oneItemPercentage + '%',
							nextActive = index + 2,
							prevActive = index,
							nextActiveImg = $(this).parent().next().find('.banner-img img').attr('src'),
							prevActiveImg = $(this).parent().prev().find('.banner-img img').attr('src');
							

						if(activeItem > 9){
							$(this).closest('.banner').find('.banner-item-active, .percentage-active, .banner-subtitle span').text(activeItem);
							$(this).closest('.banner').find('.banner-arrows .owl-prev p').text(prevActive);
							$(this).closest('.banner').find('.banner-arrows .owl-next p').text(nextActive);
						}else {
							$(this).closest('.banner').find('.banner-item-active, .percentage-active, .banner-subtitle span').text('0' + activeItem);
							$(this).closest('.banner').find('.banner-arrows .owl-prev p').text('0' + prevActive);
							$(this).closest('.banner').find('.banner-arrows .owl-next p').text('0' + nextActive);
						}
						$('.percentage-line span').css('width', activeItemPercentage);
						$('.banner-arrow.owl-prev .arrow-img').attr('src', prevActiveImg);
						$('.banner-arrow.owl-next .arrow-img').attr('src', nextActiveImg);
					}
				});

				$(this).find('.owl-item:not(.cloned) .best-item').each(function(index, elem){
					if($(this).parent().hasClass('active')) {

						var activeItem = index + 1;
							

						if(activeItem > 9){
							$(this).closest('.wrapper').find('.best-item-active').text(activeItem);
						}else {
							$(this).closest('.wrapper').find('.best-item-active').text('0' + activeItem);
						}
					}
				});

				if($(this).find('.owl-item:first-child').hasClass('active') == true){
					$(this).closest('.wrapper').find('.banner-arrows .owl-prev').addClass('hidden');
				}else {
					$(this).closest('.wrapper').find('.banner-arrows .owl-prev').removeClass('hidden');
				}	

				if($(this).find('.owl-item:last-child').hasClass('active') == true){
					$(this).closest('.wrapper').find('.banner-arrows .owl-next').addClass('hidden');
				}else {
					$(this).closest('.wrapper').find('.banner-arrows .owl-next').removeClass('hidden');
				}	

			});
		}

		navInfo();

		$('.banner-slider, .best-slider').on('translated.owl.carousel', function(event) {
			navInfo();
		});

	}

};

(function() {
	common.init();
}());
