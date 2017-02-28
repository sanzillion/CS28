$(document).ready(function(){
  $("#marge-link").css("top", "-50px");
    $("#marge").hover(function(){
      //console.log("Hovered");
        $("#marge-link").animate({
          top: '0px'})
      }, function(){
        //console.log("Not Hovered");
        $("#marge-link").animate({
          top: '-50px'})
    });

    $("#sanz-link").css("top", "-50px");
      $("#sanz").hover(function(){
          $("#sanz-link").animate({
            top: '0px'})
        }, function(){
          $("#sanz-link").animate({
            top: '-50px'})
      });
});
