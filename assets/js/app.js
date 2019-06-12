$(document).ready(function() {
    console.log("i'm ready");

// This is an arry with starting buttons
var no = ["Shaking head no","Not Today","Nope","Maybe","Nah"];


function displayGif(){
    var gifOutput = $(this).attr("data-name");
    var queryURL ="http://api.giphy.com/v1/gifs/search?q="+gifOutput+"&api_key=0anDkstfLhUnDoq0WlArC7SckFK8E9Ea&limit=5";
// Ajax call
$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    // var results = response.data;
    console.log(response.data);

    for(var i=0;i<5;i++){

      var gifDiv = $("<div class = 'meme'>"); 
      var gifImage = $("<img>");
      gifImage.addClass("image float-left");
      gifImage.attr("src", response.data[i].images.fixed_height_still.url);
      gifImage.attr("data-still",response.data[i].images.fixed_height_still.url);
      gifImage.attr("data-animate",response.data[i].images.fixed_height.url)
      gifImage.attr("data-state","still")
      gifDiv.append(gifImage);
      $("#memeHolder").append(gifDiv);
    } 
  });
}




// this function renders buttons
function renderButtons(){
    $("#gifButtons").empty();

// Loop through phrases

    for (var i=0; i< no.length; i++){
        var b= $("<button>");
        b.addClass("btn btn-secondary mr-2 mt-2");
        b.attr("id","gifBtn")
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


 function changeState(){
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
};








renderButtons();

$(document).on("click", "#gifBtn", displayGif);
$(document).on("click", ".image", changeState);





















})