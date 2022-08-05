var maze
var playerRight, playerLeft, playerUp, playerDown
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14
var b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26
var b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38
var b39,b40,b41,b42,b43,b44,b45,b46
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9
var coin10,coin11,coin12,coin13,coin14,coin15,coin16,coin17
var coin18,coin19,coin20,coin21,coin22,coin23,coin24,coin25
var coin26,coin27,coin28,coin29,coin30,coin31,coin32,coin33
var coin34,coin35,coin36,coin37,coin38,coin39,coin40,coin41
var coin42,coin43,coin44,coin45,coin46,coin46,coin47,coin48
var coin49,coin50,coin51,coin52,coin53,coin54,coin55
var coin56,coin57,coin58,coin59,coin60,coin61,coin62
var coin63,coin64,coin65,coin66,coin67,coin68,coin69,coin70
var coin71,coin72,coin73,coin74,coin75,coin76,coin77,coin78
var coin79,coin80,coin801,coin81,coin82,coin83,coin84,coin85,coin86
var coin87,coin89,coin90,coin91,coin92,coin93,coin94,coin95
var coin96,coin97,coin98,coin99,coin100,coin101
var greenGhost,redGhost,blueghost,pinkghost
var score = 0
var death = 0
var deathSound
var chompSound




function preload() {
  maze = loadImage("images/maze.png")
  playerRight = loadImage("images/player right.png")
  playerLeft = loadImage("images/player left.png")
  playerUp = loadImage("images/player up.png")
  playerDown = loadImage("images/player down.png")
  coinImage = loadImage("images/coin.jpg")
  greenGhostImage = loadImage("images/green ghost.png")
  redGhostImage = loadImage("images/red ghost.png")
  blueGhostImage = loadImage("images/blue ghost.png")
  pinkGhostImage = loadImage("images/pink ghost.png")
  logoImage = loadImage("images/logo.png")
  deathSound = loadSound("images/pacman_death.wav")
  chompSound = loadSound("images/pacman_chomp.wav")
}

