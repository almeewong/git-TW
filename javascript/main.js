<!-- 背景幻燈片輪播 特效 JS -->
function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

;(function($) {

	'use strict'

	var removePreloader = function() {
		setTimeout(function() {
			$('.preloader').css({ 'opacity': 0, 'visibility':'hidden' });
		}, 1000);
	};

	var init_header = function() { // 修改寬度限制 768px->320px 主選單置頂修改//
		var largeScreen = matchMedia('only screen and (min-width: 320px)').matches;
		if( largeScreen ) {
			if( $().sticky ) {
				$('header.header-sticky').sticky();
			}
		}
	};

	var init_header04 = function() {
		if( $('.header04').length ){
			var largeScreen = matchMedia('only screen and (min-width: 768px)').matches;
			if( largeScreen ) {
				$('.header04 #mainnav > ul > li').width($('#mainnav').width()/($('.header04 #mainnav > ul > li').length));
			} else {
				$('.header04 #mainnav > ul > li').width('auto');
			}
		}
	};
	
	var ResponsiveMenu =  {
		menuType: 'desktop',
		initial: function(winWidth) {
			ResponsiveMenu.menuWidthDetect(winWidth);
			ResponsiveMenu.menuBtnClick();
			ResponsiveMenu.parentMenuClick();
		},
		menuWidthDetect: function(winWidth) {
			var currMenuType = 'desktop';
			if (matchMedia('only screen and (max-width: 1199px)').matches) {
				currMenuType = 'mobile';
			}
			if ( currMenuType !== ResponsiveMenu.menuType ) {
				ResponsiveMenu.menuType = currMenuType;
				if ( currMenuType === 'mobile' ) {
					$('.mainnav li.mega a').after($('.mega-wrap ul.sub-menu'));
					var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
					$('#header').find('.header-wrap').after($mobileMenu);
					var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
					hasChildMenu.children('ul').hide();
					hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
					$('.btn-menu').removeClass('active');
				} else {
					$('.mega-wrap .content.menu h3').after($('.mainnav li.mega ul.sub-menu').show());
					var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
					$desktopMenu.find('.sub-menu').removeAttr('style');
					$('#header').find('.btn-menu').after($desktopMenu);
					$('.btn-submenu').remove();
				}
			} // clone and insert menu
		},
		menuBtnClick: function() {
			$('.btn-menu').on('click', function() {
				$('#mainnav-mobi').slideToggle(300);
				$(this).toggleClass('active');
			});
		}, // click on moblie button
		parentMenuClick: function() {
			$(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
				if ( $(this).has('ul') ) {
					e.stopImmediatePropagation()
					$(this).next('ul').slideToggle(300);
					$(this).toggleClass('active');
				}
			});
		} // click on sub-menu button
	};

	var setupMegaMenu = function() {
		$('#mainnav > ul > li.mega a').hover( function() {
			$('.mega-wrap').fadeIn('300');
		},function(){
			setTimeout(function(){ 
				if ($('.mega-wrap:hover').length == 0) {
				    $('.mega-wrap').fadeOut('300');
				} 
			}, 50);
		});
		$('.mega-wrap').mouseleave(function(event) {
			event.preventDefault();
		},function(event) {
			$('.mega-wrap').fadeOut('300');
		});
	}
	var leftMenu = function() {
		if( $('.left-side-menu').length ) {
			$('#header').after( $('nav.mainnav') );
			$('.btn-left-menu').on('click', function(event) {
				$('nav.mainnav').addClass('active');
				$(this).fadeOut('fast');
			});
			$('.btn-close-menu').on('click', function(event) {
				$('nav.mainnav').removeClass('active');
				$('.btn-left-menu').fadeIn('fast');
			});
		}
	}

	var fixHeight = function(elm01,elm02) {
		if ( matchMedia('only screen and (min-width: 768px)').matches ) {
			$('body').imagesLoaded( function() {
				if ( $(elm01).length && $(elm02).length ) {
					var maxHeight = $(elm01).height();
					if( $(elm01).height() < $(elm02).height() ) {
						maxHeight = $(elm02).height();
					}
					$(elm01).height(maxHeight);
					$(elm02).height(maxHeight);
				}
			});
		}
	};

	var consIsotope = function(elm) {
		if ( $().isotope ) {
			var $container = $(elm);
			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.item',
					transitionDuration: '1s'
				}); // end isotope
			});
			$('.filter li').on('click',function() {
				$('.filter li').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).find("a").attr('data-filter');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	};

	var popupGallery = function() {
		if( $().magnificPopup ) {
			$('.popup-gallery').magnificPopup({
				delegate: 'a.popup',
				type: 'image',
				removalDelay: 600,
				tLoading: 'Loading image #%curr%...',
				mainClass: 'my-mfp-slide-bottom',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title');
					}
				}
			});
		}
	};


	var consCarousel = function(elm) {
		$(elm).each(function() {
			if ( $().owlCarousel ) {
				$(this).owlCarousel({
					items: $(this).data('items'),
					itemsDesktop: [1199,$(this).data('itemsdesktop')],
					itemsDesktopSmall:[979,$(this).data('itemsdesktopsmall')],
					itemsTablet: [768,$(this).data('itemstablet')],
					itemsMobile: [479,$(this).data('itemsmobile')],
					slideSpeed: $(this).data('slidespeed'),
					autoPlay: $(this).data('autoplay'),
					pagination: $(this).data('pagination'),
					responsive: $(this).data('responsive')
				});
			}
		});
	};


	// Dom Ready
	$(function() {
		removePreloader();
		init_header();
		init_header04();
		ResponsiveMenu.initial($(window).width());
		setupMegaMenu();
		leftMenu();
		$(window).resize(function() {
			ResponsiveMenu.menuWidthDetect($(this).width());
			init_header04();
			fixHeight('.feature-box .image','.feature-box .text');
			if ( matchMedia('only screen and (min-width: 991px)').matches ) {
				fixHeight('.blog-post','.main-content');
				leftMenu();
			}
		});
		fixHeight('.feature-box','.feature-box .image');
		if ( matchMedia('only screen and (min-width: 991px)').matches ) {
			fixHeight('.blog-post','.main-content');
		}
		consCarousel('.testimonial');
		consCarousel('.offer');
		consCarousel('.testimonial02');
		consCarousel('.testimonial03');
		consIsotope('.portfolio');
		consIsotope('.masonry main > div.content');
		popupGallery();
		
	});

})(jQuery);


