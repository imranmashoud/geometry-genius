/**
 * Objective: Get base, height of a triangle.
 * Calculate the area by using the provide formula,
 * and then display the area.
 *
 * Step -1: Get base value of the triangle.
 * Step -2: Added an id in the base input field.
 * Step -3: Use getElementById to access the input field.
 * Step -4: Get value from the input field. (Value is string now).
 * Step -4: Convert the value to a number. Using by parseFloat
 */
function calculateTriangleArea() {
  // Get triangle base value.
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);
  triangleBaseInput.value = "";

  // Get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);
  triangleHeightInput.value = "";

  // Calculate triangle area
  const triArea = 0.5 * base * height;
  console.log(`Area of the triangle is: ${triArea}`);

  // Display triangle area

  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triArea;
}
