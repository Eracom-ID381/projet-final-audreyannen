function setup() {
    createCanvas(windowWidth, windowHeight);
    gfx = createGraphics(asciiart_width, asciiart_height);
    gfx.pixelDensity(1);
}

function draw() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}