
 function Player(x,y,width,height,ammo){
   this.x = x
   this.y = y
   this.width = width
   this.height = height
   this.xVel = 0
   this.yVel = 0
   this.speed = 6
   this.ammo = ammo
   this.health = 100
   this.maxHealth = 100
   this.score = 0
   this.canMove = true
   entities.push(this)
 }


 Player.prototype.render = function(){
    c.drawImage(spaceShipSpr,this.x,this.y,this.width,this.height)
 }

 Player.prototype.resetPos = function(){
    this.x = canvas.width/2-32
    this.y = canvas.height/1.2
 }

 Player.prototype.takeDamge = function(dmg){
    this.health -= dmg
 }

 Player.prototype.healthStats = function(){
    if(this.health <= 0){
      this.kill()
    }
    if(this.health > this.maxHealth){
      this.health = this.maxHealth
    }
 }

 Player.prototype.kill = function(){
    explosion(500,this.x,this.y)
    this.x = -1000
    this.health = this.maxHealth
    setTimeout(killmemes,1500)
 }

 function killmemes(){
   storeHeighscores()
   switchaToStartingGalaxy()
   playable = false
   endGameScreen = true
 }

 Player.prototype.addVelocity = function(){
   this.x += this.xVel
   this.y += this.yVel
 }

 Player.prototype.friction = function(){
    this.xVel *= 0.7
    this.yVel *= 0.7
 }

 Player.prototype.setVelToZero = function (){
 	this.xVel = 0
 	this.yVel = 0
 }

 Player.prototype.stopMoveCollision = function (entity){
  if(insideBoxCollision(collisionCanvas, this)==false){
    this.setVelToZero();
  }else if(this.canMove == false){
    this.canMove = true;
  }
 }

 Player.prototype.update = function(){
  this.addVelocity()
  this.controls()
  this.stopMoveCollision()
  this.friction()
  this.addVelocity()
  this.render()
  this.healthStats()
  this.changeGals()
 }









console.log('Player data processed.')
