$(document).ready(function() {
    console.log("i'm ready");

// This is an arry with starting buttons
var no = ["Shaking head no","Not Today","Nope","Maybe","Nah"];

// this function renders buttons
function renderButtons(){
    $("#gifButtons").empty();

// Loop through phrases

    for (var i=0; i< no.length; i++){
        var b= $("<button>");
        b.addClass("btn btn-secondary mr-2 mt-2 gifBtn");
        b.attr("data-name", no[i]);
        b.attr("type", "button");
        b.text(no[i]);
        $("#gifButtons").append(b);
    }
}
 // This function handles events where a movie button is clicked
 $("#phrase").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#phrase-input").val().trim();

    // Adding movie from the textbox to our array
   no.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });




















renderButtons();



















})