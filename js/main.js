//Menu toggle

$(document).ready(function(){
	$('.mobile-btn').on('click', function(){
		$('.menu-wrapper').css('left', '0')
	});

	$('.nav-btn_close').on('click', function(){
		$('.menu-wrapper').css('left', '-400' + 'px')
	});

	// Search

	$('.fa-search').on('click', function(){
		$('.search-block').addClass('search-block_active')
	});

	$('.search-block').on('click', function(e){
		if(e.target.className === 'search'){
			$('.search-block').addClass('search-block_active')
		} else {
			$('.search-block').removeClass('search-block_active')
		}
	});

	// $('.swipe-menu').slideAndSwipe();
})

//Touch and swipe menu

var d = document,
	swipeMenu = d.querySelector('.swipe-menu'),
	menuWrapper = d.querySelector('.menu-wrapper'),
	coords = 0,
	getCoords;

getCoords = function(e){
	if(e.target.className === 'swipe-menu'){
		coords = e.changedTouches[0].clientX;
		if(coords > 200){
			menuWrapper.style.left = 0 + 'px';
			swipeMenu.style.left = 260 + 'px';
			// coords = 0;
		}

		if( coords < 200){
			menuWrapper.style.left = -400 + 'px';
			swipeMenu.style.left = 360 + 'px';
		}
	}
}

swipeMenu.addEventListener("touchstart", getCoords, false);
swipeMenu.addEventListener("touchend", getCoords, false);
swipeMenu.addEventListener("touchmove", getCoords, false);