function setup() {
  createCanvas(500,550)
  player = createSprite(10,232,20,20)
  player.scale = 0.06
  player.addImage("right", playerRight)
  player.addImage("left", playerLeft)
  player.addImage("up", playerUp)
  player.addImage("down", playerDown)
  
  

  

  

//creating walls
  b1 = createSprite(70,63,49,33)
  b1.visible = false

  b2 = createSprite(167,63,49,30)
  b2.visible = false

  b3 = createSprite(333,60,49,30)
  b3.visible = false

  b4 = createSprite(430,63,49,33)
  b4.visible = false

  b5 = createSprite(70,117,46,24)
  b5.visible = false

  b6 = createSprite(430,117,46,24)
  b6.visible = false

  b7 = createSprite(163,360,60,22)
  b7.visible = false

  b8 = createSprite(337,358,65,22)
  b8.visible = false

  b9 = createSprite(0,8,1000,20)
  b9.visible = false

  b10 = createSprite(8,0,20,310)
  b10.visible = false

  b11 = createSprite(500,0,36,310)
  b11.visible = false

  b12 = createSprite(0,500,1000,37)
  b12.visible = false

  b13 = createSprite(0,500,38,379)
  b13.visible = false

  b14 = createSprite(500,500,38,379)
  b14.visible = false

  b15 = createSprite(30,175,125,65)
  b15.visible = false

  b16 = createSprite(30,290,125,65)
  b16.visible = false

  b17 = createSprite(470,175,125,65)
  b17.visible = false

  b18 = createSprite(470,290,125,65)
  b18.visible = false

  b19 = createSprite(27,408,22,22)
  b19.visible = false

  b20 = createSprite(473,403,22,22)
  b20.visible = false

  b21 = createSprite(250,0,25,158)
  b21.visible = false

  b22 = createSprite(250,108,107,22)
  b22.visible = false

  b23 = createSprite(250,135,25,75)
  b23.visible = false

  b24 = createSprite(250,402,107,16)
  b24.visible = false

  b25 = createSprite(250,429,25,75)
  b25.visible = false

  b26 = createSprite(250,307,107,22)
  b26.visible = false
  
  b27 = createSprite(250,335,25,75)
  b27.visible = false

  b28 = createSprite(142,293,20,60)
  b28.visible = false

  b29 = createSprite(358,287,20,60)
  b29.visible = false

  b30 = createSprite(143,170,25,105)
  b30.visible = false

  b31 = createSprite(180,170,58,25)
  b31.visible = false

  b32 = createSprite(358,170,25,105)
  b32.visible = false

  b33 = createSprite(320,170,58,25)
  b33.visible = false

  b34 = createSprite(123,458,150,20)
  b34.visible = false

  b35 = createSprite(145,430,25,75)
  b35.visible = false

  b36 = createSprite(378,458,150,20)
  b36.visible = false

  b37 = createSprite(355,430,25,75)
  b37.visible = false

  b38 = createSprite(72,363,55,22)
  b38.visible = false

  b39 = createSprite(88,389,22,59)
  b39.visible = false

  b40 = createSprite(431,360,55,22)
  b40.visible = false

  b41 = createSprite(418,383,22,59)
  b41.visible = false

  b42 = createSprite(250,280,130,7)
  b42.visible = false

  b43 = createSprite(189,250,7,60)
  b43.visible = false

  b44 = createSprite(312,250,7,60)
  b44.visible = false

  b45 = createSprite(293,218,45,7)
  b45.visible = false

  b46 = createSprite(207,218,45,7)
  b46.visible = false

//creating coins
  coin1 = createSprite(111,235,10,10)
  coin1.addImage("coin1", coinImage)
  coin1.scale = 0.07

  coin2 = createSprite(111,200,10,10)
  coin2.addImage("coin2", coinImage)
  coin2.scale = 0.07

  coin3 = createSprite(111,165,10,10)
  coin3.addImage("coin3", coinImage)
  coin3.scale = 0.07

  coin4 = createSprite(111,130,10,10)
  coin4.addImage("coin4", coinImage)
  coin4.scale = 0.07

  coin5 = createSprite(111,95,10,10)
  coin5.addImage("coin5", coinImage)
  coin5.scale = 0.07

  coin6 = createSprite(111,60,10,10)
  coin6.addImage("coin6", coinImage)
  coin6.scale = 0.07

  coin7 = createSprite(111,30,10,10)
  coin7.addImage("coin7", coinImage)
  coin7.scale = 0.07

  coin8 = createSprite(111,270,10,10)
  coin8.addImage("coin8", coinImage)
  coin8.scale = 0.07

  coin9 = createSprite(111,305,10,10)
  coin9.addImage("coin9", coinImage)
  coin9.scale = 0.07

  coin10 = createSprite(111,340,10,10)
  coin10.addImage("coin10", coinImage)
  coin10.scale = 0.07

  coin11 = createSprite(111,375,10,10)
  coin11.addImage("coin11", coinImage)
  coin11.scale = 0.07

  coin12 = createSprite(111,405,10,10)
  coin12.addImage("coin12", coinImage)
  coin12.scale = 0.07

  coin13 = createSprite(111,435,10,10)
  coin13.addImage("coin13", coinImage)
  coin13.scale = 0.07

  coin14= createSprite(389,235,10,10)
  coin14.addImage("coin14", coinImage)
  coin14.scale = 0.07

  coin15 = createSprite(389,270,10,10)
  coin15.addImage("coin15", coinImage)
  coin15.scale = 0.07

  coin16 = createSprite(389,305,10,10)
  coin16.addImage("coin16", coinImage)
  coin16.scale = 0.07

  coin17 = createSprite(389,340,10,10)
  coin17.addImage("coin17", coinImage)
  coin17.scale = 0.07

  coin18 = createSprite(389,375,10,10)
  coin18.addImage("coin18", coinImage)
  coin18.scale = 0.07

  coin19 = createSprite(389,405,10,10)
  coin19.addImage("coin19", coinImage)
  coin19.scale = 0.07

  coin20 = createSprite(389,435,10,10)
  coin20.addImage("coin20", coinImage)
  coin20.scale = 0.07

  coin21 = createSprite(389,200,10,10)
  coin21.addImage("coin21", coinImage)
  coin21.scale = 0.07

  coin22 = createSprite(389,165,10,10)
  coin22.addImage("coin22", coinImage)
  coin22.scale = 0.07

  coin23 = createSprite(389,130,10,10)
  coin23.addImage("coin23", coinImage)
  coin23.scale = 0.07

  coin24 = createSprite(389,95,10,10)
  coin24.addImage("coin24", coinImage)
  coin24.scale = 0.07

  coin25 = createSprite(389,60,10,10)
  coin25.addImage("coin25", coinImage)
  coin25.scale = 0.07

  coin26 = createSprite(389,30,10,10)
  coin26.addImage("coin26", coinImage)
  coin26.scale = 0.07

  coin27 = createSprite(354,30,10,10)
  coin27.addImage("coin27", coinImage)
  coin27.scale = 0.07

  coin28 = createSprite(319,30,10,10)
  coin28.addImage("coin27", coinImage)
  coin28.scale = 0.07

  coin29 = createSprite(284,30,10,10)
  coin29.addImage("coin29", coinImage)
  coin29.scale = 0.07

  coin30 = createSprite(424,30,10,10)
  coin30.addImage("coin30", coinImage)
  coin30.scale = 0.07

  coin31 = createSprite(459,30,10,10)
  coin31.addImage("coin31", coinImage)
  coin31.scale = 0.07

  coin32 = createSprite(467,57,10,10)
  coin32.addImage("coin32", coinImage)
  coin32.scale = 0.07

  coin33 = createSprite(467,93,10,10)
  coin33.addImage("coin33", coinImage)
  coin33.scale = 0.07

  coin34 = createSprite(467,126,10,10)
  coin34.addImage("coin34", coinImage)
  coin34.scale = 0.07

  coin35 = createSprite(430,93,10,10)
  coin35.addImage("coin35", coinImage)
  coin35.scale = 0.07

  coin36 = createSprite(350,96,10,10)
  coin36.addImage("coin36", coinImage)
  coin36.scale = 0.07

  coin37 = createSprite(315,96,10,10)
  coin37.addImage("coin37", coinImage)
  coin37.scale = 0.07

  coin38 = createSprite(325,135,10,10)
  coin38.addImage("coin38", coinImage)
  coin38.scale = 0.07

  coin39 = createSprite(289,135,10,10)
  coin39.addImage("coin39", coinImage)
  coin39.scale = 0.07

  coin40 = createSprite(278,170,10,10)
  coin40.addImage("coin40", coinImage)
  coin40.scale = 0.07

  coin41 = createSprite(278,200,10,10)
  coin41.addImage("coin41", coinImage)
  coin41.scale = 0.07

  coin42 = createSprite(283,65,10,10)
  coin42.addImage("coin42", coinImage)
  coin42.scale = 0.07

  coin43 = createSprite(430,235,10,10)
  coin43.addImage("coin43", coinImage)
  coin43.scale = 0.07

  coin44 = createSprite(470,235,10,10)
  coin44.addImage("coin44", coinImage)
  coin44.scale = 0.07

  coin45 = createSprite(358,238,10,10)
  coin45.addImage("coin45", coinImage)
  coin45.scale = 0.07

  coin46 = createSprite(330,238,10,10)
  coin46.addImage("coin46", coinImage)
  coin46.scale = 0.07
  
  coin47 = createSprite(320,200,10,10)
  coin47.addImage("coin47", coinImage)
  coin47.scale = 0.07

  coin48 = createSprite(240,200,10,10)
  coin48.addImage("coin48", coinImage)
  coin48.scale = 0.07

  coin49 = createSprite(210,200,10,10)
  coin49.addImage("coin49", coinImage)
  coin49.scale = 0.07

  coin50 = createSprite(170,200,10,10)
  coin50.addImage("coin50", coinImage)
  coin50.scale = 0.07

  coin51 = createSprite(331,275,10,10)
  coin51.addImage("coin51", coinImage)
  coin51.scale = 0.07

  coin52 = createSprite(430,338,10,10)
  coin52.addImage("coin52", coinImage)
  coin52.scale = 0.07

  coin53 = createSprite(468,338,10,10)
  coin53.addImage("coin53", coinImage)
  coin53.scale = 0.07

  coin54 = createSprite(468,375,10,10)
  coin54.addImage("coin54", coinImage)
  coin54.scale = 0.07

  coin55 = createSprite(445,395,10,10)
  coin55.addImage("coin55", coinImage)
  coin55.scale = 0.07

  coin56 = createSprite(445,430,10,10)
  coin56.addImage("coin56", coinImage)
  coin56.scale = 0.07

  coin57 = createSprite(418,430,10,10)
  coin57.addImage("coin57", coinImage)
  coin57.scale = 0.07
  
  coin58 = createSprite(468,450,10,10)
  coin58.addImage("coin58", coinImage)
  coin58.scale = 0.07

  coin59 = createSprite(331,308,10,10)
  coin59.addImage("coin59", coinImage)
  coin59.scale = 0.07

  coin60 = createSprite(360,335,10,10)
  coin60.addImage("coin60", coinImage)
  coin60.scale = 0.07

  coin61 = createSprite(320,335,10,10)
  coin61.addImage("coin61", coinImage)
  coin61.scale = 0.07

  coin62 = createSprite(285,335,10,10)
  coin62.addImage("coin62", coinImage)
  coin62.scale = 0.07

  coin63 = createSprite(285,370,10,10)
  coin63.addImage("coin63", coinImage)
  coin63.scale = 0.07

  coin64 = createSprite(325,390,10,10)
  coin64.addImage("coin64", coinImage)
  coin64.scale = 0.07

  coin65 = createSprite(325,430,10,10)
  coin65.addImage("coin65", coinImage)
  coin65.scale = 0.07

  coin66 = createSprite(285,430,10,10)
  coin66.addImage("coin66", coinImage)
  coin66.scale = 0.07

  coin67 = createSprite(285,460,10,10)
  coin67.addImage("coin67", coinImage)
  coin67.scale = 0.07

  coin68 = createSprite(218,460,10,10)
  coin68.addImage("coin68", coinImage)
  coin68.scale = 0.07

  coin69 = createSprite(218,430,10,10)
  coin69.addImage("coin69", coinImage)
  coin69.scale = 0.07

  coin70 = createSprite(180,430,10,10)
  coin70.addImage("coin70", coinImage)
  coin70.scale = 0.07

  coin71 = createSprite(180,390,10,10)
  coin71.addImage("coin71", coinImage)
  coin71.scale = 0.07

  coin72 = createSprite(32,465,10,10)
  coin72.addImage("coin72", coinImage)
  coin72.scale = 0.07

  coin73 = createSprite(32,435,10,10)
  coin73.addImage("coin74", coinImage)
  coin73.scale = 0.07

  coin74 = createSprite(65,430,10,10)
  coin74.addImage("coin74", coinImage)
  coin74.scale = 0.07

  coin75 = createSprite(60,390,10,10)
  coin75.addImage("coin75", coinImage)
  coin75.scale = 0.07

  coin76 = createSprite(33,370,10,10)
  coin76.addImage("coin76", coinImage)
  coin76.scale = 0.07

  coin77 = createSprite(33,340,10,10)
  coin77.addImage("coin77", coinImage)
  coin77.scale = 0.07

  coin78 = createSprite(70,340,10,10)
  coin78.addImage("coin78", coinImage)
  coin78.scale = 0.07

  coin79 = createSprite(150,340,10,10)
  coin79.addImage("coin79", coinImage)
  coin79.scale = 0.07

  coin80 = createSprite(185,340,10,10)
  coin80.addImage("coin80", coinImage)
  coin80.scale = 0.07

  coin801 = createSprite(220,340,10,10)
  coin801.addImage("coin801", coinImage)
  coin801.scale = 0.07

  coin81 = createSprite(220,370,10,10)
  coin81.addImage("coin81", coinImage)
  coin81.scale = 0.07

  coin82 = createSprite(170,310,10,10)
  coin82.addImage("coin82", coinImage)
  coin82.scale = 0.07

  coin83 = createSprite(170,270,10,10)
  coin83.addImage("coin83", coinImage)
  coin83.scale = 0.07

  coin84 = createSprite(170,235,10,10)
  coin84.addImage("coin84", coinImage)
  coin84.scale = 0.07

  coin85 = createSprite(145,240,10,10)
  coin85.addImage("coin80", coinImage)
  coin85.scale = 0.07

  coin86 = createSprite(223,170,10,10)
  coin86.addImage("coin86", coinImage)
  coin86.scale = 0.07

  coin87 = createSprite(223,140,10,10)
  coin87.addImage("coin87", coinImage)
  coin87.scale = 0.07

  coin88 = createSprite(195,140,10,10)
  coin88.addImage("coin88", coinImage)
  coin88.scale = 0.07

  coin89 = createSprite(170,135,10,10)
  coin89.addImage("coin89", coinImage)
  coin89.scale = 0.07

  coin90 = createSprite(170,100,10,10)
  coin90.addImage("coin90", coinImage)
  coin90.scale = 0.07

  coin91 = createSprite(140,100,10,10)
  coin91.addImage("coin91", coinImage)
  coin91.scale = 0.07

  coin92 = createSprite(70,93,10,10)
  coin92.addImage("coin92", coinImage)
  coin92.scale = 0.07

  coin93 = createSprite(35,93,10,10)
  coin93.addImage("coin93", coinImage)
  coin93.scale = 0.07

  coin94 = createSprite(35,120,10,10)
  coin94.addImage("coin94", coinImage)
  coin94.scale = 0.07

  coin95 = createSprite(35,65,10,10)
  coin95.addImage("coin95", coinImage)
  coin95.scale = 0.07

  coin96 = createSprite(35,35,10,10)
  coin96.addImage("coin96", coinImage)
  coin96.scale = 0.07

  coin97 = createSprite(70,35,10,10)
  coin97.addImage("coin97", coinImage)
  coin97.scale = 0.07

  coin98 = createSprite(150,35,10,10)
  coin98.addImage("coin98", coinImage)
  coin98.scale = 0.07

  coin99 = createSprite(185,35,10,10)
  coin99.addImage("coin99", coinImage)
  coin99.scale = 0.07

  coin100= createSprite(220,35,10,10)
  coin100.addImage("coin100", coinImage)
  coin100.scale = 0.07

  coin101 = createSprite(220,70,10,10)
  coin101.addImage("coin94", coinImage)
  coin101.scale = 0.07

  greenGhost = createSprite(250,250,10,10)
  greenGhost.addImage("green", greenGhostImage)
  greenGhost.scale = 0.019
  greenGhost.velocityX = 0
  greenGhost.velocityY = -2

  redGhost = createSprite(250,250,10,10)
  redGhost.addImage("red", redGhostImage)
  redGhost.scale = 0.23
  redGhost.velocityX = 0
  redGhost.velocityY = -2

  blueGhost = createSprite(250,250,10,10)
  blueGhost.addImage("blue", blueGhostImage)
  blueGhost.scale = 0.018
  blueGhost.velocityX = 0
  blueGhost.velocityY = -2

  pinkGhost = createSprite(250,250,10,10)
  pinkGhost.addImage("pink", pinkGhostImage)
  pinkGhost.scale = 0.020
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = -2

  
}





