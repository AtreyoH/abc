function infoSprites() {
  sunInfo = createSprite(-13920, displayHeight / 2 - 200-230, 10, 10)
  sunInfo.addImage(sunInfoImg)
  sunInfo.scale = 0.7
  sunInfo.visible = false

  meInfo = createSprite(-10920, displayHeight / 2 - 200-145, 10, 10)
  meInfo.addImage(meInfoImg)
  meInfo.scale = 0.3
  meInfo.visible = false

  veInfo = createSprite(-7920, displayHeight / 2 - 200-175, 10, 10)
  veInfo.addImage(veInfoImg)
  veInfo.scale = 0.3
  veInfo.visible = false

  eaInfo = createSprite(-4920, displayHeight / 2 - 200-175, 10, 10)
  eaInfo.addImage(eaInfoImg)
  eaInfo.scale = 0.3
  eaInfo.visible = false

  maInfo = createSprite(-1920, displayHeight / 2 - 200-145, 10, 10)
  maInfo.addImage(maInfoImg)
  maInfo.scale = 0.3
  maInfo.visible = false

  juInfo = createSprite(1080, displayHeight / 2 - 200-195, 10, 10)
  juInfo.addImage(juInfoImg)
  juInfo.scale = 0.3
  juInfo.visible = false

  saInfo = createSprite(4100, displayHeight / 2 - 200-165, 10, 10)
  saInfo.addImage(saInfoImg)
  saInfo.scale = 0.3
  saInfo.visible = false

  urInfo = createSprite(7080, displayHeight / 2 - 200-170, 10, 10)
  urInfo.addImage(urInfoImg)
  urInfo.scale = 0.3
  urInfo.visible = false

  neInfo = createSprite(10090, displayHeight / 2 - 200-175, 10, 10)
  neInfo.addImage(neInfoImg)
  neInfo.scale = 0.3
  neInfo.visible = false
}

function Information() {
  if (gameState === 2) {

    if (spaceCraft.x > -14500 && spaceCraft.x < -13500) {
      sunInfo.visible = true
    }
    else {
      sunInfo.visible = false
    }
    if (spaceCraft.x > -11500 && spaceCraft.x < -10500) {
      meInfo.visible = true
      merNt.visible = true
    }
    else {
      meInfo.visible = false
      merNt.visible = false
    }

    if (spaceCraft.x > -8500 && spaceCraft.x < -7500) {
      veInfo.visible = true
      venNt.visible = true
    }
    else {
      veInfo.visible = false
      venNt.visible = false
    }

    if (spaceCraft.x > -5500 && spaceCraft.x < -4500) {
      eaInfo.visible = true
      earNt.visible = true
    }
    else {
      eaInfo.visible = false
      earNt.visible = false
    }

    if (spaceCraft.x > -2500 && spaceCraft.x < -1500) {
      maInfo.visible = true
      marNt.visible = true
    }
    else {
      maInfo.visible = false
      marNt.visible = false
    }

    if (spaceCraft.x > 500 && spaceCraft.x < 1500) {
      juInfo.visible = true
      jupNt.visible = true
    }
    else {
      juInfo.visible = false
      jupNt.visible = false
    }

    if (spaceCraft.x > 3500 && spaceCraft.x < 4500) {
      saInfo.visible = true
      satNt.visible = true
    }
    else {
      saInfo.visible = false
      satNt.visible = false
    }

    if (spaceCraft.x > 6500 && spaceCraft.x < 7500) {
      urInfo.visible = true
      uraNt.visible = true
    }
    else {
      urInfo.visible = false
      uraNt.visible = false
    }

    if (spaceCraft.x > 9500 && spaceCraft.x < 10500) {
      neInfo.visible = true
      nepNt.visible = true
    }
    else {
      neInfo.visible = false
      nepNt.visible = false
    }
  }
}

