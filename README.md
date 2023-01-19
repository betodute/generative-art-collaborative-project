# generative-art-collaborative-project
### Playful Shapes is a generative art project using JavaScript produced by [Matthew Sanner](https://github.com/gravityskunk) and [Alberto Duarte](https://github.com/betodute) using the P5 JavaScript library.
   
The code is structured using conventional programming principles by separating JS files by concern. The class objects for the background and foreground shapes are called separately inside the canvas script to create the layered effect.
          
The P5 Draw() function is called several times per second to create animation. The buttons below the canvas change the background shapes and colors, and if the user flips the switch, the buttons will then control the foreground shapes. While several factors in the background and foreground are affected by random noise, the position of the user's mouse cursor also affects the way that the foreground shapes move.

Play around and see what combination of shapes and colors you like best, then interact with the animation by moving your mouse!

Special thanks to <a href="https://www.youtube.com/@TheCodingTrain">The Coding Train</a> and <a href="https://genekogan.com/">Gene Kogan</a> for inspiration, education, and code snippets.
