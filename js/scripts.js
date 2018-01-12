var javaCounter = 0;
var phpCounter = 0;
var rubyCounter = 0;
var cCounter = 0;

var jobDesc = "";
var difficulty = "";
var jobOpen = "";
var resources = "";
var whatToDo = "";

var surveyResultOutcome = 0;

function tally(jobDesc, difficulty, jobOpen, resources, whatToDo) {
  if (jobDesc === "Java") {
    javaCounter++;
  } else if (jobDesc === "C") {
    cCounter++;
  } else if (jobDesc === "PHP") {
    phpCounter++;
  } else {
    rubyCounter++;
  }
  if (difficulty === "Java") {
    javaCounter++;
  } else if (difficulty === "C") {
    cCounter++;
  } else if (difficulty === "PHP") {
    phpCounter++;
  } else {
    rubyCounter++;
  }
  if (jobOpen === "Java") {
    javaCounter++;
  } else if (jobOpen === "C") {
    cCounter++;
  } else if (jobOpen === "PHP") {
    phpCounter++;
  } else {
    rubyCounter++;
  }
  if (resources === "Java") {
    javaCounter++;
  } else if (resources === "C") {
    cCounter++;
  } else if (resources === "PHP") {
    phpCounter++;
  } else {
    rubyCounter++;
  }
  if (whatToDo === "Java") {
    javaCounter++;
  } else if (whatToDo === "C") {
    cCounter++;
  } else if (whatToDo === "PHP") {
    phpCounter++;
  } else {
    rubyCounter++;
  }

}

function surveyResult(javaCounter, phpCounter, rubyCounter, cCounter) {
  if (javaCounter > phpCounter && javaCounter > rubyCounter && javaCounter > cCounter) {
    surveyResultOutcome = 1;
  } else if (phpCounter > javaCounter && phpCounter > rubyCounter && phpCounter > cCounter) {
    surveyResultOutcome = 2;
  } else if (rubyCounter > javaCounter && rubyCounter > phpCounter && rubyCounter > cCounter) {
    surveyResultOutcome = 3;
  } else if (cCounter > javaCounter && cCounter > rubyCounter && cCounter > phpCounter) {
    surveyResultOutcome = 4;
  } else {
    surveyResultOutcome = 5;
  }
}

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
    jobDesc = $("input:radio[name=jobDesc]:checked").val();
    difficulty = $("input:radio[name=difficulty]:checked").val();
    jobOpen = $("input:radio[name=jobOpen]:checked").val();
    resources = $("input:radio[name=resources]:checked").val();
    whatToDo = $("input:radio[name=whatToDo]:checked").val();

    $(".name").text(name);

    tally(jobDesc, difficulty, jobOpen, resources, whatToDo);
    surveyResult(javaCounter, phpCounter, rubyCounter, cCounter);

    if (surveyResultOutcome === 1) {
      $("#resultJava").show();
    } else if (surveyResultOutcome === 2) {
      $("#resultPHP").show();
    } else if (surveyResultOutcome === 3) {
      $("#resultRuby").show();
    } else if (surveyResultOutcome === 4) {
      $("#resultC").show();
    } else {
      $("#resultSplit").show();
    }

  });
});
