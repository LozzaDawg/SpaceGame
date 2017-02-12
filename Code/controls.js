
keys = []

Player.prototype.controls = function(){
	//Space
	if(keys[32]){
		if(canShoot == true){
    	this.ammo.shoot()
			shootSound.play()
		}
	}
	//W
	if(keys[87]){
		if(this.yVel > -1*this.speed){
			this.yVel = -this.speed;
		}
	}
	//S
	if(keys[83]){
		if(this.yVel < this.speed){
			this.yVel = this.speed;
		}
	}
	//D
	if(keys[68]){
		if(this.xVel < this.speed){
			this.xVel = this.speed;
		}
	}
	//A
	if(keys[65]){
		if(this.xVel > -1*this.speed){
			this.xVel = -this.speed;
		}
	}
}

document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})
document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})

console.log('Control data processed.')
