let Light_reading = 0
basic.forever(function () {
    Light_reading = input.lightLevel()
    if (Light_reading > 128) {
        led.setBrightness(21)
    }
    if (Light_reading < 128) {
        led.setBrightness(237)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
