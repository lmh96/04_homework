var targetPoints = Math.floor((Math.random() * 200) + 100);
$("#targetPoints").text(targetPoints);
var playerPoints = 0;
$("#playerPoints").text(playerPoints);

var gemVals = [
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1
];

for (var i = 0; i < gemVals.length; i ++)
{
    var gemBtn = $("<img>");
    gemBtn.addClass("")
    gemBtn.attr("src", "https://clipground.com/images/gem-stone-clipart-9.jpg");
    gemBtn.appendTo("gemDiv");
}

for(var i = 0; i < gemVals.length; i++)
{
    var gemBtn = $("<img>");
    gemBtn.addClass("gem");

    gemBtn.attr("src", "https://clipground.com/images/gem-stone-clipart-9.jpg");
    gemBtn.css("height", "100");
    gemBtn.css("width", "120");
    gemBtn.css("margin", "10px");

    gemBtn.attr("gemVal", gemVals[i]);

    gemBtn.appendTo("#gemDiv");
}

$(".gem").on("click", function() {
    playerPoints += parseInt($(this).attr("gemVal"));
    $("#playerPoints").text(playerPoints);

    if(playerPoints > targetPoints)
    {
        alert("You lost with " + playerPoints + " points.");
        document.location.reload(true);
    }
    else if (playerPoints === targetPoints)
    {
        alert("You won with " + targetPoints + " points!");
        document.location.reload(true);
    }
});