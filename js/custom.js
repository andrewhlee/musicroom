(function($) {
    $(document).ready(function() {

    /*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

        //Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('.big-background').addClass('big-background-default-image');
            var sound = new Howl ({
                url:['sounds/sound1.mp3', 'sounds/sound1.ogg', 'sounds/sound1.aac'],
                autoplay: true,
                loop: true,
            });
        }
    });


})(jQuery);