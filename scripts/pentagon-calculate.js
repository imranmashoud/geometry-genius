function calculatePentagonArea() {
  //   console.log("Hello from pentagon");
  const perimeter = getInputValueById("pentagon-perimeter");
  console.log(perimeter);

  const apothem = getInputValueById("pentagon-apothem");
  console.log(apothem);

  const pentagonArea = 0.5 * perimeter * apothem;
  console.log(pentagonArea);

  setInnerTextById("pentagon-area", pentagonArea);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);
  return value;
}

function setInnerTextById(elementId, anyName) {
  const element = document.getElementById("pentagon-area");
  element.innerText = anyName;
}
