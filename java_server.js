$(function () {
    $.ajax({
        url: './return_subs_images.php',
        success: function (data) {
            myarray=data.split("/");
            myarray.reverse();
            // if (data) $('#carousel-image').attr('src', myarray[0]); 
            if(data) $('#subsystem-data').html(data);
            $('#subs_name').html($('#name').html());
        }
    })
})  