//*jQuery.noConflict();

// ------------------
// START EDITING HERE
// ------------------
jQuery(document).ready(function(){

	jQuery('.closeable').closeThis({
		animation: 'fadeAndSlide', 	// set animation
		animationSpeed: 400 		// set animation speed
	});
});
// ----------------
// END EDITING HERE
// ----------------



// -----------------------
// CLOSEABLE NOTIFICATIONS
// -----------------------
(function($)
{
	$.fn.closeThis = function(options)
	{
		var defaults = {
			animation: 'slide',
			animationSpeed: 300
		};
		
		var options = $.extend({}, defaults, options);
		
		return this.each(function()
		{
			var message = $(this);
			
			message.css({cursor: 'pointer'});
			
			message.click(function()
			{
				hideMessage(message);
			});
			
			function hideMessage(object)
			{
				switch(options.animation)
				{
					case 'fade':
						fadeAnimation(object);
						break;
					case 'slide':
						slideAnimation(object);
						break;
					case 'size':
						sizeAnimation(object);
						break;
					case 'fadeThenSlide':
						fadeAndSlideAnimation(object);
						break;
					default:
						fadeAndSlideAnimation(object);
				}
			}
			
			function fadeAnimation(object)
			{
				object.fadeOut(options.animationSpeed);
			}
			
			function slideAnimation(object)
			{
				object.slideUp(options.animationSpeed);
			}
			
			function sizeAnimation(object)
			{
				object.hide(options.animationSpeed);
			}
			
			function fadeAndSlideAnimation(object)
			{
				object.fadeTo(options.animationSpeed, 0, function() { slideAnimation(message) } );
			}
			
		});
	}
})(jQuery);


