const burgerBtn = document.querySelector('.header__burger');
const headerLine = document.querySelector('.header__line');
const navigationLink = document.querySelectorAll('.navigation__link');

burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('body__menushowed');
    headerLine.classList.toggle('header__line-active')
    burgerBtn.classList.toggle('rotate')
})


navigationLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.toggle('body__menushowed');
        headerLine.classList.toggle('header__line-active');
        burgerBtn.classList.toggle('rotate');
    })
})




	//плавный переход к ссылкам

	$(document).ready(function(){
	    $("#navigation").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 800);
	    });
	});