const jerseyInfo = {
    //"jersey" : [Font Family, number color, number backdrop, name color, background]
    "INDAssBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": [["Agency FB", "Agency1"], "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": [["Agency FB", "Agency1"], "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "INDCitBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "OKCAssBack": ["Assiduous1", "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": ["Assiduous1", "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCCitBack": ["Assiduous1", "#ffffff", "#ef3b24", "#ffffff", "#0d1d46"],
}

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

//#INDIcoBackHiggins-11

let jerseyData = window.location.hash.replace('#', '');
console.log(jerseyData);

let nameEnd = jerseyData.indexOf("}");
let nameEnd1 = nameEnd + 1;

let jerseyType = jerseyData.slice(0, 10);
let name = jerseyData.slice(10, nameEnd);
let number = jerseyData.slice(nameEnd1);

document.body.style.backgroundColor = jerseyInfo[jerseyType][4];

document.body.style.backgroundImage = (`url('./jerseys/${jerseyType}.png`);
document.getElementById("leftSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Left.png`);
document.getElementById("rightSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Right.png`);

nameDisplay.style.fill = jerseyInfo[jerseyType][3];

numberDisplay.style.fontFamily = jerseyInfo[jerseyType][0];
numberDisplay.style.color = jerseyInfo[jerseyType][1];
numberDisplay.style.webkitTextStrokeColor = jerseyInfo[jerseyType][2]

console.log(name.indexOf("%"))

function fixName() {
    try {
        let space = name.indexOf("%");
        if (space === -1) {
            nameDisplay.innerHTML = name;
            console.log(name);
            return;
        } else if (space === 0) {
            name = name.slice(space + 3);
        }

        if (name.slice(space, space + 3) === "%20") {
            name = name.slice(0, space) + " " + name.slice(space + 3);
        }
        
        fixName(); // Recursive call until all % are replaced
    } catch (error) {
        nameDisplay.innerHTML = name;
        console.warn(error);
        console.log(name);
        return;
    }
}

fixName();

numberDisplay.innerHTML = number;