radio.setTransmitPower(1)
radio.setGroup(142)
basic.forever(function () {
    radio.sendString("Holaa :)")
})
