radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(1)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plotBarGraph(
        Math.round(input.magneticForce(Dimension.Strength)),
        1
        )
        radio.sendNumber(Math.round(input.magneticForce(Dimension.Strength)))
        serial.writeValue("x", input.magneticForce(Dimension.Strength))
        basic.pause(2000)
    }
})
