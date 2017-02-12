
function collision (entity,entity2) {
	return(entity2.x < entity.x + entity.width &&
	entity2.x + entity2.width > entity.x &&
	entity2.y <entity.y + entity.height &&
	entity2.height + entity2.y > entity.y)
}


function futureCollision (entity,entity2) {
	return(entity2.x + entity2.xVel < entity.x + entity.width &&
	entity2.x + entity2.width + entity2.xVel > entity.x &&
	entity2.y + entity2.yVel <entity.y + entity.height &&
	entity2.height + entity2.y + entity2.yVel > entity.y)
}

function insideBoxCollision (entity,entity2) {
	return(entity2.x + entity2.xVel + entity2.width < entity.x + entity.width &&
	entity2.x + entity2.xVel > entity.x &&
	entity2.y + entity2.yVel + entity2.height <entity.y + entity.height &&
	entity2.y + entity2.yVel > entity.y)
}

function pointWithinBox(entity,entity2){
	return(entity2.x < entity.x + entity.width &&
	entity2.x > entity.x &&
	entity2.y < entity.y + entity.height &&
	entity2.y > entity.y)
}

function pointWithinBoxFromSeperatePoints(entity,entityx,entityy){
	return(entityx < entity.x + entity.width &&
	entityx > entity.x &&
	entityy < entity.y + entity.height &&
	entityy > entity.y)
}

console.log('Collision data processed.')
