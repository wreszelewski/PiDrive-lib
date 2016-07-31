var wpi = require('wiring-pi');

var CarManager = function() {
    this.engineDIn1 = 2;
    this.engineDIn2 = 3;
    this.engineDPWM = 1;
    this.engineTIn1 = 0;
    this.engineTIn2 = 7;
    this.engineTPWM = 4;

    wpi.setup('wpi');

    wpi.pinMode(this.engineDIn1, wpi.OUTPUT);
    wpi.pinMode(this.engineDIn2, wpi.OUTPUT);
    wpi.pinMode(this.engineDPWM, wpi.PWM_OUTPUT);
    wpi.pinMode(this.engineTIn1, wpi.OUTPUT);
    wpi.pinMode(this.engineTIn2, wpi.OUTPUT);
    wpi.pinMode(this.engineTPWM, wpi.SOFT_PWM_OUTPUT);
    //wpi.pinMode(this.engineTPWM, wpi.OUTPUT);
    //wpi.digitalWrite(this.engineTPWM, 1);
    wpi.softPwmCreate(this.engineTPWM, 0, 100);
};

CarManager.prototype.forward = function(speed) {
    wpi.pwmWrite(this.engineDPWM, Math.ceil(1024 * speed / 100));
    wpi.digitalWrite(this.engineDIn1, 0);
    wpi.digitalWrite(this.engineDIn2, 1);
};

CarManager.prototype.backward = function(speed) {
    wpi.pwmWrite(this.engineDPWM, Math.ceil(1024 * speed / 100));
    wpi.digitalWrite(this.engineDIn1, 1);
    wpi.digitalWrite(this.engineDIn2, 0);
};

CarManager.prototype.stop = function() {
    wpi.pwmWrite(this.engineDPWM, 0);
    wpi.digitalWrite(this.engineDIn1, 0);
    wpi.digitalWrite(this.engineDIn2, 0);
};

CarManager.prototype.left = function(angle) {
    console.log(Math.ceil(1024 * angle / 100));
    wpi.softPwmWrite(this.engineTPWM, Math.ceil(1024 * angle / 100));
    wpi.digitalWrite(this.engineTIn1, 1);
    wpi.digitalWrite(this.engineTIn2, 0);
}

CarManager.prototype.right = function(angle) {
    wpi.softPwmWrite(this.engineTPWM, Math.ceil(1024 * angle / 100));
    wpi.digitalWrite(this.engineTIn1, 0);
    wpi.digitalWrite(this.engineTIn2, 1);
}

CarManager.prototype.straight = function() {
    wpi.digitalWrite(this.engineTIn1, 0);
    wpi.digitalWrite(this.engineTIn2, 0);
}

module.exports = CarManager;
