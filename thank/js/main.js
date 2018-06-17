var map;
var calc_step = 1;

$(document).ready(function () {
  $('.scroll').on('click', function () {
    var anchor = $(this).data('scroll');
    var anchor_link = $(anchor).offset().top;
    $('html, body').stop().animate({
      scrollTop: anchor_link - $('.header-fixed').outerHeight() + "px"
    }, 1500, 'easeInOutExpo');
      $('.main-nav').removeClass('active');
    event.preventDefault();

    $('.main-nav').removeClass('active');
  });

  $('.nav-bars').on('click', function () {
      $('.main-nav').addClass('active');
  });

  $('.close-nav').on('click', function () {
      $('.main-nav').removeClass('active');
  });

  if ($('.select-wrap').length) {
    $('.select-wrap select').styler();
  }

  if ($('.checkbox-wrap').length) {
    $('.checkbox-wrap input').styler();
  }

  $('.team-all-js').on('click', function () {
    $(this).closest('.actions-wrap').hide();
    $('.team-item').removeClass('hidden');
  });

  $('.reviews-all-js').on('click', function () {
    $(this).closest('.reviews-actions-wrap').hide();
    $('.reviews-item').removeClass('hidden');
  });








  $('.agree-content').scrollbar();

  $('.about-slider').slick({
    dots: false,
    prevArrow: '.about .custom-prev',
    nextArrow: '.about .custom-next',
    infinite: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false
  });



  var wow = new WOW(
          {
            animateClass: 'animated',
            mobile: false,
            offset: 200,
            callback: function (box) {
              console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          }
  );
  wow.init();

  $('.send').on('click', function () {
    $(this).closest('form').submit();
  });

  $('form').submit(function () {
    $(this).isCorrectRequest();
    return false;
  });

  $('.custom-modal-open').fancybox({
    autoSize: true,
    type: 'inline',
    closeBtn: false,
    padding: 0,
    scrolling: 'visible',
    fixed: false,
    autoCenter: false,
    beforeShow: function () {
      $('.custom-modal input').removeClass('incorrect');
      $('.custom-modal input[type="text"]').val('');
      $('.custom-modal textarea').val('');
      $('.cart-section').removeClass('visible');
      if (this.element.hasClass('video-link')) {
        var video_link = this.element.data('video');
        $("#video-modal .video-modal-content").html('<iframe src="' + video_link + '"frameborder="0" allowfullscreen></iframe>');
      }

      if (this.element.hasClass('cart-btn')) {
        $("#checkout-modal").find('[name="order"]').val(this.element.data('from'));
      }

      $(".fancybox-skin").css("background-color", "transparent");

    },
    afterShow: function () {

    },
    beforeClose: function () {

    },
    afterClose: function () {
      $('.custom-modal input[type="text"]').val('');
      $('.custom-modal textarea').val('');
      $("#video-modal .video-modal-content").html('');
    }
  }).click(function () {
    if (typeof ($(this).data('from')) !== 'undefined') {

    }
		if ($(this).hasClass('data-get')) {
			$(this).closest('.data-container').find('.data-source').clone().appendTo('#modal_callback .hidden');
		}
  });

  $('.cart-toggle').on('click', function () {
    if ($('.cart-toggle').data('count') > 0) {
      $('.cart-section').addClass('visible');
      $.fancybox.close();
    }
  });


  $('body').on('click', '.modal-close, .close-modal, .custom-close', function () {
    $.fancybox.close();
    return false;
  });

  if($('.steps-item-descr').length){
    $('.steps-item-descr').matchHeight({
        byRow: true
    })
  }

    if($('.steps-item-title').length){
        $('.steps-item-title').matchHeight({
            byRow: true
        })
    }


  if ($('input[name="phone"]').length) {
    $('input[name="phone"]').inputmask("+7 (999) 999 99 99", {
        showMaskOnHover: false
    });
  }

  $('#credit_sum').inputmask('decimal' ,{
    groupSeparator: ' ',
    autoGroup: true
  });

  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      helpers: {
        overlay: {
          locked: false
        }
      },
      openEffect: 'none',
      closeEffect: 'none',
      padding: 0
    });
  }
  
  $('.calc-block-slider').slick({
		dots: false,
		arrows: false,
		speed: 800,
		slidesToShow: 1,
		infinite: false,
		autoplay: false,
		adaptiveHeight: true,
        draggable: false,
        fade: true
  });
    $('.calc-block-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.next-step-wrap').removeClass('enable');
    });

    $('[name="amount"],[name="geo"],[name="obj"]').on('change',function () {
        if ($('#step-1 .active').length == 3) {
            $('#step-1 .next-step-wrap').addClass('enable');
        }
    });

    $('[name="children"],[name="rooms"],[name="square"]').on('change',function () {
        if ($('[name="obj"]:checked').val() === 'Комната') {
            if ($('#children-block .active').length && $('#rooms-block .active').length && $('#square-block .active').length) {
                $('#step-2 .next-step-wrap').addClass('enable');
            }
        } else {
            if ($('#children-block .active').length && $('#rooms-block .active').length) {
                $('#step-2 .next-step-wrap').addClass('enable');
            }
        }
    });

    $('[name="source"]').on('change',function () {
        if ($('#step-3 .active').length == 1) {
            $('#step-3 .next-step-wrap').addClass('enable');
        }
    });

    $('.next-step-wrap > a').on('click', function () {
        var block = $(this).closest('.calc-block-slide');
        var step = block.attr('id');
        var data = '';
        if (step == 'step-1') {
            data = 'step=1&geo='+encodeURIComponent($('[name="geo"]:checked').val())+'&obj='+encodeURIComponent($('[name="obj"]:checked').val())+'&amount='+encodeURIComponent($('[name="amount"]:checked').val());
        } else if (step == 'step-2') {
            data = 'step=2&children='+encodeURIComponent($('[name="children"]:checked').val())+'&rooms='+encodeURIComponent($('[name="rooms"]:checked').val());
            if ($('[name="obj"]:checked').val() === 'Комната') {
                data += '&square='+encodeURIComponent($('[name="square"]:checked').val());
            }
        } else if (step == 'step-3') {
            data = 'step=3&source='+encodeURIComponent($('[name="source"]:checked').val());
        }
        if (data) {
            $.post('step.php', data);
        }
    });

    $('.custom-next-btn').on('click', function () {
      if(($('[name="obj"]:checked').val() === 'Квартира') || $('[name="obj"]:checked').val() === 'Комната'){
          $('.calc-block-slider').slick('slickNext');
          calc_step++;
          $('.calc-block-steps-progress span').css('width', (calc_step * 25) + '%');
          if ($('[name="obj"]:checked').val() === 'Комната') {
            $('#square-block').show();
          } else {
            $('#square-block').hide();
          }
      }else{
          calc_step += 3;
          $('.calc-block-steps-progress span').css('width', '100%');
          $('.calc-block-slider').slick('slickGoTo', 4);
      }

    });
    
	$('.calc-block-form').submit(function () {
		return false;
	});

    $(document).on('click', '.step-btn', function () {
        calc_step++;
        $('.calc-block-steps-progress span').css('width', (calc_step * 25) + '%');
    });

	$(document).on('click', '.calc-block-slider .next-btn', function () {

		$('.calc-block-slider').slick('slickNext');
		if ($(this).is('a')) {
			return false;
		}
	});
  
	$(document).on('mousedown', '.calc-block-labels label', function () {
    $(this).closest('.calc-block-labels').find('label.active').removeClass('active');
		$(this).toggleClass('active');
	});
});

