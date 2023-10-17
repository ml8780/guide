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

let voice = new p5.Speech();

let originW = ['almuerzo', '탁상용 램프', 'bade ganje dhabbe vaala aadamee', 'пончики', 'Koṭṭaivaṭi nīr', 'zdjęcie', 'brzoskwinia'];
let hybridW = ['lonche', 'stand', 'stadium', 'donaty', 'kopi', 'pikcza', 'picziesa'];
let engW = ['lunch, desk lamp, man with a large bald spot, donuts, coffee, picture, peach'];
let voicesPicked = ['Google español de Estados Unidos', 'Yuna', 'Google हिन्दी', 'Google русский', 'Google हिन्दी', 'Google polski', 'Google polski'];


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

let cycle = 0;
let counter = 0;


function setup() {

    voice.onLoad = voiceReady;
    function voiceReady() {
        console.log(voice.voices);
    }


    let canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('canvasForHTML');

    xPos = width / 120 * 2
    yPos = height / 80
    background(200);

}

function draw() {

    background(51, 0.4);
    scale(20);

    normalMaterial();

    push();
    textSize(1);
    textFont(roboto)
    text('welcome to our room', 0, 0);
    translate(100, 0, 100);
    pop();

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


}


function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight)
}

function keyPressed() {
    if (key === 'h') {
        voice.setVoice('Bells');
        voice.setRate(0.7);
        voice.setPitch(1);
        voice.speak(hybridW);
    }

}

function mousePressed() {

    if (mouseButton === LEFT) {
        ////////need to change the voice to match the origin language vvv
        voice.setRate(0.5);
        voice.setPitch(0.5);

        voice.setVoice(voicesPicked[cycle]);
        voice.speak(originW[cycle]);

        if (cycle < originW.length - 1){
            cycle++;
        } else {
            cycle = 0;
        }
    }

    if (mouseButton === RIGHT) {

        voice.setRate(0.5);
        voice.setPitch(0.5);
        voice.setVoice('Samantha');
        voice.speak(engW[counter]);

        if (counter < engW.length - 1){
            counter++;
        } else {
            counter = 0;
        }
    }

    if (mouseButton === CENTER) {
        voice.setVoice('Bells');
        voice.setRate(0.7);
        voice.setPitch(1);
        voice.speak(hybridW);
    }

}

let spanglish = {

    display: function () {
        rotateY(frameCount * 0.005);
        translate(xPos, yPos, 0);
        textSize(5);
        textFont(roboto)
        // fill(248, 3, 252);
        text('Lonche', 5, 0);
        normalMaterial();
        model(lunch);
        // strokeWeight(4);
        // stroke(255, 0, 0);
        // beginShape(LINES);
        // vertex(0, 0);
        // vertex(xPos, yPos, 0);
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

    }

}
