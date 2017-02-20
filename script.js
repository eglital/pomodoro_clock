$(document).ready(function(){
  var breakL = 5;
  var sessionL = 25;
  var seconds = 0;
  var minutes = 25;
  var counting;
  var pause = true;
  var audio = $("audio")[0];

  //click minus
  $("#minusB").on("click", function(){
    if (breakL > 1) {
    breakL -= 1;
    $("#break").text(breakL);
    }
  });

  $("#minusS").on("click", function(){
    if (sessionL > 1) {
    sessionL -= 1;
    $("#session").text(sessionL);
    }
  });

  //click plus
  $("#plusB").on("click", function(){
    breakL += 1;
    $("#break").text(breakL);
  });
  $("#plusS").on("click", function(){
    sessionL += 1;
    $("#session").text(sessionL);
  });

  //click apply
  $("#apply").on("click", function(){
    minutes = sessionL;
    seconds = 0;
    $("#timer").html(minutes + ":00");
    $("#title").text("Work!");
    clearInterval(counting);
    pause = true;
  });

  //click restart
  $("#restart").on("click", function(){
    minutes = sessionL;
    seconds = 0;
    $("#timer").html(minutes + ":00");
    $("#title").html("Work!");
    pause = true;
    clearInterval(counting);
  });

   //click reset
  $("#reset").on("click", function(){
    sessionL = 25;
    breakL = 5;
    minutes = 25;
    seconds = 0;
    $("#session").html(sessionL);
    $("#break").html(breakL);
    clearInterval(counting);
    $("#timer").html("25:00");
    $("#title").html("Work!");
    pause = true;
  });

  //countdown function
  var countdown = function(){

    //if timer reaches zero
    if (minutes === 0 && seconds === 1){
      audio.play();
      seconds -= 1;
    } else if (minutes === 0 && seconds === 0){
      if ($("#title").text() === 'Work!'){
        $("#title").text("Break!");
        minutes = breakL;
        seconds = 0;
        $("#timer").html(minutes + ":00");
      } else {
        $("#title").text("Work!");
        minutes = sessionL;
        seconds = 0;
        $("#timer").html(minutes + ":00");
      }
    }

    //count down otherwise
    else {
      if (seconds === 0){
        seconds = 59;
        minutes -= 1;
        $("#timer").html(minutes + ":59");
      } else if (seconds < 10){
        seconds -= 1;
        $("#timer").html(minutes + ":0" + seconds);
      } else {
        seconds -= 1;
        $("#timer").html(minutes + ":" + seconds);
      }
    }
  };

  //click on the clock
  $(".clock").on("click", function(){
    if (pause){
      counting = setInterval(countdown, 1000);
      pause = false;
    } else {
      clearInterval(counting);
      pause = true;
    }
  });

});