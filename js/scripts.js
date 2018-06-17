var browser;
jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
};
// Don't clobber any existing jQuery.browser in case it's different
if (!jQuery.browser) {
    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};

    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if (browser.chrome) {
        browser.webkit = true;
    } else if (browser.webkit) {
        browser.safari = true;
    }

    jQuery.browser = browser;
}



if ($.browser.msie) {
       
if ($.browser.version=='8.0') {

 $('.narrow').css('left','154px');
  $('.narrow').css('top','76px');

}


}     

function maski(elem){

          if ($(elem).val()!=''){


           var masks = ['00000000000','000-00-000', '(000) 000-00-000', '0 (000) 000-00-00'];
              mask = masks[0];
            cep=$(elem).val();
            cep=cep.replace(/-/gi, "");
            cep=cep.replace(/ /gi, "");
            cep=cep.replace("(", "");
            cep=cep.replace(")", "");
            var mes='Пожалуйста введите верный номер';
            var mes_bool=false;
            if (cep.length==7) { mask= masks[1]; 
              var s=cep.charAt(0);
              mes_bool=true;
              if ((s=='0') || (s=='1')) { mes='Пожалуйста введите верный номер'; mes_bool=false;}
            };


            if (cep.length==10) { mask= masks[2]

             var s=cep.charAt(0);
             mes_bool=true;
              if ((s!='8') && (s!='9')) { mes='Пожалуйста введите верный номер'; mes_bool=false; }

            };
            if (cep.length==11) { mask= masks[3]


              var s=cep.charAt(0);
              mes_bool=true;
              if ((s!='7') && (s!='8')) { mes='Пожалуйста введите верный номер'; mes_bool=false;}
            };


          $(elem).tooltip({
              show: true,
              hide: false
          });

          $(elem).tooltip("destroy");

            $(elem).removeClass("ui-state-highlight");
            var m=elem.element;
            if (mes_bool==false) {

          $(elem).tooltip({
              show: true,
              hide: false
          });


             $(elem).attr("title", mes).addClass("ui-state-highlight");
             $(elem).tooltip("open");
              setTimeout('$("body .ui-tooltip").css("display","none");',3000);
            }


          $(elem).mask(mask);
          
          return mes_bool;

          } else { return false;}

}


$(document).ready(function () {



var owl1=$('#reviews_box').owlCarousel({
    center: true,
    nav:true,
    loop:true,
    items:1,
    navText: ["",""],
});




$('.menu_box_inner a').click(function() {  
  $('.bx-logo button').attr("aria-expanded","false");

var topMenu = $(".menu_box");

                    topMenu.removeClass('in'); //Close navigation
                    $('.navbar .btn-navbar').addClass('collapsed');


})


$('.how_it_works_list li').click(function() { 

 $('.how_it_works_list li').removeClass('active');

 var num=$(this).attr('data-id');
 $(this).addClass('active');

 $('.how_it_works_list_item').hide('slow/400/fast', function() {
   
 });
 $('#how_it_works_list_item'+num).show('slow/400/fast', function() {
   
 });;


});


$("input[type='text'], textarea").placeholder();

 $('.fancy').fancybox({
                wrapCSS:"wrap_black",
                'scrolling':'visible',
                                helpers:  {
                    overlay : {
                   // locked: false,
                }},
                afterClose : function() {  $("body .ui-tooltip").css("display","none");$("form").trigger( 'reset' ); $("input").removeClass("ui-state-highlight");}  
            });




     $(".phone").bind({
         focus:function(){
            $(this).mask('00000000000');
         },
         onKeyPress:function(){


         },
         focusout:function(){

        maski(this);



         }
     });


            $("input[name='name']").keypress(function(e)
               {
                    if ((e.which != 8) && (e.which != 37) && (e.which != 38) && (e.which != 39) && (e.which != 40) && (e.which != 9) && (e.which != 0)) {   
                   var letters=' АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                   return (letters.indexOf(String.fromCharCode(e.which))!=-1);
                   }
               });


        });  


    $.fn.serializeObject = function () {
                var o = {};
                var a = this.serializeArray();

                $.each(a, function () {
                    if (o[this.name]) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
            };
            

$.validator.setDefaults({

    showErrors: function(map, list) {
        // there's probably a way to simplify this
        var focussed = document.activeElement;
        if (focussed && $(focussed).is("input")) {
            $(this.currentForm).tooltip("close", {
                currentTarget: focussed
            }, true)
        }
        
        this.currentElements.removeAttr("title").removeClass("ui-state-highlight");
        this.currentElements.addClass("ui-state-highlight-success");
        $.each(list, function(index, error) {
            $(error.element).attr("title", error.message).addClass("ui-state-highlight");
            $("body .ui-tooltip").css("display","block");
            var m=error.element;
            //setTimeout('$("body .ui-tooltip").css("display","none");',1300);
            
        });
        if (focussed && $(focussed).is("input")) {
            $(this.currentForm).tooltip("open", {
                target: focussed
            });
        }
    }
});

$.validator.addMethod("mask", function(value, element) {
  return maski(element);
});


(function() {
    // use custom tooltip; disable animations for now to work around lack of refresh method on tooltip

    // validate the comment form when it is submitted
$('button').click(function () {


    _form = $(this).parents("form");


    $(_form).tooltip({
        show: false,
        hide: false
    });

    //Форма - заказать обратный звонок
    $(_form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                mask: true,
            }
        },
        messages: {
            name: "Укажите Имя",
            phone: "Пожалуйста введите верный номер",
        },

        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(_form).serialize(),
                type: 'POST',
                success: function (result) {
                    if (result=='valid_error'){ alert('Заполните поля!');} else {
                        $.fancybox('close');
                        $.fancybox({
                            content: '<div style="font-size: 18px; padding: 10px;">Ваша заявка принята</div>',
                        });
                        yaCounter00000000.reachGoal('lead');

                        // Таймаут для перехода на страницу thank
                        setTimeout(function () {
                            location.href = '/thank/';
                        }, 400);

                        //~ $(form).trigger( 'reset' );
                        //~ $(_form).removeClass("ui-state-highlight-success");
                        //~ $.fancybox.open("#success", {
                            //~ wrapCSS:"wrap_black",
                            //~ 'scrolling':'visible',
                            //~ helpers:  {
                                //~ overlay : {
                                    //~ locked: true,
                                //~ }
                            //~ },
                        //~ });
                    }
                }
            });
            return false; // required to block normal submit since you used ajax
        }

    });



    });

    $(":submit").button();
})();


