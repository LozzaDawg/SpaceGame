
function Enemy(width,height,colour,speed,delay,epw,dmg,id){
  this.x = 0
  this.y = 0
  this.width = width
  this.height = height
  this.yVel = speed
  this.colour = colour
  this.spawnDelay = delay
  this.enemiesPerWave = epw
  this.damage = dmg
  this.id = id
  this.dead = false
}

var enemyID = 0
var currentEnemies = []
var enems = []

Enemy.prototype.setValues = function(){
  this.x = Math.random()*canvas.width-this.width*2
  this.y = -100
}

Enemy.prototype.stopOverlap = function(){
  for(var i = 0; i < enems.length; i++){
    if(this.id != enems[i].id){
      if(collision(enems[i],this)){
        this.x = Math.random()*(canvas.width-this.width*2-this.width*6)
      }
    }
  }
}

Enemy.prototype.addVelocity = function(){
  this.y += this.yVel
}

Enemy.prototype.destroy = function(){
  enems.splice(this,1)
}

Enemy.prototype.outOfFrame = function(){
  if(this.y>canvas.height+10){
    this.destroy()
  }
}

Enemy.prototype.spawnEnemy = function(){
  if(canSpawn == true){
    for(var i = 0; i < this.enemiesPerWave; i++){
      enemyID++
      var enm = new Enemy(this.width,this.height,this.colour,this.yVel,this.spawnDelay,this.enemiesPerWave,this.damage,enemyID)
      enems.push(enm)
      enm.setValues()
      canSpawn = false
      setTimeout(startSpawn,this.spawnDelay)
    }
  }
}

Enemy.prototype.render = function(){
  c.drawImage(badieSpr,this.x,this.y,this.width,this.height)
}

Enemy.prototype.addPoints = function(){
  player.score += this.damage
}

Enemy.prototype.bulletCollision = function(){
  for(var i = 0; i < buls.length; i++){
    if(buls[i].dead == false){
      if(collision(buls[i],this)){
        enemyDeathSound.play()
        this.addPoints()
        buls[i].dead = true
        this.dead = true
        makeBulletHitParticles(50,this.x+this.width/2,this.y+this.height/2)
      }
    }
  }
}

Enemy.prototype.playerCollision = function(){
  if(collision(player,this)){
    console.log('player hit Enemy')
    this.dead = true
    player.takeDamge(this.damage)
  }
}

Enemy.prototype.update = function(){
  this.addVelocity()
  this.outOfFrame()
  this.stopOverlap()
  if(this.dead == false){
    this.render()
    this.bulletCollision()
    this.playerCollision()
  }
}


console.log('Enemy data processed.')
