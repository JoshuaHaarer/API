// API KEY -->  BmNmE0jnbbN0OGqvHxZyUCk0TPKj5GMc


var search;
var gif = [];

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BmNmE0jnbbN0OGqvHxZyUCk0TPKj5GMc&tag=" + search;

$("#add-gif").on("click", function () {

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        var imageUrl = response.data.image_original_url;
        var search = $("<img>");
        search.attr("src", imageUrl);
        search.attr("alt", "cat image");
        $("#gif-view").prepend(search);

        console.log(response);
    })
});

function renderButtons() {
    $(".form-inline").empty();
    for (var i = 0; i < gif.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-dark");
        a.attr("data-name", gif[i]);
        a.text(gif[i]);
        $(".form-inline").append(a);
    }
}
$("#search-input").on("click", function (event) {
    event.preventDefault();
    var gifSearch = $("#search-input").val().trim();
    gif.push(gifSearch);
    renderButtons();
});
renderButtons();