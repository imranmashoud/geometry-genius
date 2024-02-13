function calculateEllipseArea() {
  //   console.log("hello from ellipse");
  const majorRadios = getInputValueById("ellipse-major");
  console.log(majorRadios);
  const minorRadios = getInputValueById("ellipse-minor");

  const ellipseArea = 3.14 * majorRadios * minorRadios;
  console.log(ellipseArea);

  setInnerTextById("ellipse-area", ellipseArea);
}
