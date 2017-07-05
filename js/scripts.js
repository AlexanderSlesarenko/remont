window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
var nav_visible;
var nav = $('#nav');

$(document).ready(function(){
    set_float_nav();
    set_form_submit_listener();
    set_phone_mask();
    set_toastr_options();
    set_buttons_blur();
    set_scroll_down();
    set_accordion();
    set_slider_buttons_click_listener();
});

function set_accordion() {
    var acc = document.getElementsByClassName("accordion_header");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    }
}
function set_slider_buttons_click_listener() {
  $("#slider_buttons .item").click(function(event) {
    if ($(this).hasClass('active')) return;
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
}
function set_scroll_down() {
  $(".top_pointer_wrapper").click(function() {
    $('html, body').animate({
        scrollTop: $(".block.second").offset().top - 60
    }, 500);
  });
  $("#nav button, #prices button").click(function() {
    $('html, body').animate({
        scrollTop: $(".block.order").offset().top - 60
    }, 500);
  });
}
function set_buttons_blur() {
  $("button").click(function(event) {
    $(this).blur();
  });
}
function set_toastr_options() {
    toastr.options = {
        "positionClass": "toast-top-center",
    }
}
function set_phone_mask() {
    $('[name="phone"]').mask("+7 (999) 999-99-99");
}
function set_form_submit_listener() {
    $('form').submit(function(){
        var that = this;
        $(this).find('button[type="submit"]').prop('disabled', true);
        var name = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        if (!name.replace(/ /g,'')) {
            toastr.info('Пожалуйста, укажите Ваше имя.');
            $(this).find('button[type="submit"]').prop('disabled', false);
            return false;
        }
        if (!phone) {
            toastr.info('Пожалуйста, введите номер телефона.');
            $(this).find('button[type="submit"]').prop('disabled', false);
            return false;
        }

		$.post(
            'https://script.google.com/macros/s/AKfycbw9iZeumDlu_sCtBHci8hp4Zf6S2EbK87ncis8J6t7fTWH4fYQ/exec',
			{
				name : name,
				phone : phone
			}, function(){
                $(that).find('input[name="name"]').val('');
                $(that).find('input[name="phone"]').val('');
                $(that).find('button[type="submit"]').prop('disabled', false);
				toastr.success('Заявка успешно отправлена.');
			}
		);
		return false;
	});
}
function set_float_nav() {
    $(window).scroll(function() {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 0) {
            if (!nav_visible) {
                nav_visible = true;
                nav.addClass('visible');
            }
        } else {
            nav_visible = false;
            nav.removeClass('visible');
        }
    });
}
