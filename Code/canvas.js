var canvas = document.getElementById('canvas')
var c = canvas.getContext('2d')

function Canvas(x,y,width,height){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
}

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;


console.log('Canvas data processed.')
