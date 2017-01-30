var canvas = document.getElementById('canvas')
var c = canvas.getContext('2d')

function Canvas(){
  this.x = 0
  this.y = 0
  this.width = canvas.width
  this.height = canvas.height
}

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;


console.log('Canvas data processed.')
