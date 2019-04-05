$(document).ready(function(){
    $("form#players").submit(function(event){
        event.preventDefault();
    })
    var player1 = $ (input#player1name).val()
    var player2 =$ (input#player2name).val()

})
$(document).ready(function(){
    $("player1-roll").click(()=> {
        var randomNo1 = Math.floor((Math.random() * 6) + 1);
        $("die-roll-1").text("Dice roll :" + randomNo1);
    });
});
$(document).ready(function(){
    $("player2-roll").click(()=> {
        var randomNo1 = Math.floor((Math.random() * 6) + 1);
        $("die-roll-2").text("Dice roll :" + randomNo2);
    });
});




