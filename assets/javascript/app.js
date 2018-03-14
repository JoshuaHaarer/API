// API KEY -->  BmNmE0jnbbN0OGqvHxZyUCk0TPKj5GMc



var gif = [];
var search = $("#search-input").val().trim();

$("#add-gif").on("click", function (search) {
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BmNmE0jnbbN0OGqvHxZyUCk0TPKj5GMc&tag= " + search;


    console.log(search);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        
        var results = response.data;
        var imageUrl = response.images.url;
        $("#gif-view").append(imageUrl);

        console.log(response);
    })
});

function renderButtons() {
    $("#button").empty();
    for (var i = 0; i < gif.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn btn-dark");
        newButton.attr("data-name", gif[i]);
        newButton.text(gif[i]);
        $("#button").append(newButton);
    }
}
$("#search-input").on("click", function (event) {
    event.preventDefault();
    gif.push(search);
    renderButtons();
});
renderButtons();