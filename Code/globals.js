


//Player
resetMove = function (){
  player.canMove = true
}

//Enemy
var enemyID = 0
var currentEnemies = []
var enems = []
var canSpawn = true
var Spawning = true

resetSpawn = function(){
  canSpawn = true
}

spawntimer = function(time){
  setTimeout(startSpawning,time)
}

startSpawning = function(){
  Spawning = true
}

stopSpawning = function(){
  Spawning = false
}

spawnCurrentEnemies = function(){
  for(var i = 0; i < currentEnemies.length; i++){
    currentEnemies[i].spawnEnemy()
  }
}

//Game Menues
var playable = false
var endGameScreen = false
var startGameScreen = true

resetGame = function(){
  endGameScreen = false
  player.resetPos()
  for(var i = 0; i < enems.length; i++){
    enems.splice(i,1)
  }
  for(var i = 0; i < buls.length; i++){
    buls.splice(i,1)
  }
  playable = true
}

endGameMenu = function(){
   c.fillStyle = 'white'
   c.fillRect(canvas.width/4,canvas.height/4,canvas.width/2,canvas.height/2)
   restart.render()
   menu.render()
   c.fillStyle = 'black'
   c.fillText('You loose.',canvas.width/2,canvas.height/2)
   c.fillText('Press Escape to return to main menu, press Space to restart to meme',canvas.width/2,canvas.height/2+32)
   restart.renderText('Restart')
   menu.renderText('Menu')
}

startGameMenu = function(){
  c.fillStyle = 'white'
  start.render()
  options.render()
  quit.render()
  c.fillStyle = 'black'
  c.fillText('Start',start.x+start.width/3,start.y+start.height/1.8)
  c.fillText('Options',options.x+options.width/3,options.y+options.height/1.8)
  c.fillText('Quit',quit.x+quit.width/3,quit.y+quit.height/1.8)
}

returnToMenu = function(){
  endGameScreen = false
  startGameScreen = true
}

startGame = function(){
  startGameScreen = false
  playable = true
  player.resetPos()
}

console.log('Global data processed.')
