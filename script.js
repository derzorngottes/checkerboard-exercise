var docBody = document.getElementsByTagName("body")[0];

docBody.setAttribute("style", "text-align:center");

var curCol = true;

function divMaker(curCol) {
  var newDiv = document.createElement('div');
  newDiv.style.boxSizing = "border-box";
  newDiv.style.width = "11.1%";
  newDiv.style.float = "left";
  newDiv.style.paddingBottom = "11.1%";
  if(curCol === true){
    newDiv.style.background = "black";
  }
  else {
    newDiv.style.background = "red";
  }
  docBody.appendChild(newDiv);
}

function makeBoard(size) {
  for (var i = 0; i < size; i++) {
    divMaker(curCol);
    curCol = !curCol;
  }
}

makeBoard(63);
