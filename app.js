var day = localStorage.getItem("day");
var date = new Date();
var today = (date.getMonth()+1).toString() + date.getDate().toString();

if(day == today && localStorage.getItem("goal") != null) {
    goalAdded();
}

$('#textInput').keypress( function(e) {
    if(e.keyCode == 13) {
        if($("#textInput").val().trim() != "")
        {
            localStorage.setItem("goal",$("#textInput").val().trim());
            localStorage.setItem("day",today);
            goalAdded();
        }
    }
});

function goalAdded() {
    var h1 = $("#title");
    h1.text(localStorage.getItem("goal"));
    h1.css("fontSize","18vh");
    h1.css("marginBottom","0");
    
    var textInput = $("#textInput");
    textInput.css("visibility","hidden");
    textInput.css("height","0");
    
    var h2 = $("#header");
    h2.css("visibility","visible");
    
    $("#resetButton").css("visibility","visible");
}

function reset() {
    localStorage.setItem("goal",null);
    localStorage.setItem("day",null);
    
    var h1 = $("#title");
    h1.text("What is your focus for today?");
    h1.css("fontSize","10vh");
    h1.css("marginBottom","4.5vh");
    
    $("#textInput").css("visibility","visible");
    $("#textInput").css("height","5vh");
    
    var h2 = $("#header");
    h2.css("visibility","hidden");
    $("#resetButton").css("visibility","hidden");
}