
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
}
var enemyID = 0
Enemy.prototype.spawnEnemy = function(){
  if(canSpawn == true){
    for(var i = 0; i < this.enemiesPerWave; i++){
      var enm = new Enemy(this.width,this.height,this.colour,this.yVel,this.spawnDelay,this.enemiesPerWave,this.damage,enemyID)
      enemyID++
      enems.push(enm)
      enm.setValues()
      canSpawn = false
      setTimeout(resetSpawn,this.spawnDelay)
    }
  }
}

Enemy.prototype.setValues = function(){
  this.x = Math.random()*canvas.width-this.width*2
  this.y = -100
}

// Enemy.prototype.stopOverlap = function(){
//   for(var i = 0; i < enems.length; i++){
//     if(collision(enems[i],this)){
//       this.x = Math.random()*(canvas.width-this.width*2-this.width*6)
//     }
//   }
// }

Enemy.prototype.addVelocity = function(){
  this.y += this.yVel
}

Enemy.prototype.destroy = function(){
  enems.splice(this.id,1)
  console.log('did a destry')
}

Enemy.prototype.outOfFrame = function(){
  if(this.y>canvas.height+10){
    this.destroy()
  }
}

Enemy.prototype.render = function(){
  c.fillStyle = this.colour
  c.fillRect(this.x,this.y,this.width,this.height)
}

Enemy.prototype.addPoints = function(){
  player.score += this.damage
}

Enemy.prototype.bulletCollision = function(){
  for(var i = 0; i < buls.length; i++){
    if(collision(buls[i],this)){
      console.log('bullet hit Enemy')
      this.destroy()
      this.addPoints()
      buls[i].destroy()
      makeBulletHitParticles(50,this.x+this.width/2,this.y+this.height/2)
    }
  }
}

Enemy.prototype.playerCollision = function(){
    if(collision(player,this)){
      console.log('player hit Enemy')
      this.destroy()
      player.takeDamge(this.damage)
    }
}

Enemy.prototype.update = function(){
  this.addVelocity()
  this.outOfFrame()
  this.bulletCollision()
  this.playerCollision()
  //this.stopOverlap()
  this.render()
}




console.log('Enemy data processed.')
