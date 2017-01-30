function drawHealthbar(x){
  c.fillStyle = 'rgb(193, 76, 51)'
  c.fillRect(32,32,100,32)
  c.fillStyle = 'rgb(61, 190, 35)'
  c.fillRect(32,32,100*(x.health/x.maxHealth),32)
}

function drawScore(x){
  c.fillStyle = 'rgb(67, 241, 182)'
  c.fillRect(canvas.width-32-150,32,150,32)
  c.fillStyle = 'rgb(38, 37, 43)'
  c.fillText('Score: '+x.score+'',canvas.width-32-150,48)
}

function drawUI(x){
  drawHealthbar(x)
  drawScore(x)
}
