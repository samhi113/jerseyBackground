const jerseyInfo = {
    //"jersey" : [Font Family, main text, number backdrop]
    "INDAssBack": ["Agency FB", "#0c2340", "#ffd520"],
    "INDIcoBack": ["Agency FB", "#ffd520", "#fff"],
    "INDStaBack": ["Agency FB", "#0c2340", "#fff"],
    "OKCAssBack": ["Assiduous", "#007dc3", "#ef3b24"],
    "OKCIcoBack": ["Assiduous", "#fff", "#ef3b24"],
}

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

//#INDIcoBackHiggins-11

let jerseyData = window.location.hash.replace('#', '');
console.log(jerseyData);

let dash = jerseyData.indexOf("-");
let dash1 = dash + 1

let jerseyType = jerseyData.slice(0, 10);
let name = jerseyData.slice(10, dash);
let number = jerseyData.slice(dash1);

document.body.style.backgroundImage = (`url('./jerseys/${jerseyType}.png`);

nameDisplay.style.fill = jerseyInfo[jerseyType][1];
        
numberDisplay.style.fontFamily = jerseyInfo[jerseyType][0];
numberDisplay.style.color = jerseyInfo[jerseyType][1];
numberDisplay.style.webkitTextStrokeColor = jerseyInfo[jerseyType][2]

nameDisplay.innerHTML = name;
numberDisplay.innerHTML = number;