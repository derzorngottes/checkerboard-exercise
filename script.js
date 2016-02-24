var docBody = document.getElementsByTagName('body')[0];
var audio = document.createElement("audio");

audio.type = 'audio/mpeg';
audio.src = 'http://www.audiocheck.net/Audio/audiocheck.net_whitenoise.mp3';
audio.addEventListener('canplay', function(){
  audio.play();
}, true);

docBody.setAttribute('style', 'text-align:center');

function divMaker() {
  var newDiv = document.createElement('div');
  newDiv.className = 'tile';
  newDiv.style.boxSizing = 'border-box';
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';
  newDiv.style.background = colorPicker();
  docBody.appendChild(newDiv);
}

function colorPicker() {
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  return color;
}

function changeColor() {
  var tiles = document.getElementsByClassName('tile');
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.background = colorPicker();
  }
}

function makeBoard(size) {
  for(var rows = 0; rows < 7; rows ++) {
    for(var cols = 0; cols < 9; cols ++) {
      divMaker();
    }
  }
}

makeBoard(63);
window.setInterval(changeColor, 2000);
