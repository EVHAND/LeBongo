var colors = ["silver", "beige", "white"];
var colorIndex = 0;
function couleur() {
    var col = document.getElementById("corpsDePage");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}