(function ($) {
  $.fn.isCorrectRequest = function () {
    $(this).find('input[type=text]').removeClass('correct incorrect shake');

    var nameInput = $(this).find('[name = name]');
    var telephoneInput = $(this).find('[name = phone]');
    var emailInput = $(this).find('[name = email]');

    nameInput.val($.trim(nameInput.val()));
    telephoneInput.val($.trim(telephoneInput.val()));

    if(nameInput.val() != undefined){
     if(nameInput.val().length === 0)
     {
     nameInput.addClass('incorrect');
     nameInput.focus();
     return false;
     }
     }

    if (telephoneInput.val() != undefined) {
      if (telephoneInput.val().length === 0)
      {
        telephoneInput.addClass('incorrect');
        telephoneInput.focus();
        return false;
      }
    }
    if (emailInput.hasClass('required')) {
      if (emailInput.val() != undefined) {
        if (emailInput.val().length === 0)
        {
          emailInput.addClass('incorrect');
          emailInput.focus();
          return false;
        } else {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(emailInput.val())) {
            emailInput.addClass('incorrect');
            emailInput.focus();
            return false;
          }
        }
      }

    }

    var form = $(this);
    var formData = new FormData($(this)[0]);
    var url = '/app.php';
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      async: false,
      success: function (data)
      {
        $('input').removeClass('incorrect');
        $('input[type="text"]').val('');
        $('textarea').val('');
        $.fancybox('#thanks-modal', {
          autoSize: true,
          type: 'inline',
          closeBtn: false,
          padding: 0,
          scrolling: 'visible',
          fixed: false,
          autoCenter: false
        });

        setTimeout(function () {
          $.fancybox.close();
        }, 3500);

      },
      error: function (answer)
      {
        alert('Ошибка отправки. Попробуйте еще раз.');
      }
    });
  };
})(jQuery);
