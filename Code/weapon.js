
var buls = []
var canShoot = true

resetShoot = function (){
  canShoot = true
}

function Bullet(width,height,colour,speed,shotDely){
  this.x = -100
  this.y = 0
  this.width = width
  this.height = height
  this.yVel = speed
  this.colour = colour
  this.shotDelay = shotDely
}

Bullet.prototype.shoot = function(){
  bul = new Bullet(this.width,this.height,this.colour,-this.yVel,this.shotDelay)
  //bul2 = new Bullet(this.width,this.height,this.colour,-this.yVel,this.shotDelay)
  buls.push(bul)
  //buls.push(bul2)
  bul.setValues()
  //bul2.setValues2()
  canShoot = false
  setTimeout(resetShoot,this.shotDelay)
}

Bullet.prototype.setValues = function(){
  this.x = player.x+32-this.width/2
  this.y = player.y+22
}
//
// Bullet.prototype.setValues2 = function(){
//   this.x = player.x+54-this.width/2
//   this.y = player.y+22
// }

Bullet.prototype.render = function(){
  if(collision(collisionCanvas,this)){
    c.fillStyle = this.colour
    c.fillRect(this.x,this.y,this.width,this.height)
  }else this.destroy()
}

Bullet.prototype.destroy = function(){
  buls.splice(this,1)
}

Bullet.prototype.update = function(){
  this.render()
  this.y+=this.yVel
}

console.log('Weapon data processed.')
