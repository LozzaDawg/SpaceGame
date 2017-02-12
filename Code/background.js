
var particles = []
var rX = 0
var rY = 0
var rW = 0
var qu = 0
var rxv = 0
var ryv = 0
var Galaxy1 = 230
var Galaxy2 = 230
var Galaxy3 = 230
var blood = 0
var sploshion = 0
var g1 = true
var g2 = false
var g3 = false
var s1 = false
var s2 = false

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
  c.fillStyle = this.color
  c.fillRect(this.x,this.y,this.width,this.height)
}

Particle.prototype.OOF = function(){
  if(collision(collisionCanvas2,this) == false){
    particles.splice(this,1)
  }
}

function makeGalaxyParticles1(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    part.color = 'hsl('+Galaxy1+', 100%, 50%)'
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function makeGalaxyParticles2(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    part.color = 'hsl('+Galaxy2+', 100%, 50%)'
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function makeGalaxyParticles3(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    part.color = 'hsl('+Galaxy3+', 100%, 50%)'
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function switchGalaxy1(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    if(Math.random()>0.5){
      part.color = 'hsl('+Galaxy1+', 100%, 50%)'
    }else{part.color = 'hsl('+Galaxy2+', 100%, 50%)'}
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function switchGalaxy2(NoOfParticles){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part = new Particle(rX,rY,rW,rW,qu)
    if(Math.random()>0.5){
      part.color = 'hsl('+Galaxy2+', 100%, 50%)'
    }else{part.color = 'hsl('+Galaxy3+', 100%, 50%)'}
    particles.push(part)
    part.setValues()
    randomise()
  }
}

function switchaToStartingGalaxy(){
  g1 = true
  g2 = false
  g3 = false
  s1 = false
  s2 = false
}

function switchtoGal2(){
 s1 = true
 g1 = false
 setTimeout(start2,2000)
}
function start2(){
  g2 = true
  s1 = false
}
function switchtoGal3(){
  s2 = true
  g2 = false
  setTimeout(start3,2000)
}
function start3(){
  g3 = true
  s2 = false
}

function makeBulletHitParticles(NoOfParticles,x,y){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part2 = new Particle(x,y,rW,rW,qu)
    part2.color = 'hsl('+blood+', 100%, 47%)'
    particles.push(part2)
    part2.setValues()
    randomise()
  }
}

function explosion(NoOfParticles,x,y){
  for(var pNo = 0; pNo < NoOfParticles; pNo++){
    var part2 = new Particle(x,y,rW,rW,qu)
    part2.color = 'hsl('+sploshion+', 100%, 47%)'
    particles.push(part2)
    part2.setValues()
    console.log('did a splode')
    randomise()
  }
}

function randomise(){
  rX = canvas.width/2
  rY = 30
  rW = Math.random()*(13-5)-5
  qu = Math.ceil(Math.random()*4)
  rxv = Math.random()*(30-10)-10
  ryv = Math.random()*(30-10)-10
  Galaxy1 = Math.ceil(Math.random()*(150-100)-100)
  Galaxy2 = Math.ceil(Math.random()*(289-228)-228)
  Galaxy3 = Math.ceil(Math.random()*1000000)
  blood = Math.ceil(Math.random()*10)
  sploshion = Math.ceil(Math.random()*50)
}

function setBackground(){
  c.fillStyle = 'rgb(37, 37, 37)'
  if(g1 == true){
    makeGalaxyParticles1(30)
  }else if(s1 == true){
    switchGalaxy1(30)
  }else if(g2 == true){
    makeGalaxyParticles2(30)
  }else if(s2 == true){
    switchGalaxy2(30)
  }else if(g3 == true){
    makeGalaxyParticles3(30)
  }
  for(var i = 0; i < particles.length; i++){
    particles[i].update()
    particles[i].render()
    particles[i].OOF()
  }
}

console.log('Background data processed.')
