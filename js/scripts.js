window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
var nav_visible;
var nav = $('#nav');

$(document).ready(function(){
    set_float_nav();
    // set_form_submit_listener();
    set_phone_mask();
    set_toastr_options();
});

function set_toastr_options() {
    toastr.options = {
        "positionClass": "toast-top-center",
    }
}
function set_phone_mask() {
    $('[name="phone"]').mask("+7 (999) 999-99-99");
}
// function set_form_submit_listener() {
//     $('form').submit(function(){
//         var that = this;
//         $(this).find('button[type="submit"]').prop('disabled', true);
//         var name = $(this).find('input[name="name"]').val();
//         var phone = $(this).find('input[name="phone"]').val();
//         if (!name.replace(/ /g,'')) {
//             toastr.info('Пожалуйста, укажите Ваше имя.');
//             $(this).find('button[type="submit"]').prop('disabled', false);
//             return false;
//         }
//         if (!phone) {
//             toastr.info('Пожалуйста, введите номер телефона.');
//             $(this).find('button[type="submit"]').prop('disabled', false);
//             return false;
//         }
//
// 		$.post(
// 			'https://script.google.com/macros/s/AKfycbyD9RuAa3-QiToUOgV3_JKOzCkdIRNfFMP5hHHkHCokqd2yhpw/exec',
// 			{
// 				name : name,
// 				phone : phone
// 			}, function(){
//                 $(that).find('input[name="name"]').val('');
//                 $(that).find('input[name="phone"]').val('');
//                 $(that).find('button[type="submit"]').prop('disabled', false);
// 				toastr.success('Заявка успешно отправлена.');
// 			}
// 		);
// 		return false;
// 	});
// }
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
