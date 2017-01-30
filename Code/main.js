console.log('Reading main script.')

var entities = []

//Defining Objects
var collisionCanvas = new Canvas()
var basicBullet = new Bullet(20,20,'white',17,300)
var basicEnemy = new Enemy(40,40,'orange',3,1000,5,5,-1)
var fastEnemy = new Enemy(25,25,'yellow',5,650,10,1,-2)
var slowEnemy = new Enemy(60,60,'red',2,2000,3,3,-3)
var player = new Player(canvas.width/2-32,canvas.height/1.2,64,64,basicBullet)
currentEnemies.push(basicEnemy)


//SetUp
if(Spawning = true){
  setInterval(spawnCurrentEnemies,40)
}

function update(){
  c.clearRect(0,0,canvas.width,canvas.height)
  setBackground()
  if(playable == true){
      drawUI(player)
    for(var i = 0; i < particles.length; i++){
      particles[i].update()
    }
    for(var i = 0; i < entities.length; i++){
      entities[i].update()
    }
    for(var i = 0; i < buls.length; i++){
      buls[i].update()
    }
    for(var i = 0; i < enems.length; i++){
      enems[i].update()
    }
  } else if(startGameScreen == true){
    startGameMenu()
  }else if(endGameScreen == true){
    endGameMenu()
  }
}

this.setInterval(update,20)
