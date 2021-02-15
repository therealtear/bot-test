// import the robotjs library
var robot = require('robotjs');

function main() {
    console.log("Starting...");
    sleep(3000);

    robot.scrollMouse(0, 50);

    while (true) {
        var ore = findOre();

        if(ore == false) {
            rotateCamera();
            returnMine();
            continue;
        }

    robot.moveMouse(ore.x, ore.y);
    sleep(400);
    robot.mouseClick();
    sleep(6000);

    banktp(); 

    }
    }


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


function dropOre() {    // searches inventory for ore to drop
    var x = 1757, y = 760, width = 128, height = 220;
    var img = robot.screen.capture(x, y, width, height);

    for (var i = 0; i < 3000; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);
        
            var invent = ["d97d37", "de7e39", "d97c37"];

        if(invent.includes(sample_color)) {
            var screen_x = (random_x + x);
            var screen_y = (random_y + y);

            robot.moveMouse(screen_x, screen_y);
            sleep(200);
            robot.mouseClick('right');
            sleep(200);
            robot.moveMouse(screen_x, screen_y + 40);
            sleep(200);
            robot.mouseClick();
            sleep(200);

    console.log("Ore dropped from inventory at: " + screen_x + ", " + screen_y);

            return true;
        }
}
return false;
    }


function findOre() {
    var x = 300, y = 300, width = 1300, height = 700;
    var img = robot.screen.capture(x, y, width, height);
    //Capturing whole screen, might fix?

    var ore_colors = ["7a5739", "805c3a", "6a4c30", "8b6440", "88623f", "7d5a39", "765537"];
    //Copper Ore Colors, may add more ores hex values in future?

for (var i = 0; i < 500; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);
        
        
        if(ore_colors.includes(sample_color)) {
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            console.log("Found Copper Ore at: " + screen_x + ", " + screen_y + " color " + sample_color);
            return {x: screen_x, y: screen_y};
        }
    }

    return false; // false is returned if an ore is not found
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

    }


    function rotateCamera() {
        console.log("Rotating camera");
        robot.keyToggle('right', 'down');
        sleep(1000);
        robot.keyToggle('right', 'up');
    }


    function banktp() {
        var x = 0, y = 0, width = 1920, height = 1080;
        var img = robot.screen.capture(x, y, width, height);
        fullinventchecker = ["3e3529"]
        var sample_color = img.colorAt(1882, 976);
        if(sample_color != fullinventchecker) {
            robot.typeString("::home")
            robot.keyTap("enter")
            sleep(5000)
            console.log("Teleporting to bank, inventory full.");

            robot.moveMouse(1775, 73);
            sleep(200);
            robot.mouseClick();
            sleep(400);
            console.log("Aligning Compass.");

            runBank();
            clickBank();
            depositBank();
            returnMine();
        } 
    }


    function runBank(){

        robot.moveMouse(1800, 135);
        sleep(200);
        robot.mouseClick();
        sleep(4500);
        console.log("Running to Bank.");

        }


        function clickBank() {
        
                robot.moveMouse(684, 598);
                sleep(200);
                robot.mouseClick();
                sleep(3000);
                console.log("Clicking on Bank.");
        
            }

            function depositBank() {
        
                robot.moveMouse(1100, 848);
                sleep(200);
                robot.mouseClick();
                sleep(3000);
                console.log("Deposit Successful.");

                robot.keyTap("escape")
                sleep(200);
        
            }

            function returnMine() {
        
                robot.keyTap("f4")
                sleep(200);

                robot.moveMouse(1744, 877);
                sleep(200);
                robot.mouseClick();
                sleep(200);

                robot.keyTap("f1")
                sleep(200);

                robot.keyTap("G")
                sleep(200);

                robot.keyTap("A")
                sleep(5000);

                console.log("Searching for Ores...");

                
        
            }
    

main();
