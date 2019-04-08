//Business logic//
$("input:text").ready(function () {
  $("#START").click(() => {
    var nameOne = $("input:text#player1name").val();
    $("#player1name").text(" " + nameOne);

    var nameTwo = $("input:text#player2name").val();
    $("#player2name").text(" " + nameTwo);
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
    if (randomNO1 === 1) {
      round1Total = 0;
      $("#round-total-1").text( ""+round1Total);
    } else {
      round1Total = randomNO1 + round1Total;
      $("#round-total-1").text( ""+round1Total);
    }
  });
});

$(document).ready(function () {
  $("#player2-roll").click(() => {
    var randomNO2 = Math.floor((Math.random() * 6) + 1)
    $("#die-roll-2").text(randomNO2);
    if (randomNO2 === 1) {
      round2Total = 0;
      $("#round-total-2").text( ""+round2Total);
    } else {
      round2Total = randomNO2 + round2Total;
      $("#round-total-2").text( ""+round2Total);
    }
  });
});
$(document).ready(function () {
  $("#player1-hold").click(() => {
    hold1 = round1Total + totalScore1;
    round1Total = 0;
    $("#total-score-1").text("" + hold1)
  })
})
$(document).ready(function () {
  $("#player2-hold").click(() => {
    hold2 = round2Total + totalScore2;
    round2Total = 0;
    $("#total-score-2").text("" + hold2)
  });
});