var docBody = document.getElementsByTagName("body")[0];

docBody.setAttribute("style", "text-align:center");

function divMaker(grad) {
  var newDiv = document.createElement('div');
  newDiv.style.boxSizing = "border-box";
  newDiv.style.width = "11.1%";
  newDiv.style.float = "left";
  newDiv.style.paddingBottom = "11.1%";
  newDiv.style.background = colorPicker();
  newDiv.style.opacity = grad;
  docBody.appendChild(newDiv);
}

function colorPicker() {
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  return color;
}

function makeBoard(size) {
  var grad = 1;
  for(var rows = 0; rows < 7; rows ++) {
    grad -= 0.12;
    for(var cols = 0; cols < 9; cols ++) {
      divMaker(grad);
    }
  }
}

makeBoard(63);
