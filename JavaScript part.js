function addButtons() {
    var amountOfButtons = document.getElementById("inputNumber").value;
    var removeElement = document.getElementById("inputNumber");
    removeElement.remove();
    removeElement = document.getElementById("startButton");
    removeElement.remove();
    for(var i = 0; i < amountOfButtons; ++i){
        var bttn = document.createElement('button');
        bttn.setAttribute("id", i + 1);
        bttn.setAttribute("class", "button");
        bttn.onclick = checkButton;
        bttn.textContent = i + 1;
        var insertHere = document.getElementById("guessTheButton");
        insertHere.appendChild(bttn);
    }
    if(amountOfButtons <= 2) {
        document.getElementById("guessTheButton").innerHTML = "Choose at least 3 buttons :)";
    }
    return false;
}

function checkButton() {
    var correctButton = Math.floor(Math.random() * 3) + 1;
    var checkClickedButton = 1;
    if(correctButton == checkClickedButton) {
        document.getElementById("guessTheButton").innerHTML = "Correct ! :)";
    } else {
        document.getElementById("guessTheButton").innerHTML = "Wrong ! :(";
    }
    return false;
}

function restartEverything() {
    location.reload();
    return false;
}