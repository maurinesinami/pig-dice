$(document).ready(function(){
    $("#player1-roll").click(()=>{
        var randomNO1 = Math.floor((Math.random() * 6)+ 1)
        $("#die-roll-1").text( randomNO1);
    });
});
$(document).ready(function(){
    $("#player2-roll").click(()=>{
        var randomNO2 = Math.floor((Math.random() * 6)+ 1)
        $("#die-roll-2").text( randomNO2);
    });
});

