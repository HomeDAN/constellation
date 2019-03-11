//Menu toggle

$(document).ready(function(e){
	$('.mobile-btn').on('click', function(){
		$('.menu-wrapper').css('left', '0')
	});

	$('.nav-btn_close, .content').on('click', function(){
		$('.menu-wrapper').css('left', '-360' + 'px')
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
	swipeMenuLeft = d.querySelector('.swipe-menu_left'),
	swipeMenuRight = d.querySelector('.swipe-menu_right'),
	menuWrapper = d.querySelector('.menu-wrapper'),
	coords = 0,
	getCoords;

getCoords = function(e){

	if(e.target.className === 'swipe-menu_left'){
		menuWrapper.style.left = -360 + 'px';
	} 

	if(e.target.className === 'swipe-menu_right'){
		menuWrapper.style.left = 0 + 'px';
	} 
	
}

// document.addEventListener("touchstart", getCoords, false)
// document.addEventListener("touchend", getCoords, false)
document.addEventListener("touchmove", getCoords, false)

