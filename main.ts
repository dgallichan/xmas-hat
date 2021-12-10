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
flashing = true
basic.forever(function () {
    if (flashing == true) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
    basic.pause(5)
})
