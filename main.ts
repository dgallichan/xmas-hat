radio.onReceivedString(function (receivedString) {
    flashing = false
    ScrolText.showString(
    receivedString,
    SCROLL_DIR.LEFT,
    SCROLL_ROTATE.SR_0,
    100
    )
    basic.pause(3000)
    flashing = true
})
input.onGesture(Gesture.Shake, function () {
    flashing = false
    ScrolText.showString(
    "Merry Xmas!",
    SCROLL_DIR.LEFT,
    SCROLL_ROTATE.SR_0,
    100
    )
    basic.pause(3000)
    flashing = true
})
let flashing = false
radio.setGroup(101)
flashing = true
basic.forever(function () {
    if (flashing == true) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
    basic.pause(5)
})
