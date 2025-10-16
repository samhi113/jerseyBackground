const jerseyInfo = {
    //"jersey" : [Font Family, number color, number backdrop, name color, background]
    "ATLAssBack": ["Knicks", "#c8102e", "#ffcc00", "#c8102e","#eeeeee"],
    "ATLIcoBack": ["Knicks", "#ffffff", "#ffcc00", "#ffffff","#c8102e"],
    "ATLStaBack": ["Knicks", "#ffcc00", "#ffffff", "#ffcc00","#111111"],
    "ATLCitBack": ["Futura", "#eeeeee", "#e99b7c", "#eeeeee","#222222"],
    "BOSAssBack": ["Celtics", "#007d28", "transparent", "#007d28","#eeeeee"],
    "BOSIcoBack": ["Celtics", "#eeeeee", "transparent", "#eeeeee","#007d28"],
    "BOSStaBack": ["Celtics", "#007d28", "transparent", "#007d28","#000000"],
    "BOSCitBack": ["Celtics", "#c89c4b", "#111111", "#111111","#eeeeee"],
    "BKNAssBack": ["Trailblazers", "#111111", "transparent", "#111111","#eeeeee"],
    "BKNIcoBack": ["Trailblazers", "#eeeeee", "transparent", "#eeeeee","#080808"],
    "BKNStaBack": ["Trailblazers", "#111111", "#eeeeee", "#eeeeee","#111111"],
    "BKNCitBack": ["Trailblazers", "#eeeeee", "transparent", "#eeeeee","#080808"],
    "INDAssBack": ["Agency FB", "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": ["Agency FB", "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": ["Agency FB", "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "INDCitBack": ["Agency FB", "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "OKCAssBack": ["Assiduous", "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": ["Assiduous", "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCCitBack": ["Assiduous", "#ffffff", "#ef3b24", "#ffffff", "#0d1d46"],
}

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

//#INDIcoBackHiggins-11

let jerseyData = window.location.hash.replace('#', '');
console.log(jerseyData);

let dash = jerseyData.indexOf("-");
let dash1 = dash + 1;

let jerseyType = jerseyData.slice(0, 10);
let name = jerseyData.slice(10, dash);
let number = jerseyData.slice(dash1);

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