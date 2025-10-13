const windowWidth = window.innerWidth;

const nameDisplay = document.getElementById("name");
const numberDisplay = document.getElementById("number");

const allJerseyTypes = document.querySelectorAll("option");

const jerseyInfo = {
    //"jersey" : [Font Family, number color, number backdrop, name color, background]
    "INDAssBack": ["Agency FB", "#0c2340", "#ffd520", "#0c2340","#ffffff"],
    "INDIcoBack": ["Agency FB", "#ffd520", "#ffffff", "#ffd520","#0c2340"],
    "INDStaBack": ["Agency FB", "#0c2340", "#ffffff", "#0c2340","#ffd520"],
    "OKCAssBack": ["Assiduous", "#007dc3", "#ef3b24", "#007dc3", "#ffffff"],
    "OKCIcoBack": ["Assiduous", "#ffffff", "#ef3b24", "#ffffff", "#007dc3"],
    "OKCStaBack": ["Assiduous", "#007dc3", "#ffffff", "#ffffff", "#ef3b24"],
}

/*for (let i = 1; i < allJerseyTypes.length; i++) {
  const element = allJerseyTypes[i];
  const elementName = element.innerHTML;

  element.style.color = jerseyInfo[elementName][3];
  element.style.backgroundColor = jerseyInfo[elementName][4];
} */

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();

  const jerseyType = document.getElementById("jerseyType").value;

  if (jerseyType == "default") {
    alert("Pick a jersey type to load!")
  } else {
    document.getElementById("jersey").style.backgroundImage = (`url('./jerseys/${jerseyType}.png`);
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
    document.getElementById("mobile").setAttribute("href", `mobile.html#${jerseyType}${name}-${number}`)
    document.getElementById("desktop").setAttribute("href", `desktop.html#${jerseyType}${name}-${number}`)
});