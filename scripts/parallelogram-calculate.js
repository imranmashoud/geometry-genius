function calculateParallelogramArea() {
  //   console.log("hello from Parallelogram");
  const base = parseFloat(document.getElementById("parallelogram-base").value);
  console.log(base);
  document.getElementById("parallelogram-base").value = "";

  const height = parseFloat(
    document.getElementById("parallelogram-height").value
  );
  console.log(height);
  document.getElementById("parallelogram-height").value = "";

  const paraArea = base * height;
  console.log(`Area of the Parallelogram is: ${paraArea}`);

  const paraAreaSpan = document.getElementById("para-area");
  paraAreaSpan.innerText = paraArea;
}
