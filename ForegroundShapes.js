class ForegroundShapes {
    constructor(foregroundShape, backgroundShape) {
        this.ang1 = TWO_PI * noise(0.01 * frameCount + 10) /*+ mouseX / 100*/;
        this.ang2 = TWO_PI * noise(0.01 * frameCount + 20) /*+ mouseY / 100*/;
        this.ang3 = TWO_PI * noise(0.01 * frameCount + 30) /*+ (mouseX + mouseY) / 100*/;
        this.rx = 60 * noise(0.01 * frameCount + 40) + mouseX / 7;
        this.tx = 200 * noise(0.01 * frameCount + 50) + mouseY / 7;
        this.size1 = 300 * noise(0.01 * frameCount + 60);
        this.size2 = 100 * noise(0.01 * frameCount + 60);
        this.foregroundShape = foregroundShape;
        this.backgroundShape = backgroundShape;
    }

    render() {
        frameRate(30);
        rectMode(CENTER);

        if (backgroundShape === 'circle') {
            stroke('blue');
            fill(255, 130, 0, 255);
        };

        if (backgroundShape === 'triangle') {
            stroke('green');
            fill(255, 160, 175, 255)
        };

        if (backgroundShape === 'square') {
            stroke('white');
            fill(5, 5, 5, 255);
        };
        
        translate(width / 2, height / 2);
        for (var i = 0; i < 8; i++) {
            push();
            rotate(this.ang1 + TWO_PI * i / 8);
            translate(this.tx, 0);
            if (foregroundShape === 'circle') {
                circle(0, 0, this.size1);
            }
            if (foregroundShape === 'triangle') {
                triangle(0, 0, this.rx, this.rx, this.tx, this.tx);
            }
            if (foregroundShape === 'square') {
                rect(0, 0, this.size1, this.size1);
            }
            for (var j = 0; j < 6; j++) {
                push();
                rotate(this.ang2 + TWO_PI * j / 6);
                translate(this.rx, 0);
                rotate(this.ang3);
                if (foregroundShape === 'circle') {
                    circle(this.rx, 0, this.size2);
                }
                if (foregroundShape === 'triangle') {
                    triangle(this.size1, this.size2, this.rx, this.rx, this.tx, this.tx);
                }
                if (foregroundShape === 'square') {
                    rect(this.rx, 0, this.size2, this.size2);
                }
                pop();
            }
            translate()
            pop();
        }
    }
}