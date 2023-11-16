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
    var video = stringToHTML(iframe)
    var win = window.open()
    win.document.body.appendChild(video)
}

var support = (function () {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
        parser.parseFromString('x', 'text/html');
    } catch (err) {
        return false;
    }
    return true;
})();

/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
var stringToHTML = function (str) {

    // If DOMParser is supported, use it
    if (support) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    }

    // Otherwise, fallback to old-school method
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;

};



/* <iframe width="853" height="480" src="https://www.youtube.com/embed/EtNKG9LUz-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */


