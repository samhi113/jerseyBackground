const jerseyInfo = {
    //"jersey" : [Font Family, number color, number backdrop, name color, background]
    "ATLAssBack": ["Knicks", "#c8102e", "#ffcc00", "#c8102e","#eeeeee"],
    "ATLIcoBack": ["Knicks", "#ffffff", "#ffcc00", "#ffffff","#c8102e"],
    "ATLStaBack": ["Knicks", "#ffcc00", "#ffffff", "#ffcc00","#111111"],
    "ATLCitBack": [["Futura PT", "Futura", "Futura1"], "#eeeeee", "#e99b7c", "#eeeeee","#222222"],
    "BOSAssBack": ["Celtics", "#007d28", "transparent", "#007d28","#eeeeee"],
    "BOSIcoBack": ["Celtics", "#eeeeee", "transparent", "#eeeeee","#007d28"],
    "BOSStaBack": ["Celtics", "#007d28", "transparent", "#007d28","#000000"],
    "BOSCitBack": ["Celtics", "#c89c4b", "#111111", "#111111","#eeeeee"],
    "BKNAssBack": ["Trailblazers", "#111111", "transparent", "#111111","#eeeeee"],
    "BKNIcoBack": ["Trailblazers", "#eeeeee", "transparent", "#eeeeee","#080808"],
    "BKNStaBack": ["Trailblazers", "#111111", "#eeeeee", "#eeeeee","#111111"],
    "BKNCitBack": ["Trailblazers", "#eeeeee", "transparent", "#eeeeee","#080808"],
    "CHAAssBack": ["Hornets", "#00798d", "#170860", "#00798d","#ffffff"],
    "CHAIcoBack": ["Hornets", "#ffffff", "#170860", "#ffffff","#00798d"],
    "CHAStaBack": ["Hornets", "#00798d", "#eeeeee", "#eeeeee","#170860"],
    "CHACitBack": ["Hornets", "#3322bb", "#ffffff", "#3322bb","#ffdd22"],
    "CHIAssBack": ["Bulls", "#ce0028", "#000000", "#ce0028","#ffffff"],
    "CHIIcoBack": ["Bulls", "#000000", "#ffffff", "#ffffff","#ce0028"],
    "CHIStaBack": ["Bulls", "#ce0028", "#ffffff", "#ffffff","#000000"],
    "CHICitBack": ["Bulls", "#3fb0df", "#ce0028", "#3fb0df","#222222"],
    "CLEAssBack": ["Cavaliers", "#b5985b", "#72253d", "#72253d","#ffffff"],
    "CLEIcoBack": ["Cavaliers", "#b5985b", "#b5985b", "#b5985b","#72253d"],
    "CLEStaBack": ["Cavaliers", "#b5985b", "#b5985b", "#b5985b","#222222"],
    "CLECitBack": ["Cavaliers", "#b5985b", "#ffffff", "#ffffff","#dd7755"],
    "CLEClaBack": ["Cavaliers", "#ffffff", "#b5985b", "#ffffff","#001E45"],
    "DALAssBack": ["Mavericks", "#1752b3", "#1752b3", "#081b3c","#eeeeee"],
    "DALIcoBack": ["Mavericks", "#8d9093", "#aaaaaa", "#aaaaaa","#1752b3"],
    "DALStaBack": ["Mavericks", "#ffffff", "transparent", "#ffffff","#081b3c"],
    "DALCitBack": [["Futura PT", "Futura", "Futura1"], "#aaaaaa", "#1752b3", "#aaaaaa","#222222"],
    "DALClaBack": [["TW Cen MT", "TW Cen"], "#ffffff", "#1752b3", "#ffffff","#008733"],
    "DENCitBack": ["Nuggets", "#ffffff", "#111111", "#ffffff","#000000"],
    "INDAssBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": [["Agency FB", "Agency1"], "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": [["Agency FB", "Agency1"], "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "INDCitBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "OKCAssBack": [["Assiduous", "Assiduous1"], "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": [["Assiduous", "Assiduous1"], "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCCitBack": [["Assiduous", "Assiduous1"], "#ffffff", "#ef3b24", "#ffffff", "#0d1d46"],
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
document.getElementById("topSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Top.png`);
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