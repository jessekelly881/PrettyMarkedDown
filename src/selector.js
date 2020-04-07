function swapStyleSheet(sheet) {
    document.getElementById("theme-stylesheet").setAttribute("href", sheet);
}

function ready () {
    var elemDiv = document.createElement('div');
    elemDiv.textContent="Next  >"
    elemDiv.className="selector"
    elemDiv.onclick=function () { swapStyleSheet() }

    document.body.appendChild(elemDiv);
}
