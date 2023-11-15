function tube() {
    var address = prompt("Youtube Video URL?");
    var boolean = address.startsWith("https://www.youtube.com/");
    if (boolean === true) {
        extract(address)
    } else {
        alert("Not a valid youtube URL")
    }
}

function extract(address) {
    newString = address.replace("https://www.youtube.com/watch?v=", "");
    videoid = newString.replace("&authuser=0", "");
    embed = "'" + "https://www.youtube.com/embed/" + videoid + "'"
    string1 = '<iframe width="853" height="480" src='
    string2 = ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    iframe = string1 + embed + string2
    alert(iframe)
}


/* <iframe width="853" height="480" src="https://www.youtube.com/embed/EtNKG9LUz-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */


