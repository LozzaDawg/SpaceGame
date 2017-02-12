

var canSpawn = false
var Spawning = true


startSpawn = function(){
  canSpawn = true
}

stopSpawn = function(){
  canSpawn = false
}

spawnCurrentEnemies = function(){
  for(var i = 0; i < currentEnemies.length; i++){
    currentEnemies[i].spawnEnemy()
  }
}
var beginSpawn = setInterval(spawnCurrentEnemies,40)

waveBreak = function(time){
  clearInterval(beginSpawn)
  setTimeout(startSpawningAfterWaveBreak,time)
}

startSpawningAfterWaveBreak = function(){
    setInterval(spawnCurrentEnemies,40)
}


console.log('Spawn data processed.')
