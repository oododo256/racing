controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCar.setImage(assets.image`playercarup`)
    playerDirection = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerDirection == 1) {
        playerCar.setVelocity(-50, 0)
    }
    if (playerDirection == 0) {
        playerCar.setVelocity(0, 50)
    }
    if (playerDirection == 2) {
        playerCar.setVelocity(50, 0)
    }
    if (playerDirection == 3) {
        playerCar.setVelocity(0, -50)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    enemyCar.setVelocity(randint(-50, 50), randint(-50, 50))
    if (playerDirection == 1) {
        playerCar.setVelocity(50, 0)
    }
    if (playerDirection == 0) {
        playerCar.setVelocity(0, -50)
    }
    if (playerDirection == 2) {
        playerCar.setVelocity(-50, 0)
    }
    if (playerDirection == 3) {
        playerCar.setVelocity(0, 50)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCar.setImage(assets.image`playercarleft`)
    playerDirection = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCar.setImage(assets.image`playercarright`)
    playerDirection = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCar.setImage(assets.image`playercardown`)
    playerDirection = 3
})
let playerDirection = 0
let playerCar: Sprite = null
let enemyCar: Sprite = null
tiles.setCurrentTilemap(tilemap`testtrack`)
enemyCar = sprites.create(assets.image`enemycarup`, SpriteKind.Player)
playerCar = sprites.create(assets.image`playercarright`, SpriteKind.Player)
scene.cameraFollowSprite(playerCar)
enemyCar.setBounceOnWall(true)
game.onUpdate(function () {
    if (!(controller.anyButton.isPressed())) {
        playerCar.setVelocity(0, 0)
    }
})
