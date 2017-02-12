var particles = []


function Particle(x,y,colMin,colMax,dd){
  this.x = x
  this.y = y
  this.startX = x
  this.startY = y
  this.width = 0
  this.height = 0
  this.xVel = 0
  this.yVel = 0
  this.quadrant = 0
  this.destroyDist = dd
  this.color = 'hsl(230, 100%, 50%)'
  this.colRangeMax = colMax
  this.colRangeMin = colMin
}

Particle.prototype.randomise = function(colRangeMin,colRangeMax){
  this.x = 0//Math.random()*((0+canvas.width/2+5)-(0+canvas.width/2-5))+(0+canvas.width/2-5)
  this.y = Math.random()*((0+canvas.height/2+5)-(0+canvas.height/2-5))+(0+canvas.height/2-5)
  // this.startX = Math.random()*((0+canvas.width/2+5)-(0+canvas.width/2-5))+(0+canvas.width/2-5)
  //this.startY = Math.random()*((0+canvas.height/2+5)-(0+canvas.height/2-5))+(0+canvas.height/2-5)
  this.width = Math.random()*(13-5)-5
  this.quadrant = Math.ceil(Math.random()*4)
  this.xVel = Math.random()*(30-10)-10
  this.yVel = Math.random()*(30-10)-10
  this.color = Math.ceil(Math.random()*(colRangeMax-colRangeMin)-colRangeMin)
}

makeParticles = function(NoP){
  for(var i = 0; i < NoP; i++){
    var part = new Particle(canvas.width/2,0,0,130,100)
    part.randomise()
    particles.push(part)

  }
}

Particle.prototype.render = function(NoP){
  c.fillStyle = this.color
  c.fillRect(this.x,this.y,this.width,this.width)
}

Particle.prototype.addVelocity = function(NoP){
  this.x += this.xVel
  this.y += this.yVel
}

Particle.prototype.destroy = function(NoP){
  if(this.x >= this.startX+this.destroyDist || this.x >= this.startX-this.destroyDist || this.y >= this.startY+this.destroyDist || this.y >= this.startY-this.destroyDist){
    particles.splice(this,1)
    console.log('biggest boi')
  }
}

Particle.prototype.update = function(NoP){
  this.addVelocity()
  this.render()
  this.destroy()
}

console.log('Background data processed.')
