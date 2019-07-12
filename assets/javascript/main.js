
let heros = ["T-800", "John McClane", "James Bond", "Rambo", "Snake Plissken"];

//Global Functions==============================================================================

//Initial Button Renderer
renderButtons();

//New Button
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    
    let hero = $("#gif-input").val().trim();
    heros.push(hero);

    renderButtons();
})


//

//FUNCTIONS=====================================================================================
$("button").on("click", function() {

    let hero = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&api_key=yDvV03g17sVGq7N7CrJ0YBfZhjrGSj2T&q=" + hero;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response)

        results = response.data

        for (let i=0; i < results.length; i++) {
            let heroDiv = $("<div class = 'gifs'>");
            // let p = $("<p>").text("Rating: " + results[i].rating);
            
            let heroImage = $("<img>");
            heroImage.attr("src", results[i].images.fixed_height.url);

            // heroDiv.append(p);
            heroDiv.append(heroImage);
            $("#gifs-view").append(heroDiv);

        }
    })
});

function renderButtons() {
    
    //Delete Buttons
    $("#buttons-view").empty();

    // LOOP \ Button Generator
    for (let i=0 ; i < heros.length; i ++) {
        let a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", heros[i]);
        a.text(heros[i]);
        $("#buttons-view").append(a);
    }
}

