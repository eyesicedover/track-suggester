$(document).ready(function(){
  $("#start").click(function() {
    event.preventDefault();
    $("#start").fadeOut();
    $(".intro").fadeOut();
    $("#surveyForm").fadeIn();
  });

  $("#surveyForm").submit(function(event){
    event.preventDefault();
  });
});
