
//Game Menues
var playable = false
var endGameScreen = false
var startGameScreen = true
var creditScreen = false

endGameMenu = function(){
   c.fillStyle = 'white'
   c.fillRect(canvas.width/4,canvas.height/4,canvas.width/2,canvas.height/2)
   restart.render()
   menu.render()
   drawScoreboard()
   c.fillStyle = 'black'
   restart.renderText('Restart')
   menu.renderText('Menu')
   stopSpawn()
   for(var i = 0; i < enems.length; i++){
    enems[i].destroy()
  }

}

startGameMenu = function(){
  c.font = '56px Keycard'
  c.fillStyle = 'white'
  c.fillText("SPACE FLIGHT FIASCO", canvas.width/2-230,200)
  c.font = '18px Keycard'
  start.render()
  options.render()
  c.fillStyle = 'black'
  c.fillText('Start',start.x+start.width/3,start.y+start.height/1.8)
  c.fillText('Things',options.x+options.width/3,options.y+options.height/1.8)
}

function drawHealthbar(x){
  c.fillStyle = 'rgb(193, 76, 51)'
  c.fillRect(32,32,100,32)
  c.fillStyle = 'rgb(61, 190, 35)'
  c.fillRect(32,32,100*(x.health/x.maxHealth),32)
}

function drawScore(x){
  c.fillStyle = 'rgb(67, 241, 182)'
  c.fillRect(canvas.width-32-150,32,150,32)
  c.fillStyle = 'rgb(38, 37, 43)'
  c.fillText('Score: '+x.score+'',canvas.width-150,48)
}

function drawUI(x){
  drawHealthbar(x)
  drawScore(x)
}
