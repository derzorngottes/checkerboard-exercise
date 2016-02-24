var docBody = document.getElementsByTagName("body")[0];

docBody.setAttribute("style", "text-align:center");

function divMaker() {
  var newDiv = document.createElement('div');
  newDiv.style.boxSizing = "border-box";
  newDiv.style.width = "11.1%";
  newDiv.style.float = "left";
  newDiv.style.paddingBottom = "11.1%";
  newDiv.style.background = colorPicker();
  docBody.appendChild(newDiv);
}

function colorPicker() {
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return color;
}

function makeBoard(size) {
  for (var i = 0; i < size; i++) {
    divMaker();
  }
}

makeBoard(63);
