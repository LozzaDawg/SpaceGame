
function showCredits(){
  c.fillStyle = 'white'
  menu.render()
  c.fillStyle = 'white'
  c.fillRect(canvas.width/4,canvas.height/4,canvas.width/2,canvas.height/2)
  c.fillStyle = 'black'
  menu.renderText('Menu')
  c.fillText('How to Play: Use W,A,S,D to fly, and press Space to shoot',canvas.width/4+40,canvas.height/4+40)
  c.fillText('Programs Used: Atom, Pyxel Edit, Audacity',canvas.width/4+40,canvas.height/4+100)
  c.fillText('Sprites inspired by Space Invaders',canvas.width/4+40,canvas.height/4+130)
  c.fillText('Special Thanks to Eeve Sompex for the font!',canvas.width/4+40,canvas.height/4+230)
}
