function setup () {
    createCanvas(500, 500);
    noStroke();
    fill(0);
}

function draw() {
    background('pink');
    let jump = 100;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            rect(x * jump + 55, y * jump + 60, 80, 80);
        }
    }
}