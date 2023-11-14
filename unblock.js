function tube() {
    var address = prompt("Youtube Video URL?");
    var boolean = address.startsWith("https://www.youtube.com/");
    if (boolean === true) {
        alert("is true")
    } else {
        alert("its false")
    }
}



