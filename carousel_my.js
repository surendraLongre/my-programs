const left_btn = document.querySelector('#left');
const slide_arr = ['#slide-1', '#slide-2', '#slide-3', '#slide-4', '#slide-5', '#slide-6', '#slide-7', '#slide-8', '#slide-9']
var arr_index = 0;
const arr_length = slide_arr.length;
var screen_width=window.innerWidth;

$(function () {
    $('#left').button({
        icons: {
            primary: 'ui-icon-caret-1-w'
        },
        text: false
    });
    $('#right').button({
        icons: {
            primary: 'ui-icon-caret-1-e'
        },
        text: false
    });
    $('li').hide();

    // set the initial condition

    $(slide_arr[arr_index]).show();
    $('#left').click(function () {
        slide_left();
    })
    $('#right').click(function () {
        slide_right();
    })
    function slide_left() {
        $(slide_arr[arr_index]).hide();
        if (arr_index == 0) arr_index = arr_length - 1;
        else arr_index--;
        $(slide_arr[arr_index]).show();
    }
    function slide_right() {
        // hide the initial slide
        $(slide_arr[arr_index]).hide();
        if(arr_index==arr_length-1) arr_index=0;
        else arr_index++;
        $(slide_arr[arr_index]).show(); 
    }

})