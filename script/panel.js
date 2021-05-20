$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/teleradio-donoso.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    $(document).ready(function(){
        $(".songs").each(function(e) {
            if (e != 0)
                $(this).hide();
        });
    
        $("#next").click(function(){
            if ($(".songs:visible").next().length != 0)
                $(".songs:visible").next().show().prev().hide();
            else {
                $(".songs:visible").hide();
                $(".songs:first").show();
            }
            return false;
        });
    
        $("#prev").click(function(){
            if ($(".songs:visible").prev().length != 0)
                $(".songs:visible").prev().show().next().hide();
            else {
                $(".songs:visible").hide();
                $(".songs:last").show();
            }
            return false;
        });
    });

    // make-favorite Button
$('.favme').click(function() {
	$(this).toggleClass('active');
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme").on('animationend', function(){
  $(this).toggleClass('is_animating');
});

});