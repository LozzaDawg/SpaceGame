
var particles = []
var rX = 0
var rY = 0
var rW = 0
var qu = 0
var rxv = 0
var ryv = 0
var blue = 230
var red = 0

function Particle(x,y,width,height,q){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.xVel = 0
  this.yVel = 0
  this.quadrant = q
  this.color = 'hsl(230, 100%, 50%)'
}

Particle.prototype.setValues = function(){
  if(this.quadrant == 1){
    this.xVel = -rxv
    this.yVel = -ryv
  }
  if(this.quadrant == 2){
    this.xVel = -rxv
    this.yVel = ryv
  }
  if(this.quadrant == 3){
    this.xVel = rxv
    this.yVel = -ryv
  }
  if(this.quadrant == 4){
    this.xVel = rxv
    this.yVel = ryv
  }
}

Particle.prototype.update = function(){
  this.x=this.xVel+this.x
  this.y=this.yVel+this.y
}

Particle.prototype.render = function(){
  if(collision(collisionCanvas,this)){
    c.fillStyle = this.color
    c.fillRect(this.x,this.y,this.width,this.height)
  }else particles.splice[this,1]
}

function makeParticles(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    part.color = 'hsl('+blue+', 100%, 50%)'
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function makeBulletHitParticles(NoOfParticles,x,y){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part2 = new Particle(x,y,rW,rW,qu)
    part2.color = 'hsl('+red+', 78%, 44%)'
    particles.push(part2)
    part2.setValues()
    randomise()
  }
}

function randomise(){
  rX = Math.random()*((0+canvas.width/2+5)-(0+canvas.width/2-5))+(0+canvas.width/2-5)
  rY = Math.random()*((0+canvas.height/2+5)-(0+canvas.height/2-5))+(0+canvas.height/2-5)
  rW = Math.random()*(13-5)-5
  qu = Math.ceil(Math.random()*4)
  rxv = Math.random()*(30-10)-10
  ryv = Math.random()*(30-10)-10
  blue = Math.ceil(Math.random()*(150-100)-100)
  red = Math.ceil(Math.random()*43)
}

function setBackground(){
  c.fillStyle = 'rgb(37, 37, 37)'
  c.fillRect(0,0,canvas.width,canvas.height)
  makeParticles(30)
  for(var i = 0; i < particles.length; i++){
    particles[i].update()
    particles[i].render()
  }
}

console.log('Background data processed.')
