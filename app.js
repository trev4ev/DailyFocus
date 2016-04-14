var day = localStorage.getItem("day");
var date = new Date();
var today = (date.getMonth()+1).toString() + date.getDate().toString();

if(day == today && localStorage.getItem("goal") != null {
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
    document.title = localStorage.getItem("goal");
    var h1 = $("#title");
    h1.text(localStorage.getItem("goal"));
    h1.css("fontSize","18vh");
    h1.css("marginTop","35vh");
    $("#textInput").css("visibility","hidden");
}