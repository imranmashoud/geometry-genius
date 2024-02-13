// function calculateRhombusArea() {
//     console.log("From Rhombus");
//     const baseInput = document.getElementById("diagonals-one");
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);
/* ******************************************** */
//     const base = getRhombusBase();
//     console.log(base);
// }

// function getRhombusBase() {
//   const baseInput = document.getElementById("diagonals-one");
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   return base;
// }
function calculateRhombusArea() {
  const baseOne = getInputValueById("diagonals-one");
  console.log(baseOne);

  const baseTwo = getInputValueById("diagonals-two");
  console.log(baseTwo);

  const rhombusArea = 0.5 * baseOne * baseTwo;
  console.log(rhombusArea);

  setInnerTextById("rhombus-area", rhombusArea);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
