input.onGesture(Gesture.Shake, function () {
    basic.showString("Merry Xmas!")
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    basic.pause(50)
})
