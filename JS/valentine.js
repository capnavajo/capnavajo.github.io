function hide() {
    document.getElementById("will").hidden = true;
    yip.style.visibility = "visible";

    let audio = new Audio("/Audio/LaufeyValentine.mp3");
    audio.play();
}

function fog() {
    document.getElementById("will").hidden = true;
    document.getElementById("yip").hidden = true;
    document.getElementById( 'yip' ).style.display = 'none';
    kitty.style.visibility = "visible";

    let audio = new Audio("/Audio/Foghorn.mp3");
    audio.play();
}

function cute() {
    document.getElementById("will").hidden = true;
    document.getElementById("yip").hidden = true;
    document.getElementById("kitty").hidden = true;
    document.getElementById('yip').style.display = 'none';
    hot.style.visibility = "visible";

    let audio = new Audio("/Audio/GeorgeMichaelCarelessWhisper.mp3");
    audio.play();
}