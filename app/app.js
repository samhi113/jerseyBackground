const windowWidth = window.innerWidth;

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

const allJerseyTypes = document.querySelectorAll("option");

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
    "INDAssBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": [["Agency FB", "Agency1"], "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": [["Agency FB", "Agency1"], "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "INDCitBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "OKCAssBack": ["Assiduous1", "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": ["Assiduous1", "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCCitBack": ["Assiduous1", "#ffffff", "#ef3b24", "#ffffff", "#0d1d46"],
}

for (let i = 1; i < allJerseyTypes.length; i++) {
  const element = allJerseyTypes[i];
  const elementName = element.value.trim(); // safer than innerHTML

  const info = jerseyInfo[elementName];
  if (!info) {
    console.warn(`No jersey info found for: ${elementName}`);
    continue;
  }

  const [fontFamily, numberColor, numberBackdrop, nameColor, background] = info;

  element.style.fontFamily = fontFamily;
  element.style.color = nameColor;
  element.style.backgroundColor = background;
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();

  const jerseyType = document.getElementById("jerseyType").value;

  if (jerseyType == "default") {
    alert("Pick a jersey type to load!")
  } else {
    document.getElementById("jersey").style.backgroundImage = (`url('./jerseys/${jerseyType}.png'), linear-gradient(0deg, ${jerseyInfo[jerseyType][4]} 0%, ${jerseyInfo[jerseyType][4]} 100%)`);
    document.getElementById("leftSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Left.png`);
    document.getElementById("rightSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Right.png`);
        
    nameDisplay.style.fill = jerseyInfo[jerseyType][3];
        
    numberDisplay.style.fontFamily = jerseyInfo[jerseyType][0];
    numberDisplay.style.color = jerseyInfo[jerseyType][1];
    numberDisplay.style.webkitTextStrokeColor = jerseyInfo[jerseyType][2]
  }
    var name = document.getElementById("jerseyNameInput").value;
    var number = document.getElementById("jerseyNumberInput").value;

    nameDisplay.innerHTML = name;
    numberDisplay.innerHTML = number;
    document.getElementById("fullScreen").setAttribute("href", `fullScreen.html#${jerseyType}${name}}${number}`)
});