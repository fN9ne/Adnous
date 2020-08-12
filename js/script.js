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
		$('.menu-page').toggleClass('_active')
	})
	$('.category__item').click(function(){
		$('.menu-page').removeClass('_active')
	})
	//
	$('.category__title_1').click(function(){
		$('.category__box_1').toggleClass('_active')
	})
	$('.category__title_2').click(function(){
		$('.category__box_2').toggleClass('_active')
	})
	$('.category__title_3').click(function(){
		$('.category__box_3').toggleClass('_active')
	})
	//
	$('.header__burger').click(function(){
		$('.sidebar').toggleClass('_active');
	})
	//
	if ($(window).width() > 768) {
		$('.block-sidebar__dropable').click(function(){
			$('.block-sidebar__content_5').toggleClass('_active')
			$('.block-sidebar_5').toggleClass('_active')
			$('.angle').toggleClass('_active')
		})
	}
	if ($(window).width() <= 768) {
		$('.title-sidebar').removeAttr('href')
	}
	if ($(window).height() > 1080) {
		$('.lelp-content').addClass('hdd')
	}
	//
		$('.title-sidebar-opn_5').click(function(){
			$('.content-sidebar-opn_5').toggleClass('_active')
			$('.opn-sidebar__item_5').toggleClass('_active')
			$('.title-sidebar-opn__angle').toggleClass('_active')
		})
	//
	if ($(window).width() <= 768) {
		$('.title-sidebar_5').click(function(){
			$('.dropdown-sidebar_5').toggleClass('_active')
			$('.sidebar__item_5').toggleClass('_active')
			$('.title-sidebar__angle').toggleClass('_active')
		})
	}
	$('.wh00').mouseover(function(){$('.hour00').addClass('_hovered')})
	$('.wh01').mouseover(function(){$('.hour01').addClass('_hovered')})
	$('.wh02').mouseover(function(){$('.hour02').addClass('_hovered')})
	$('.wh03').mouseover(function(){$('.hour03').addClass('_hovered')})
	$('.wh04').mouseover(function(){$('.hour04').addClass('_hovered')})
	$('.wh05').mouseover(function(){$('.hour05').addClass('_hovered')})
	$('.wh06').mouseover(function(){$('.hour06').addClass('_hovered')})
	$('.wh07').mouseover(function(){$('.hour07').addClass('_hovered')})
	$('.wh08').mouseover(function(){$('.hour08').addClass('_hovered')})
	$('.wh09').mouseover(function(){$('.hour09').addClass('_hovered')})
	$('.wh10').mouseover(function(){$('.hour10').addClass('_hovered')})
	$('.wh11').mouseover(function(){$('.hour11').addClass('_hovered')})
	$('.wh12').mouseover(function(){$('.hour12').addClass('_hovered')})
	$('.wh13').mouseover(function(){$('.hour13').addClass('_hovered')})
	$('.wh14').mouseover(function(){$('.hour14').addClass('_hovered')})
	$('.wh15').mouseover(function(){$('.hour15').addClass('_hovered')})
	$('.wh16').mouseover(function(){$('.hour16').addClass('_hovered')})
	$('.wh17').mouseover(function(){$('.hour17').addClass('_hovered')})
	$('.wh18').mouseover(function(){$('.hour18').addClass('_hovered')})
	$('.wh19').mouseover(function(){$('.hour19').addClass('_hovered')})
	$('.wh20').mouseover(function(){$('.hour20').addClass('_hovered')})
	$('.wh21').mouseover(function(){$('.hour21').addClass('_hovered')})
	$('.wh22').mouseover(function(){$('.hour22').addClass('_hovered')})
	$('.wh23').mouseover(function(){$('.hour23').addClass('_hovered')})
	$('.wh00').mouseleave(function(){$('.hour00').removeClass('_hovered')})
	$('.wh01').mouseleave(function(){$('.hour01').removeClass('_hovered')})
	$('.wh02').mouseleave(function(){$('.hour02').removeClass('_hovered')})
	$('.wh03').mouseleave(function(){$('.hour03').removeClass('_hovered')})
	$('.wh04').mouseleave(function(){$('.hour04').removeClass('_hovered')})
	$('.wh05').mouseleave(function(){$('.hour05').removeClass('_hovered')})
	$('.wh06').mouseleave(function(){$('.hour06').removeClass('_hovered')})
	$('.wh07').mouseleave(function(){$('.hour07').removeClass('_hovered')})
	$('.wh08').mouseleave(function(){$('.hour08').removeClass('_hovered')})
	$('.wh09').mouseleave(function(){$('.hour09').removeClass('_hovered')})
	$('.wh10').mouseleave(function(){$('.hour10').removeClass('_hovered')})
	$('.wh11').mouseleave(function(){$('.hour11').removeClass('_hovered')})
	$('.wh12').mouseleave(function(){$('.hour12').removeClass('_hovered')})
	$('.wh13').mouseleave(function(){$('.hour13').removeClass('_hovered')})
	$('.wh14').mouseleave(function(){$('.hour14').removeClass('_hovered')})
	$('.wh15').mouseleave(function(){$('.hour15').removeClass('_hovered')})
	$('.wh16').mouseleave(function(){$('.hour16').removeClass('_hovered')})
	$('.wh17').mouseleave(function(){$('.hour17').removeClass('_hovered')})
	$('.wh18').mouseleave(function(){$('.hour18').removeClass('_hovered')})
	$('.wh19').mouseleave(function(){$('.hour19').removeClass('_hovered')})
	$('.wh20').mouseleave(function(){$('.hour20').removeClass('_hovered')})
	$('.wh21').mouseleave(function(){$('.hour21').removeClass('_hovered')})
	$('.wh22').mouseleave(function(){$('.hour22').removeClass('_hovered')})
	$('.wh23').mouseleave(function(){$('.hour23').removeClass('_hovered')})
	//
	$('.info-lelp__close').click(function(){
		$('.info-lelp').toggleClass('_disable')
	})
	//
	$('.manually-keywords__reset').click(function(){
		$('.manKeyWordsInp').val('')
	})
	//
	$('._hideable_1').click(function(){
		$('.box-hideable_1').toggleClass('_active')
	})
	$('._hideable_2').click(function(){
		$('.box-hideable_2').toggleClass('_active')
	})
	$('._hideable_3').click(function(){
		$('.box-hideable_3').toggleClass('_active')
	})
	$('._hideable_4').click(function(){
		$('.box-hideable_4').toggleClass('_active')
	})
	$('._hideable_5').click(function(){
		$('.box-hideable_5').toggleClass('_active')
	})
	$('._hideable_6').click(function(){
		$('.box-hideable_6').toggleClass('_active')
	})
	//
	$('.clickable').click(function(){
		$('.sidebar__box').toggleClass('_active')
		$('.sidebar__item_5').toggleClass('_active')
	})
	//
	$('.info-page__btn').click(function(){
		$('body').addClass('_lock')
	})
	$('.mi-popup__area').click(function(){
		$('body').removeClass('_lock')
	})
	$('.mi-popup__close').click(function(){
		$('body').removeClass('_lock')
	})
	//
	function count01() {
		var value = $(".notifiedTitle01").val().length
		$('.currentLength01').html(value)
		var max = $('.notifiedTitle01').attr('maxlength')
		$('.maxLength01').html(max)
	}
	function count02() {
		var value = $(".notifiedTitle02").val().length
		$('.currentLength02').html(value)
		var max = $('.notifiedTitle02').attr('maxlength')
		$('.maxLength02').html(max)
	}
	function count03() {
		var value = $(".notifiedTitle03").val().length
		$('.currentLength03').html(value)
		var max = $('.notifiedTitle03').attr('maxlength')
		$('.maxLength03').html(max)
	}
	setInterval(count01, 100)
	setInterval(count02, 100)
	setInterval(count03, 100)
	//
	$('.preview-block__btn_1').click(function(){
		$(this).addClass('_active')
		$('.preview-block__btn_2').removeClass('_active')
	})
	$('.preview-block__btn_2').click(function(){
		$(this).addClass('_active')
		$('.preview-block__btn_1').removeClass('_active')
	})
})