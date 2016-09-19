$(function() {
    $(".hide_description").on("click", function(){
        $("#description").slideUp( "slow", function() {
            // Animation complete.
        });
    })

    $(".menu li").on("click", function(){
        $(this).addClass('active');
        $(".menu li").not(this).removeClass('active');
    });
})
