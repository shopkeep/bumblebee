
# Bumblebee
![wheeeeeee](/media/continuous.gif)


## How to use
1. Have Node installed.
2. Make sure all the wires are connected on the computer, arduino, stepper driver, stepper, and power supply.  Make sure the power supply is plugged in.
3. Clone or download this repository and navigate into its directory and run `npm install`.
4. Open up a terminal and run the command `node app.js`.
5. The server should be up and running.
6. Go to `localhost:3000` in a browser or make a GET request to confirm.
7. Open a program that can make a POST request (I use Postman)
8. Create a POST request to `localhost:3000/swipe` to start a swipe.
9. The server should respond with a `success` message if it succeeds.

### Server Responses

Once you make a POST request to the /swipe endpoint here are the responses you may get back:

__Status Code 200 - "success"__

This indicates that the swipe has successfully completed.

__Status Code 500 - "Error setting up the board.  Please check and make sure everything is connected and plugged in."__

An error occurred while finding/connecting/initializing/setting up the board.  This can happen if the arduino is not connected to the computer, the port specified in the board setup in app.js does not match the port that the arduino is on, or other board errors.  The port specified right now is `/dev/tty.usbmodem1441`.

__Status Code 500 - "Error setting up the stepper.  Please check and make sure everything is connected and plugged in."__

An error occurred while setting up the stepper.  This is most likely caused by faulty connections between the board and stepper driver or between the stepper driver and stepper.

__Status Code 500 -  "The operation took too long to complete.  Please check and make sure everything is connected and plugged in."__

I set timer to finish after 2 seconds.  If the swipe finished within that time, the success occurs, if not then this error does.  Like before, this can be caused by faulty wiring or loose wires.  If you change the rpm or amount of steps to take please make sure to also change the timer appropriately.

### Most of the errors I have seen during testing is that the board or server  takes a little longer to set up sometimes and the app may enter into a bad state.  The best option is to close and restart the app. 


![1](/media/bumblebee-1.png)

![2](/media/bumblebee-2.png)

![3](/media/bumblebee-3.png)

![4](/media/bumblebee-4.png)

![5](/media/bumblebee-5.gif)
