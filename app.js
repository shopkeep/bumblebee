const express = require('express')
const five = require('johnny-five')
const app = express()
const port = 3000

app.listen(port, function() {
    console.log(`listening on port:${port}`)
})

var board = new five.Board({
    repl: true,
    debug: true,
    // port: "/dev/tty.usbmodem1441"
})

var stepper

board.on("ready", function() {
    stepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: [6,7]
    })
})

app.get("/", function(req, res) {
    res.json("POST to /swipe to start a swipe")
})

app.post("/swipe", function(req, res) {
    setTimeout( function() {
        var didComplete = false

        if (!board) {
            res.status(500).json("Error setting up the board.  Please check and make sure everything is connected and plugged in.")
        }
    
        if (!stepper) {
            res.status(500).json("Error setting up the stepper.  Please check and make sure everything is connected and plugged in.")
        }
    
        setTimeout( function() {
            if (!didComplete) {
                res.status(500).json("The operation took too long to complete.  Please check and make sure everything is connected and plugged in.")
            }
        }, 2000)
    
        stepper.rpm(600).ccw().step(2000, function() {
            didComplete = true
            res.json("success")
        })
    }, 1000);
})