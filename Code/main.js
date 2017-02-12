console.log('Reading main script.')

var entities = []

//Defining Objects
var collisionCanvas2 = new Canvas(-50,-canvas.height*1.7,canvas.width+100,canvas.height*3.4)
var collisionCanvas = new Canvas(0,0,canvas.width,canvas.height)
var basicBullet = new Bullet(20,20,'white',17,250)
var basicEnemy = new Enemy(40,40,'orange',3,1000,5,10,-1)
var fastEnemy = new Enemy(25,25,'yellow',5,650,10,1,-2)
var slowEnemy = new Enemy(60,60,'red',2,2000,3,3,-3)
var player = new Player(canvas.width/2-32,canvas.height/1.2,64,64,basicBullet)
currentEnemies.push(basicEnemy)
currentEnemies.push(fastEnemy)
currentEnemies.push(slowEnemy)


function update(){
  //playMusic()
  //c.clearRect(0,0,canvas.width,canvas.height)
  c.fillStyle = 'rgba(27, 25, 26, 0.57)'
  c.fillRect(0,0,canvas.width,canvas.height)
  c.fillStyle = 'White'
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
  }else if(creditScreen == true){
    showCredits()
  }
}

this.setInterval(update,20)
