var carLib = require('./lib/CarManager');

var carMgr = new carLib();
carMgr.left(0);
//carMgr.forward(30);
setTimeout(function() {
    console.log(1);
    carMgr.left(1);
    //carMgr.forward(40);
}, 2000);

setTimeout(function() {
    console.log(20);
    carMgr.left(0);
    carMgr.left(20);
    //carMgr.forward(50);
}, 4000);
setTimeout(function() {
    carMgr.left(0);
    carMgr.left(80);
    console.log(80);
    //carMgr.forward(70);
}, 6000);
setTimeout(function() {
    carMgr.left(0);
    carMgr.left(100);
    console.log(100);
    //carMgr.forward(80);
}, 8000);
setTimeout(function() {
    carMgr.straight();
    carMgr.stop();
}, 10000);