//Анимация прокрутки по якорям
$(document).ready(function(){
   $('.link_box a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });
   return false;
});


   $(function(){
    $(document).stop().on('click', '.questions_box li', function(){
        var one = $(this);

        if(one.hasClass('active')){
            one.addClass('active').find('.answer_text').stop(true, true).slideUp(600);
      one.removeClass('active');
        } else {
            one.addClass('active').find('.answer_text').stop(true, true).slideDown(600);
        }
    });
});






var buf=0;
  var currentHash = "#hash";
    function scroll() {
        _top = $(window).scrollTop();
        _height = $(window).height();

 if ((_top>$("#questions").offset().top) && (buf==0)) {

          buf=1;
            $.ajax({
              url: 'http://api-maps.yandex.ru/2.0/?load=package.standard,package.geoObjects&amp;lang=ru-RU',
              dataType: "script",
              success: function () {


var center=[60.0163,30.3155];

if ($('.container').width()<768) {var center=[60.0168,30.3031];}
                        ymaps.ready(init);

                            function init () {
                                var myMap = new ymaps.Map("map", {
                                        center: center,
                                        zoom: 16,
                                  behaviors: ['default', 'scrollZoom']
                                    }),


                                    // Создаем метку с помощью вспомогательного класса.
                                    myPlacemark1 = new ymaps.Placemark([60.0168,30.3033], { //55.6879,37.25691
                                        // Свойства.
                                        // Содержимое иконки, балуна и хинта.
                                        iconContent: '',
                                        balloonContent: 'ул. Афонская д. 2, оф. 204'

                                    }, {
                                        // Опции.
                                        // Стандартная фиолетовая иконка.twirl#blueDotIcon
                                  scrollZoomEnabled: true,
                                        preset: 'images/marker.png',
                                    });


                                  myMap.controls.add('smallZoomControl', { top: 20 });
                                //myMap.enableScrollZoom();

                                // Добавляем все метки на карту. Санкт-Петербург, ул. Афонская д. 2, оф. 204
                              myMap.geoObjects
                                .add(myPlacemark1),
                              myMap.geoObjects.options.set('iconImageHref', 'images/marker.png');
                              myMap.geoObjects.options.set('iconImageSize', [51, 63]); 
                              myMap.geoObjects.options.set('iconOffset', [-15, -30]); 
                              myMap.behaviors.disable('scrollZoom');   
                            }
              }
            });



 }


    };
  


    $(window).scroll(function () {
        scroll();
    });
  
    scroll();

