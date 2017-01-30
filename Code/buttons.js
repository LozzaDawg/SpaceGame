
function Button(x,y,width,height){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
}

Button.prototype.render = function(){
  c.fillRect(this.x,this.y,this.width,this.height)
}

Button.prototype.renderText = function(text){
  c.fillText(text,this.x+this.width/3,this.y+this.height/1.8)
}


var start = new Button(canvas.width/2-50,330,100,50)
var options = new Button(canvas.width/2-50,400,100,50)
var quit = new Button(canvas.width/2-50,470,100,50)

var restart = new Button(canvas.width/2-130-50,500,100,50)
var menu = new Button(canvas.width/2+130-50,500,100,50)
