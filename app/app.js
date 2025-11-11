const windowWidth = window.innerWidth;

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

const allJerseyTypes = document.querySelectorAll("option");

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
    "CHACitBack": ["Hornets", "#13193d", "#ffffff", "#13193d","#ffcc00"],
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
    "DENAssBack": ["Nuggets", "#0d2240", "#ffc627", "#8c1e2e","#eeeeee"],
    "DENIcoBack": ["Nuggets", "#ffffff", "#8c1e2e", "#ffc627","#0d2240"],
    "DENStaBack": ["Nuggets", "#ffc627", "#8c1e2e", "#ffc627","#1a428a"],
    "DENCitBack": ["Nuggets", "#ffffff", "#111111", "#ffffff","#222222"],
    "DETAssBack": ["Pistons", "#C8102E", "#1d428a", "#1d428a","#f8f8f8"],
    "DETIcoBack": ["Pistons", "#C8102E", "#ffffff", "#ffffff","#1d428a"],
    "DETStaBack": ["Celtics", "#000000", "#ffffff", "#ffffff","#111111"],
    "DETCitBack": ["Pistons", "#ffffff", "#006D8A", "#ffffff","#222222"],
    "GSWAssBack": ["Alata", "#1d428a", "transparent", "#1d428a","#f8f8f8"],
    "GSWIcoBack": ["Alata", "#fdb927", "transparent", "#fdb927","#1d428a"],
    "GSWStaBack": ["Alata", "#fdb927", "transparent", "#fdb927","#111111"],
    "GSWCitBack": ["Alata", "#774433", "transparent", "#774433","#ffeedd"],
    "HOUAssBack": [["Agency FB", "Agency1"], "#C81C2B", "transparent", "#C81C2B","#f8f8f8"],
    "HOUIcoBack": [["Agency FB", "Agency1"], "#f8f8f8", "transparent", "#f8f8f8","#C81C2B"],
    "HOUStaBack": [["Agency FB", "Agency1"], "#f8f8f8", "transparent", "#f8f8f8","#222222"],
    "HOUCitBack": ["Celtics", "#C81C2B", "#0043AD", "#C81C2B","#f8f8f8"],
    "INDAssBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": [["Agency FB", "Agency1"], "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": [["Agency FB", "Agency1"], "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "INDCitBack": [["Agency FB", "Agency1"], "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "LACAssBack": ["Intercom", "#cf0629", "transparent", "#cf0629","#f8f8f8"],
    "LACIcoBack": ["Intercom", "#f8f8f8", "transparent", "#f8f8f8","#031c3e"],
    "LACStaBack": ["Intercom", "#f8f8f8", "transparent", "#f8f8f8","#cf0629"],
    "LACCitBack": [["Agency FB", "Agency1"], "#ffffff", "transparent", "#ffffff","#fd4b04"],
    "LALAssBack": ["Lakers", "#542083", "#fdb922", "#542083","#f8f8f8"],
    "LALIcoBack": ["Lakers", "#542083", "#ffffff", "#542083","#fdb922"],
    "LALStaBack": ["Lakers", "#f8f8f8", "#fdb922", "#f8f8f8","#542083"],
    "LALCitBack": ["Lakers", "#542083", "#fdb922", "#fdb922","#111111"],
    "MEMAssBack": ["Grizzlies", "#0a103d", "#f8f8f8", "#0a103d","#f8f8f8"],
    "MEMIcoBack": ["Grizzlies", "#6cb6e6", "#0a103d", "#6cb6e6","#0a103d"],
    "MEMStaBack": ["Grizzlies", "#0a103d", "#6cb6e6", "#0a103d","#6cb6e6"],
    "MEMCitBack": ["Grizzlies", "#0a103d", "#f8f8f8", "#0a103d","#f8f8f8"],
    "MEMClaBack": ["Celtics", "#ffffff", "#00B2A9", "#ffffff","#222222"],
    "MIAAssBack": ["Heat", "#99002A", "#111111", "#111111","#f8f8f8"],
    "MIAIcoBack": ["Heat", "#f8f8f8", "#99002A", "#f8f8f8","#080808"],
    "MIAStaBack": ["Heat", "#f8f8f8", "#111111", "#f8f8f8","#99002A"],
    "MIACitBack": ["Heat", "#db3eb1", "#41B6E6", "#f8f8f8","#111111"],
    "MILAssBack": ["Bucks", "#195331", "#E1CB9F", "#195331","#f8f8f8"],
    "MILIcoBack": ["Bucks", "#f8f8f8", "#E1CB9F", "#f8f8f8","#195331"],
    "MILStaBack": ["Bucks", "#E1CB9F", "#195331", "#E1CB9F","#111111"],
    "MILCitBack": ["Bucks", "#195331", "#314BB1", "#195331","#EEE1C6"],
    "MINAssBack": ["Starz", "#1E6193", "#041e3e", "#041e3e","#f8f8f8"],
    "MINIcoBack": ["Starz", "#f8f8f8", "#1E6193", "#f8f8f8","#0a103d"],
    "MINStaBack": ["Starz", "transparent", "#79bf1a", "#f8f8f8","#222222"],
    "MINCitBack": [["Purple_Digits", "Starz"], "#bf1fb7", "#f8f8f8", "#f8f8f8","#1d1a34"],
    "MINClaBack": ["Timberwolves", "#ffffff", "#045284", "#ffffff","#222222"],
    "NOPAssBack": ["Pelicans", "#031c3e", "#8d744a", "#031c3e","#f8f8f8"],
    "NOPIcoBack": ["Pelicans", "#f8f8f8", "#8d744a", "#f8f8f8","#031c3e"],
    "NOPStaBack": ["Pelicans", "#031c3e", "#f8f8f8", "#f8f8f8","#cf0629"],
    "NOPCitBack": ["NOLA", "#6ace54", "#402f75", "#6ace54","#111111"],
    "NYKAssBack": ["Knicks", "#ff6200", "#004da6", "#004da6","#f8f8f8"],
    "NYKIcoBack": ["Knicks", "#ff6200", "#ffffff", "#ffffff","#004da6"],
    "NYKStaBack": ["Knicks", "#ff6200", "#004da6", "#ff6200","#222222"],
    "NYKCitBack": ["Knicks", "#ff6200", "#004da6", "#ff6200","#dddddd"],
    "OKCAssBack": [["Assiduous", "Assiduous1"], "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": [["Assiduous", "Assiduous1"], "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCCitBack": [["Assiduous", "Assiduous1"], "#ffffff", "#ef3b24", "#ffffff", "#002d62"],
    "ORLAssBack": ["Mally", "#0050B5", "#222222", "#222222","#f8f8f8"],
    "ORLIcoBack": ["Mally", "#ffffff", "#222222", "#ffffff","#0050B5"],
    "ORLStaBack": ["Mally", "#eeeeee", "#0050B5", "#eeeeee","#222222"],
    "ORLCitBack": ["Palisoc", "#0050B5", "#ffffff", "#ffffff","#bbbbbb"],
    "PHIAssBack": ["Knicks", "#006bb7", "#ee104b", "#006bb7","#f8f8f8"],
    "PHIIcoBack": ["Knicks", "#f8f8f8", "#ee104b", "#f8f8f8","#006bb7"],
    "PHIStaBack": ["Knicks", "#f8f8f8", "#006bb7", "#f8f8f8","#ee104b"],
    "PHICitBack": ["Clarendon", "#eeeeee", "transparent", "#eeeeee","#003359"],
    "PHIClaBack": ["Sixers", "#ffffff", "#ef1549", "#ffffff","#071922"],
    "PHXAssBack": [["Suns", "Knicks"], "#443377", "#dd5800", "#443377","#f8f8f8"],
    "PHXIcoBack": [["Suns", "Knicks"], "#f8f8f8", "#dd5800", "#f8f8f8","#443377"],
    "PHXStaBack": [["Suns", "Knicks"], "#f8f8f8", "#443377", "#f8f8f8","#222222"],
    "PHXCitBack": [["Suns", "Knicks"], "#eeeeee", "transparent", "#dd5800","#222222"],
    "PORAssBack": ["Trailblazers", "#222222", "#d00328", "#222222","#f8f8f8"],
    "PORIcoBack": ["Trailblazers", "#f8f8f8", "#d00328", "#f8f8f8","#111111"],
    "PORStaBack": ["Trailblazers", "#f8f8f8", "#222222", "#f8f8f8","#d00328"],
    "PORCitBack": ["Trailblazers", "#f8f8f8", "#3fbcc0", "#f8f8f8","#222222"],
    "SACAssBack": [["Kings", "Knicks"], "#111111", "#5b2783", "#111111","#f8f8f8"],
    "SACIcoBack": [["Kings", "Knicks"], "#f8f8f8", "#5b2783", "#f8f8f8","#111111"],
    "SACStaBack": [["Kings", "Knicks"], "#f8f8f8", "#5b2783", "#f8f8f8","linear-gradient(90deg, #111 20%, #5b2783 100%)"],
    "SACCitBack": [["Kings", "Knicks"], "#f8f8f8", "#5b2783", "#f8f8f8","#18113b"],
    "SASAssBack": ["Knicks", "#111111", "#8D8E8E", "#111111","#eeeeee"],
    "SASIcoBack": ["Knicks", "#eeeeee", "#8D8E8E", "#eeeeee","#111111"],
    "SASStaBack": ["Knicks", "#111111", "#eeeeee", "#111111","#8D8E8E"],
    "SASCitBack": ["Knicks", "#eeeeee", "#8D8E8E", "#eeeeee","#111111"],
    "TORAssBack": [["Raptors", "Agency FB", "Agency1"], "#bd1b21", "#222222", "#bd1b21","#eeeeee"],
    "TORIcoBack": [["Raptors", "Agency FB", "Agency1"], "#222222", "#eeeeee", "#222222","#bd1b21"],
    "TORStaBack": [["Raptors", "Agency FB", "Agency1"], "#bd1b21", "#eeeeee", "#bd1b21","#222222"],
    "TORCitBack": [["Agency FB", "Agency1"], "#f8f8f8", "transparent", "#f8f8f8","#222222"],
    "UTAAssBack": [["Jazz", "Electrotome"], "#37236b", "#7aa3d7", "#37236b","#eeeeee"],
    "UTAIcoBack": [["Jazz", "Electrotome"], "#f8f8f8", "#7aa3d7", "#f8f8f8","#37236b"],
    "UTAStaBack": [["Jazz", "Electrotome"], "#f8f8f8", "transparent", "#f8f8f8","#222222"],
    "UTACitBack": ["Electrotome", "#f8f8f8", "transparent", "#f8f8f8","#111218"],
    "WASAssBack": [["Capitol", "Wizards"], "#e41134", "#eeeeee", "#e41134","#f8f8f8"],
    "WASIcoBack": [["Capitol", "Wizards"], "#00275c", "#f8f8f8", "#f8f8f8","#e41134"],
    "WASStaBack": [["Capitol", "Wizards"], "#f8f8f8", "#001144", "#f8f8f8","#00275c"],
    "WASCitBack": ["Wizards", "#f8f8f8", "#222222", "#f8f8f8","#d4aa6a"],
}

for (let i = 1; i < allJerseyTypes.length; i++) {
  const element = allJerseyTypes[i];
  const elementName = element.value.trim();

  const info = jerseyInfo[elementName];
  if (!info) {
    console.warn(`No jersey info found for: ${elementName}`);
    continue;
  }

  const [fontFamily, numberColor, numberBackdrop, nameColor, background] = info;

  element.style.fontFamily = fontFamily;
  element.style.color = nameColor;
  element.style.background = background;
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();

  const jerseyType = document.getElementById("jerseyType").value;

  if (jerseyType == "default") {
    alert("Pick a jersey type to load!")
  } else {
    document.getElementById("jersey").style.backgroundImage = (`url('./jerseys/${jerseyType}.png'), linear-gradient(0deg, ${jerseyInfo[jerseyType][4]} 0%, ${jerseyInfo[jerseyType][4]} 100%)`);
    document.getElementById("topSide").style.backgroundImage = (`url('./jerseys/${jerseyType.slice(0,6)}Top.png`);
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