input.onButtonPressed(Button.A, function () {
    motors.dualMotorPower(Motor.A, 50)
    basic.pause(5000)
    motors.dualMotorPower(Motor.A, 0)
})
input.onButtonPressed(Button.B, function () {
    motors.dualMotorPower(Motor.B, 70)
    basic.pause(5000)
    motors.dualMotorPower(Motor.B, 0)
})