function draw() {
  background(0)
  imageMode(CENTER)
  image(maze, width/2, 250, width, 500)
  image(logoImage, 100,520,120,30)
  

  if(keyDown("RIGHT")){
    player.changeImage("right")
    player.x += 2
  }

  if(keyDown("LEFT")){
    player.changeImage("left")
    player.x -= 2
  }
  
  if(keyDown("UP")){
    player.changeImage("up")
    player.y -= 2
  }

  if(keyDown("DOWN")){
    player.changeImage("down")
    player.y += 2
  }

  greenGhostMovement();
  redGhostMovement();
  blueGhostMovement();
  pinkGhostMovement();
  

  
//wall and player collide
  player.collide(b1)
  player.collide(b2)
  player.collide(b3)
  player.collide(b4)
  player.collide(b5)
  player.collide(b6)
  player.collide(b7)
  player.collide(b8)
  player.collide(b9)
  player.collide(b10)
  player.collide(b11)
  player.collide(b12)
  player.collide(b13)
  player.collide(b14)
  player.collide(b15)
  player.collide(b16)
  player.collide(b17)
  player.collide(b18)
  player.collide(b19)
  player.collide(b20)
  player.collide(b21)
  player.collide(b22)
  player.collide(b23)
  player.collide(b24)
  player.collide(b25)
  player.collide(b26)
  player.collide(b27)
  player.collide(b28)
  player.collide(b29)
  player.collide(b30)
  player.collide(b31)
  player.collide(b32)
  player.collide(b33)
  player.collide(b34)
  player.collide(b35)
  player.collide(b36)
  player.collide(b37)
  player.collide(b38)
  player.collide(b39)
  player.collide(b40)
  player.collide(b41)
  player.collide(b42)
  player.collide(b43)
  player.collide(b44)
  player.collide(b45)
  player.collide(b46)


//coin and player collide
  if(player.collide(coin1)){
    coin1.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin2)){
    coin2.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin3)){
    coin3.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin4)){
    coin4.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin5)){
    coin5.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin6)){
    coin6.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }
 
  if(player.collide(coin7)){
    coin7.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin8)){
    coin8.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin9)){
    coin9.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin10)){
    coin10.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin11)){
    coin11.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin12)){
    coin12.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin13)){
    coin13.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin14)){
    coin14.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin15)){
    coin15.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin16)){
    coin16.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin17)){
    coin17.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin18)){
    coin18.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin19)){
    coin19.destroy()
    score += 1
  }

  if(player.collide(coin20)){
    coin20.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin21)){
    coin21.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin22)){
    coin22.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin23)){
    coin23.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin24)){
    coin24.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin25)){
    coin25.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin26)){
    coin26.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin27)){
    coin27.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin28)){
    coin28.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin29)){
    coin29.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin30)){
    coin30.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin31)){
    coin31.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin32)){
    coin32.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }
 
  if(player.collide(coin33)){
    coin33.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin34)){
    coin34.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin35)){
    coin35.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin36)){
    coin36.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin37)){
    coin37.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin38)){
    coin38.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin39)){
    coin39.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin40)){
    coin40.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin41)){
    coin41.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin42)){
    coin42.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin43)){
    coin43.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin44)){
    coin44.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin45)){
    coin45.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin46)){
    coin46.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin47)){
    coin47.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin48)){
    coin48.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin49)){
    coin49.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin50)){
    coin50.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin51)){
    coin51.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin52)){
    coin52.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin53)){
    coin53.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin54)){
    coin54.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin55)){
    coin55.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin56)){
    coin56.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin57)){
    coin57.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin58)){
    coin58.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }
 
  if(player.collide(coin59)){
    coin59.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin60)){
    coin60.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin61)){
    coin61.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin62)){
    coin62.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin63)){
    coin63.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin64)){
    coin64.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin65)){
    coin65.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin66)){
    coin66.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin67)){
    coin67.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin68)){
    coin68.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin69)){
    coin69.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin70)){
    coin70.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin71)){
    coin71.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin72)){
    coin72.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin73)){
    coin73.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin74)){
    coin74.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin75)){
    coin75.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin76)){
    coin76.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin77)){
    coin77.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin78)){
    coin78.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin79)){
    coin79.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin80)){
    coin80.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin801)){
    coin801.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin81)){
    coin81.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin82)){
    coin82.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin83)){
    coin83.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin84)){
    coin84.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }
 
  if(player.collide(coin85)){
    coin85.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin86)){
    coin86.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin87)){
    coin87.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin88)){
    coin88.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin89)){
    coin89.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin90)){
    coin90.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin91)){
    coin91.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin92)){
    coin92.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin93)){
    coin93.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin94)){
    coin94.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin95)){
    coin95.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin96)){
    coin96.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin97)){
    coin97.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin98)){
    coin98.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin99)){
    coin99.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin100)){
    coin100.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(coin101)){
    coin101.destroy()
    score += 1
    chompSound.play()
    chompSound.setVolume(0.2)
  }

  if(player.collide(greenGhost)){
    greenGhost.destroy()
    death += 1
  }

  if(player.collide(redGhost)){
    redGhost.destroy()
    death += 1
  }

  if(player.collide(blueGhost)){
    blueGhost.destroy()
    death += 1
  }

  if(player.collide(pinkGhost)){
    pinkGhost.destroy()
    death += 1
  }

  if(death === 4){
    gameover();
    player.destroy()
    greenGhost.velocityX = 0
    greenGhost.velocityY = 0
    redGhost.velocityX = 0
    redGhost.velocityY = 0
    blueGhost.velocityX = 0
    blueGhost.velocityY = 0
    pinkGhost.velocityX = 0
    pinkGhost.velocityY = 0
  }

  if(score === 102){
    youwon()
  }

  
  drawSprites()

  fill("yellow")
  textSize(25)
  text("SCORE: " + score,330,530)
 

}

