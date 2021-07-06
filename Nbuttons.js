var correctButton = 0;
function addButtons() {
    var amountOfButtons = document.getElementById("inputNumber").value;
    var removeElement = document.getElementById("inputNumber");
    removeElement.remove();
    removeElement = document.getElementById("startButton");
    removeElement.remove();
    for (var i = 0; i < amountOfButtons; ++i){
        var bttn = document.createElement('button');
        bttn.setAttribute("id", i + 1);
        bttn.setAttribute("class", "btn btn-secondary");
        bttn.setAttribute("onclick", "checkButton(this.id)");
        bttn.textContent = i + 1;
        var insertHere = document.getElementById("guessTheButton");
        insertHere.appendChild(bttn);
    }
    correctButton = Math.floor(Math.random() * amountOfButtons) + 1;
    if (amountOfButtons < 2) {
        document.getElementById("guessTheButton").innerHTML = "Choose at least 2 buttons :)";
    }
}

function checkButton(buttonId) {
    var checkClickedButton = buttonId;
    if (correctButton == checkClickedButton) {
        document.getElementById(buttonId).className = "btn btn-success";
        document.getElementById("message").innerHTML = "Correct ! :)";
    } else {
        document.getElementById(buttonId).className = "btn btn-danger";
        document.getElementById("message").innerHTML = "Wrong ! :(";
    }
}

function restartEverything() {
    location.reload();
}