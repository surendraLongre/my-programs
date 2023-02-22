// responsive image maps
; (function (a) { a.fn.rwdImageMaps = function () { var c = this; var b = function () { c.each(function () { if (typeof (a(this).attr("usemap")) == "undefined") { return } var e = this, d = a(e); a("<img />").on('load', function () { var g = "width", m = "height", n = d.attr(g), j = d.attr(m); if (!n || !j) { var o = new Image(); o.src = d.attr("src"); if (!n) { n = o.width } if (!j) { j = o.height } } var f = d.width() / 100, k = d.height() / 100, i = d.attr("usemap").replace("#", ""), l = "coords"; a('map[name="' + i + '"]').find("area").each(function () { var r = a(this); if (!r.data(l)) { r.data(l, r.attr(l)) } var q = r.data(l).split(","), p = new Array(q.length); for (var h = 0; h < p.length; ++h) { if (h % 2 === 0) { p[h] = parseInt(((q[h] / n) * 100) * f) } else { p[h] = parseInt(((q[h] / j) * 100) * k) } } r.attr(l, p.toString()) }) }).attr("src", d.attr("src")) }) }; a(window).resize(b).trigger("resize"); return this } })(jQuery);
// end of responsive image maps

const bar_button = document.querySelector('#bar-button');
const right_btn = document.querySelector('#right');

bar_button.addEventListener('click', function () {
    if (right_btn.style.display == "block") {
        right_btn.style.display = 'none';
    }
    else {
        right_btn.style.display = 'block';
    }

})

$(function () {
    //responsive image maps
    $('img[usemap]').rwdImageMaps();

    $('input').focus(function () {
        $(this).css('background', '#e3e3e3');
    })
    $('#footer input').blur(function () {
        $(this).css('background', 'white');
    })
    $('#footer input').addClass('ui-corner-all');
    $('#footer input').keyup(function () {
        $(this).css('background', 'rgb(203, 231, 246)');
    })

    //show subsystems upon hovering
    $('#vent').mouseover(function () {
        mouse_over('.mechanics', '#vent');
        $('#wind_window').css('display', 'block');
    })
    $('#light_bulb').mouseover(function () {
        mouse_over('.electrical', '#light_bulb');
        $('#green_light').css('display', 'block');
    })
    $('#tv').mouseover(function () {
        mouse_over('.communication', '#tv');
    })
    $('#money_plant').mouseover(function () {
        mouse_over('.sponsership', '#money_plant');
    })
    $('#sofa').mouseover(function () {
        mouse_over('.architecture', '#sofa');
    })


    // upon mouse leaving
    var array = ['#vent', '#sofa', '#tv', '#money_plant', '#light_bulb'];

    $('#tv-shunya-logo').mouseover(function () {
        $('.communication').fadeIn();
    })

    $('#vent').mouseout(function () {
        mouse_out('.mechanics', '#vent');
        $('#wind_window').css('display', 'none');
    })
    $('#light_bulb').mouseout(function () {
        mouse_out('.electrical', '#light_bulb');
        $('#green_light').css('display', 'none');
    })
    $('#tv').mouseout(function () {
        mouse_out('.communication', '#tv');
    })
    $('#money_plant').mouseout(function () {
        mouse_out('.sponsership', '#money_plant');
    })
    $('#sofa').mouseout(function () {
        mouse_out('.architecture', '#sofa');
    })

    function mouse_over(element_class, image_element) {
        $(element_class).fadeIn();
        $('#living-room').css({
            "filter": "blur(8px)"
        })

        for (var i = 0; i != array.length; i++) {
            if (array[i] != image_element) {
                $(array[i]).css('filter', 'blur(8px)');
            }
        }
    }

    function mouse_out(element_class, image_element) {
        $(element_class).fadeOut();
        $('#living-room').css({
            "filter": "none"
        })
        for (var i = 0; i != array.length; i++) {
            if (array[i] != image_element) {
                $(array[i]).css('filter', 'none');
            }
        }
    }

    // go to subsystem page
    // $('.subsystems').click(function () {
    //     $('#subsystems').css({
    //         'background': '#914461',
    //         'color': 'white',

    //     });
    // })

    // $('#select-team').selectmenu();
    $('#to-relative, #subsystem-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#subsystem-list').css('display', 'block');
    });

    $('#subsystems').mouseout(function () {
        $('#subsystem-list').css('display', 'none');
    });

    // for the team
    $('#team-relative, #team-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#team-list').css('display', 'block');
    });

    $('#team').mouseout(function () {
        
        $('#team-list').css('display', 'none');
    });

    // for the project
    $('#project-relative, #project-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#project-list').css('display', 'block');
    });

    $('#project').mouseout(function () {
        
        $('#project-list').css('display', 'none');
    });


})

function team_redirect() {
    // switch($('#select-team').value) {
    //     case "Architecture": 
    //     window.location = "./subsystem_page.php";
    //     break;
    //     default:
    //         window.location = "./something.php";
    // }
    // alert("How are you");
    var value = document.querySelector('#select-team').value;
    alert(value);
}
// team_redirect();