function greenGhostMovement(){

if(greenGhost.collide(b23)){
 greenGhost.velocityX = -2
 greenGhost.velocityY = 0
}

if(greenGhost.collide(b31)){
 greenGhost.velocityX = 0
 greenGhost.velocityY = -2
}

if(greenGhost.collide(b22)){
 greenGhost.velocityX = -2
 greenGhost.velocityY = 0
}
      
if(greenGhost.collide(b30)){
 greenGhost.velocityX = 0
 greenGhost.velocityY = -2
}

if(greenGhost.collide(b2)){
 greenGhost.velocityX = -2
 greenGhost.velocityY = 0
}

if(greenGhost.collide(b10)){
 greenGhost.velocityX = 0
 greenGhost.velocityY = -2
}

if(greenGhost.collide(b9)){
 greenGhost.velocityX = 2
 greenGhost.velocityY = 0
}

if(greenGhost.collide(b21)){
 greenGhost.velocityX = 0
 greenGhost.velocityY = 2
}

}

function redGhostMovement(){
if(redGhost.collide(b23)){
  redGhost.velocityX = 2
  redGhost.velocityY = 0
}

if(redGhost.collide(b33)){
  redGhost.velocityX = 0
  redGhost.velocityY = -2
}

if(redGhost.collide(b22)){
  redGhost.velocityX = 2
  redGhost.velocityY = 0
}

if(redGhost.collide(b32)){
  redGhost.velocityX = 0
  redGhost.velocityY = -2
}

if(redGhost.collide(b3)){
  redGhost.velocityX = 2
  redGhost.velocityY = 0
}

if(redGhost.collide(b11)){
  redGhost.velocityX = 0
  redGhost.velocityY = -2
}

if(redGhost.collide(b9)){
  redGhost.velocityX = -2
  redGhost.velocityY = 0
}

if(redGhost.collide(b21)){
  redGhost.velocityX = 0
  redGhost.velocityY = 2
}

}

