//Business logic//
$("input:text").ready(function () {
  $("#START").click(() => {
    var nameOne = $("input:text#player1name").val();
    $("#player1name").text("PLAYER 1 NAME " + nameOne);

    var nameTwo = $("input:text#player2name").val();
    $("#player2name").text("PLAYER 2 NAME: " + nameTwo);
  });
});

var round1Total = 0
var round2Total = 0
var totalScore1 = 0
var totalScore2 = 0
var hold1 = 0
var hold2 = 0
//U.I logic//

$(document).ready(function () {
  $("#player1-roll").click(() => {
    var randomNO1 = Math.floor((Math.random() * 6) + 1)
    $("#die-roll-1").text(randomNO1);
    if (random1 === 1) {
      round1Total = 0;
      $("#round-total-1").text("Round total: " + round1Total);
    } else {
      round1Total = random1 + round1Total;
      $("#round-total-1").text("Round total: " + round1Total);
    }
  });
});

$(document).ready(function () {
  $("#player2-roll").click(() => {
    var randomNO2 = Math.floor((Math.random() * 6) + 1)
    $("#die-roll-2").text(randomNO2);
    if (random2 === 1) {
      round2Total = 0;
      $("#round-total-2").text("Round total: " + round2Total);
    } else {
      round2Total = random2 + round2Total;
      $("#round-total-2").text("Round total: " + round2Total);
    }
  });
});
$(document).ready(function () {
      $("#player1-hold").click(() => {
        hold1 = round1Total + totalScore1;
        round1Total = 0;
        $("#totalScore").text("Total score" + hold1)
      })
    })
    $(document).ready(function () {
        $("#player2-hold").click(() => {
          hold1 = round1Total + totalScore1;
          round1Total = 0;
          $("#totalScore").text("Total score" + hold2)
        })
      })