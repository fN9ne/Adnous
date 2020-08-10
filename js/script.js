function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
$(document).ready(function(){
	$('.tablet-header').click(function(){
		$('.header__body').toggleClass('_active')
	})
	//
	$('.header__burger').click(function(){
		$('.sidebar').toggleClass('_active');
		$('.menu-page').toggleClass('_active');
	})
	//
	$('.sidebar__item_1').click(function(){
		$('.sidebar__content_1').toggleClass('_active')
		$('.sidebar__content_2').removeClass('_active')
		$('.sidebar__content_3').removeClass('_active')
		$('.sidebar__content_4').removeClass('_active')
		$('.sidebar__content_5').removeClass('_active')
	})
	$('.sidebar__item_2').click(function(){
		$('.sidebar__content_1').removeClass('_active')
		$('.sidebar__content_2').toggleClass('_active')
		$('.sidebar__content_3').removeClass('_active')
		$('.sidebar__content_4').removeClass('_active')
		$('.sidebar__content_5').removeClass('_active')
	})
	$('.sidebar__item_3').click(function(){
		$('.sidebar__content_1').removeClass('_active')
		$('.sidebar__content_2').removeClass('_active')
		$('.sidebar__content_3').toggleClass('_active')
		$('.sidebar__content_4').removeClass('_active')
		$('.sidebar__content_5').removeClass('_active')
	})
	$('.sidebar__item_4').click(function(){
		$('.sidebar__content_1').removeClass('_active')
		$('.sidebar__content_2').removeClass('_active')
		$('.sidebar__content_3').removeClass('_active')
		$('.sidebar__content_4').toggleClass('_active')
		$('.sidebar__content_5').removeClass('_active')
	})
	$('.sidebar__item_5').click(function(){
		$('.sidebar__content_1').removeClass('_active')
		$('.sidebar__content_2').removeClass('_active')
		$('.sidebar__content_3').removeClass('_active')
		$('.sidebar__content_4').removeClass('_active')
		$('.sidebar__content_5').toggleClass('_active')
	})
	//
})