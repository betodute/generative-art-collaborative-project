class ShapeRotate {
    constructor() {
        this.ang1 = TWO_PI * noise(0.01 * frameCount + 10) + mouseX / 20;
        this.ang2 = TWO_PI * noise(0.01 * frameCount + 20) + mouseY / 20;
        this.ang3 = TWO_PI * noise(0.01 * frameCount + 30) + (mouseX + mouseY) / 20;
        this.rx = 60 * noise(0.01 * frameCount + 40);
        this.tx = 200 * noise(0.01 * frameCount + 50);
        this.size1 = 200 * noise(0.01 * frameCount + 60);
        this.size2 = 50 * noise(0.01 * frameCount + 60);
    }

    render() {
        stroke(255, 50);
        fill(255, 0, 0, 100);
        translate(width / 2, height / 2);

        for (var i = 0; i < 8; i++) {
            push();
            rotate(this.ang1 + TWO_PI * i / 8);
            translate(this.tx, 0);
            rect(0, 0, this.size1, this.size1);
            for (var j = 0; j < 6; j++) {
                push();
                rotate(this.ang2 + TWO_PI * j / 6);
                translate(this.rx, 0);
                rotate(this.ang3);
                rect(this.rx, 0, this.size2, this.size2);
                pop();
            }
            translate()
            pop();
        };
    };
};
