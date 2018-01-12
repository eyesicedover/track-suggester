var javaCounter = 0;
var phpCounter = 0;
var rubyCounter = 0;
var cCounter = 0;


$(document).ready(function(){
  $("#start").click(function() {
    event.preventDefault();
    $("#start").fadeOut();
    $(".intro").fadeOut();
    $("#surveyForm").delay(900).fadeIn();
  });

  $("#surveyForm").submit(function(event){
    event.preventDefault();
    var name = $("input#userName").val();
    var jobDesc = $("input:radio[name=jobDesc]:checked").val();
    var difficulty = $("input:radio[name=difficulty]:checked").val();
    var jobOpen = $("input:radio[name=jobOpen]:checked").val();
    var resources = $("input:radio[name=resources]:checked").val();
    var whatToDo = $("input:radio[name=whatToDo]:checked").val();

    $(".name").text(name);

    if (name === "Java") {
      javaCounter++;
    } else if (name === "C") {
      cCounter++;
    } else if (name === "PHP") {
      phpCounter++;
    } else {
      rubyCounter++;
    }


  });
});
