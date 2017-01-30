
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var mousePos
var left
left = 0
right = 2

canvas.addEventListener('mousemove', function(evt) {
  mousePos = getMousePos(canvas, evt);
}, false)

canvas.addEventListener('mouseup', function(evt) {
  if(evt.button === left){
    if(pointWithinBoxFromSeperatePoints(start,mousePos.x,mousePos.y)){
      startGame()
    }
    if(pointWithinBoxFromSeperatePoints(restart,mousePos.x,mousePos.y)){
      resetGame()
    }
    if(pointWithinBoxFromSeperatePoints(menu,mousePos.x,mousePos.y)){
      returnToMenu()
    }
  }
}, false)


// cursor = {x:mousePos.x,y:mousePos.y}
//
// function setCursorPos(){
//   cursor.x = mousePos.x
//   cursor.y = mousePos.y
// }

drawCursor = function(){
  c.fillStyle = 'green'
  c.fillRect(mousePos.x,mousePos.y,30,30)
}

console.log('Mouse data processed.')
