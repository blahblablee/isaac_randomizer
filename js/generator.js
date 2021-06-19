var selectedCharacters = new Array;
var selectedEndings = new Array;

function generate() {
    createSelectionSets();
    var character = selectedCharacters[Math.floor(Math.random()*selectedCharacters.length)];
    var characterImage = "imgs/character_heads/" + character.toLowerCase().trim() + ".png";
    var ending = selectedEndings[Math.floor(Math.random()*selectedEndings.length)];
    var endingImage = "imgs/ending_notes/" + ending.toLowerCase().trim() + ".webp";


    $("#output").html( "<img id='selectedCharacter'>" + character + " to " + ending + "<img height='25' id='selectedEnding'>");
    $("#output img").attr("src", characterImage);
    if (character.includes("Tainted")){
        $("#output img:first").css('filter', 'invert(100%)');
    }
    $("#output #selectedEnding").attr("src", endingImage);

}

function createSelectionSets() {
    selectedCharacters = [];
    $("#characters input").each(function(index) {
        if ($(this).is(':checked')) {
            selectedCharacters.push($(this).next().html());
        }
    });

    selectedEndings = [];
    $("#endings input").each(function(index) {
        if ($(this).is(':checked')) {
            selectedEndings.push($(this).next().html());
        }
    });
}