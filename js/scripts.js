$("input:text#playerOne").ready(function () {
    $("#START").click(() => {
        var nameOne = $("input:text#playerOne").val();
        $("#player1").text("PLAYER ONE: " + nameOne);

        var nameTwo = $("input:text#playerTwo").val();
        $("#player2").text("PLAYER TWO: " + nameTwo);
    });
});
var playerOne1 = []
var playerTwo2 = []
var round1Total = 0
var round2Total = 0




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
});
$(document).ready(function () {
    $("#player2-roll").click(() => {
        var randomNO2 = Math.floor((Math.random() * 6) + 1)
        $("#die-roll-2").text(randomNO2);
        if (random2 === 1) {
            round2Total = 0;
            $("#round-total-2").text("R: " + round2Total);
          } else {
            round2Total = random2 + round2Total;
            $("#round-total-2").text("Round total: " + round2Total);
          }
        });
    });
});