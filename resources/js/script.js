$(document).ready(function(){
    $("#service").waypoint(function(direction){
        if (direction == "down") {
            
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
            
        }
    });


    var mixer = mixitup('#portfolio-items');
})