radio.onReceivedNumber(function (receivedNumber) {
    boef.set(LedSpriteProperty.Y, (receivedNumber - receivedNumber % 5) / 5)
    boef.set(LedSpriteProperty.X, receivedNumber % 5)
})
input.onButtonPressed(Button.A, function () {
    politie.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    politie.move(1)
    radio.sendNumber(politie.get(LedSpriteProperty.X) + politie.get(LedSpriteProperty.Y) * 5)
})
input.onButtonPressed(Button.B, function () {
    politie.turn(Direction.Right, 90)
})
let politie: game.LedSprite = null
let boef: game.LedSprite = null
radio.setGroup(255)
boef = game.createSprite(0, 0)
politie = game.createSprite(4, 4)
politie.turn(Direction.Left, 90)
