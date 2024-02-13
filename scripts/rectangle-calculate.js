function calculateRectangleArea() {
  // Get rectangle width value.
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  console.log(width);
  rectangleWidthInput.value = "";

  // Get rectangle length value.
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  console.log(length);
  rectangleLengthInput.value = "";

  // Calculate rectangle area.
  const rectArea = width * length;
  console.log(`Area of the rectangle is: ${rectArea}`);

  // Display rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectArea;
}
