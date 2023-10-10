let coffee;
let head;
let lamp;
let lunch;
let peach;
let picture;
let donut;

let xPos;
let yPos;

let roboto;
let nanum;

// var spanish = ;
// var korean = ;
// var russian = ;
// var polish = ;
let voice = new p5.Speech();
// var tamil = ;
// var hindu = ; 


function preload() {

    roboto = loadFont("Roboto-Regular.ttf");
    nanum = loadFont("NanumGothic.ttf");

    coffee = loadModel("resizedObj/coffee.obj");
    head = loadModel("resizedObj/head.obj");
    lamp = loadModel("resizedObj/lamp1.obj");
    lunch = loadModel("resizedObj/lunch.obj");
    peach = loadModel("resizedObj/peach1.obj");
    picture = loadModel("resizedObj/picture.obj");
}

function setup() {

    voice.onLoad = voiceReady;
    function voiceReady() {
        console.log(voice.voices);
    }

    createCanvas(window.innerWidth, window.innerHeight, WEBGL);

    xPos = width / 120 * 2
    yPos = height / 80

}

function draw() {
    background(200);
    scale(20);

    normalMaterial();

    push();
    textSize(1);
    textFont(roboto)
    text('welcome to our room', 0, 0);
    translate(100, 0, 100);
    pop();

    sound();

    push();
    spanglish.display();
    pop();

    push();
    konglish.display();
    pop();

    push();
    hinglish.display();
    pop();

    push();
    runglish.display();
    pop();

    push();
    singlish.display();
    pop();

    push();
    polamerican.display();
    pop();

    // spanglish.clickable();

}

function sound() {

    if (mouseIsPressed === true) {
        //main-- origin language's form
        if (mouseButton === LEFT) {
            ////////need to change the voice to match the origin language
            voice.setVoice('Samantha');
            voice.setRate(0.2);
            voice.setPitch(0.5);
            voice.speak('almuerzo, 탁상용 램프, bade ganje dhabbe vaala aadamee, пончики, Koṭṭaivaṭi nīr, zdjęcie, brzoskwinia');

        }
        //reveal aspects-- real meaning in English
        if (mouseButton === RIGHT) {
            voice.setVoice('Samantha');
            voice.setRate(0.2);
            voice.setPitch(0.5);
            voice.speak('lunch, desk lamp, man with a large bald spot, donuts, coffee, picture, peach');
        }

        //hybrid
        if (mouseButton === CENTER) {
            voice.setVoice('Bells');
            voice.setRate(0.7);
            voice.setPitch(1);
            voice.speak('lonche, stand, stadium, donaty, kopi, pikcza, picziesa');
        }
    }

    if (keyPressed === true) {
        if (key === 'h') {
            voice.setVoice('Bells');
            voice.setRate(0.7);
            voice.setPitch(1);
            voice.speak('lonche, stand, stadium, donaty, kopi, pikcza, picziesa');
        }
    }
}


function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight)
}

function keyPressed() {
    if (key === 'h') {
        voice.setVoice('Bells');
        voice.setRate(0.7);
        voice.setPitch(1);
        voice.speak('lonche, stand, stadium, donaty, kopi, pikcza, picziesa');
    }

}

let spanglish = {

    display: function () {
        rotateY(frameCount * 0.005);
        translate(xPos, yPos, 0);
        textSize(5);
        textFont(roboto)
        text('Lonche', 5, 0);
        model(lunch);
    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)



            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

let konglish = {
    display: function () {
        rotateZ(frameCount * 0.005);
        translate(-xPos, yPos, 0);
        textSize(5);
        textFont(nanum);
        text('Stand, 스탠드', 5, 0);
        model(lamp);
    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)

            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

let hinglish = {
    display: function () {
        rotateX(frameCount * 0.005);
        translate(0, yPos, 0);
        model(head);
        textSize(5);
        textFont(roboto)
        text('Stadium', 5, 0);
    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)



            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

let runglish = {
    display: function () {
        rotateZ(frameCount * 0.005);
        rotateX(frameCount * 0.005);
        rotateY(frameCount * 0.005);
        translate(xPos, yPos, 0);
        textSize(5);
        textFont(roboto)
        text('Донаты, Donaty', 5, 0);
        scale(0.1);
        donut = torus(30, 15);
    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)



            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

let singlish = {
    display: function () {
        rotateY(frameCount * 0.005);
        translate(xPos, -yPos, 0);
        textSize(5);
        textFont(roboto);
        text('kopi', 5, 0);
        model(coffee);
    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)



            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

let polamerican = {
    display: function () {
        push();
        rotateX(frameCount * 0.005);
        translate(-xPos, -yPos, 0);
        textSize(5);
        textFont(roboto)
        text('Pikcza', 5, 0);
        model(picture);
        pop();

        push();
        rotateZ(frameCount * 0.005);
        rotateY(frameCount * 0.005);
        translate(0, -yPos, 0);
        // fill(217, 142, 137);
        textSize(5);
        textFont(roboto)
        text('Picziesa', 5, 0);
        model(peach);
        pop();

    },

    clickable: function () {
        if (mouseIsPressed === true) {
            //main-- origin language's form
            if (mouseButton === LEFT) {
                voice.setVoice('Yuna');
                voice.speak('main');
                voice.setPitch(0.5)
                voice.setVoice('Moira');
                voice.speak('house');
                voice.setPitch(1)



            }
            //reveal aspects-- real meaning in English
            if (mouseButton === RIGHT) {
                voice.setVoice('Moira');

                voice.speak('meaning');

            }

            //hybrid
            if (mouseButton === CENTER) {
                voice.speak('hybrid');

            }
        }
    }

}

