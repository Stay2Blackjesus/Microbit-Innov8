input.onButtonPressed(Button.A, function () {
    Temp += 1
    soundExpression.happy.play()
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(Temp)
})
input.onButtonPressed(Button.AB, function () {
    if (warn == false) {
        warn = true
    } else {
        warn = false
    }
})
input.onButtonPressed(Button.B, function () {
    Temp += -1
    soundExpression.happy.play()
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(Temp)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(Warn_Time)
    basic.pause(500)
    basic.clearScreen()
})
let Warn_Time = 0
let warn = false
let Temp = 0
Temp = 9
basic.forever(function () {
    if (warn == true) {
        while (input.temperature() > Temp) {
            basic.pause(1000)
            Warn_Time += 1
            soundExpression.happy.play()
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
    }
})
