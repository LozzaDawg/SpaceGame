var scores = []
var highscore = 0

function storeHeighscores(){
  if(scores.length < 20){
    scores.push(player.score)
  }else{
    scores.splice(20,1)
    scores.push(player.score)
  }
  for(var i = 0; i < scores.length; i++){
    if(scores.length != 1){
      if(scores[i] != player.score){
        if(player.score > scores[i]){
          highscore = player.score
        }else null
      }
    }else highscore = player.score
  }
  player.score = 0
}

function drawScoreboard(){
  c.fillStyle = 'black'
  c.fillText('Your Score: '+scores[scores.length-1]+'',canvas.width/4+30,canvas.height/4+30)
  //c.fillText('High Score: '+highscore+'',canvas.width/4+30+100,canvas.height/4+30)

  for(var i = 0; i < scores.length; i++){
    c.fillText('Previous Score '+scores[i]+'',canvas.width/4+30,canvas.height/4+50+20*i)
  }
}

Player.prototype.changeGals = function(){
  if(this.score > 200 && this.score < 300){
    switchtoGal2()
  }
  if(this.score > 500 && this.score < 600){
    switchtoGal3()
  }
}
console.log('Score data processed.')