function blueGhostMovement(){
if(blueGhost.collide(b23)){
  blueGhost.velocityX = -2
  blueGhost.velocityY = 0
}

if(blueGhost.collide(b31)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = 2
}

if(blueGhost.collide(b46)){
  blueGhost.velocityX = -2
  blueGhost.velocityY = 0
}

if(blueGhost.collide(b30)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = 2
}

if(blueGhost.collide(b7)){
  blueGhost.velocityX = 2
  blueGhost.velocityY = 0
}

if(blueGhost.collide(b27)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = 2
}

if(blueGhost.collide(b24)){
  blueGhost.velocityX = -2
  blueGhost.velocityY = 0
}

if(blueGhost.collide(b39)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = 2
}

if(blueGhost.collide(b34)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = -2
}

if(blueGhost.collide(b9)){
  blueGhost.velocityX = 0
  blueGhost.velocityY = 2
}

}


function pinkGhostMovement(){
if(pinkGhost.collide(b23)){
  pinkGhost.velocityX = 2
  pinkGhost.velocityY = 0
}

if(pinkGhost.collide(b33)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = 2
}

if(pinkGhost.collide(b45)){
  pinkGhost.velocityX = 2
  pinkGhost.velocityY = 0
}

if(pinkGhost.collide(b32)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = 2
}

if(pinkGhost.collide(b8)){
  pinkGhost.velocityX = -2
  pinkGhost.velocityY = 0
}

if(pinkGhost.collide(b27)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = 2
}

if(pinkGhost.collide(b24)){
  pinkGhost.velocityX = 2
  pinkGhost.velocityY = 0
}

if(pinkGhost.collide(b41)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = 2
}

if(pinkGhost.collide(b36)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = -2
}

if(pinkGhost.collide(b9)){
  pinkGhost.velocityX = 0
  pinkGhost.velocityY = 2
}
}

function gameover(){
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
      "https://ssb.wiki.gallery/images/c/cb/Ghosts_%28Pac-Man%29.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );

  deathSound.play()
  deathSound.setVolume(0.7)

}

function youwon(){
  swal(
    {
      title: `You Won!!`,
      text: "Thanks for playing!!",
      imageUrl:
      "https://www.kindpng.com/picc/m/15-155699_pac-man-pixel-art-hd-png-download.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}






  