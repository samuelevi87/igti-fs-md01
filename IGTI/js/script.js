window.addEventListener('load', start);

var
inputRed = null,
rangeRed = null,
inputGreen = null,
rangeGreen = null,
inputBlue = null,
rangeBlue = null,
square = null;

function start() {
  square = document.querySelector('#square');

  rangeRed = document.querySelector('#rangeRed');
  inputRed = document.querySelector('#inputRed');
  rangeRed.addEventListener('input', attribColor);
  
  rangeGreen = document.querySelector('#rangeGreen');
  inputGreen = document.querySelector('#inputGreen');
  rangeGreen.addEventListener('input', attribColor);
  
  rangeBlue = document.querySelector('#rangeBlue');
  inputBlue = document.querySelector('#inputBlue');
  rangeBlue.addEventListener('input', attribColor);

  attribColor();
}

function attribColor() {
  var red = parseInt(rangeRed.value, 10);
  var green = parseInt(rangeGreen.value, 10);
  var blue = parseInt(rangeBlue.value, 10);

  inputRed.value = red;
  inputGreen.value = green;
  inputBlue.value = blue;

  var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';

  square.style.backgroundColor = rgbCSS;
}
