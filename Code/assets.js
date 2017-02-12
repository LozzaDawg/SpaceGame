
var spaceShipSpr = new Image()
spaceShipSpr.src = 'Assets/spaceship.png'

var badieSpr = new Image()
badieSpr.src = 'Assets/SpaceBadie.png'

var bulletSpr = new Image()
bulletSpr.src = 'Assets/bullet.png'

var shootSound = new Audio('Assets/shoot.wav')
var enemyDeathSound = new Audio('Assets/destroy.wav')
var music = new Audio('Assets/music.wav')


function playMusic(){
  if (typeof muisc.loop == 'boolean'){
    muisc.loop = true;
  }else{
    muisc.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  muisc.play();
}




console.log('Assets processed.')
