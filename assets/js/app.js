$(document).ready(function() {
    console.log("i'm ready");

// This is an arry with starting buttons
var no = ["Shaking head no","Not Today","Nope","Maybe","Nah"];


function displayGif(){
    var gifOutput = $(this).attr("data-name");
    var queryURL ="http://api.giphy.com/v1/gifs/search?q="+gif+"&api_key=0anDkstfLhUnDoq0WlArC7SckFK8E9Ea&limit=5";
// Ajax call
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
    var gifDiv = $("<div class = 'meme'>");

  });

}



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
 // This function turns input from form into a button
 $("#phrase").on("click", function(event) {
    event.preventDefault();

    var gif = $("#phrase-input").val().trim();

    no.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });





















renderButtons();



















})