
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
  c.fillText(text,this.x-20+this.width/3,this.y+this.height/1.8)
}

var start = new Button(canvas.width/2-50,330,100,50)
var options = new Button(canvas.width/2-50,400,100,50)

var restart = new Button(canvas.width/2-130-50,500,100,50)
var menu = new Button(canvas.width/2+130-50,500,100,50)

resetGame = function(){
  endGameScreen = false
  player.resetPos()
  for(var i = 0; i < enems.length; i++){
    enems[i].destroy
  }
  for(var i = 0; i < buls.length; i++){
    buls.splice(i,1)
  }
  startSpawn()
  playable = true
}

returnToMenu = function(){
  endGameScreen = false
  startGameScreen = true
}

startGame = function(){
  startGameScreen = false
  playable = true
  startSpawn()
}
