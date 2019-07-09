
let animals = ["Esctasy Cat", "Stoned Dog", "Family-Orientated Meerkat", "Drunk Elephant", "High Lemur"];

//Global Functions==============================================================================

//Initial Button Renderer
renderButtons();

//New Button
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    
    let animal = $("#gif-input").val().trim();
    animals.push(animal);

    renderButtons();
})

//Button Click
$(document).on("click", ".gif-btn", displayGif);

//FUNCTIONS=====================================================================================
function displayGif() {

    let animal = $(this).attr("data-name");
    let queryURL = "" + animal + "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    })
}

function renderButtons() {
    
    //Delete Buttons
    $("#buttons-view").empty();

    // LOOP \ Button Generator
    for (let i=0 ; i < animals.length; i ++) {
        let a = $("<button>");
        a.addClass("animal-btn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }
}

