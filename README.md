# Playful Shapes



### This is a generative art project using the P5 JavaScript library by [Matthew Sanner](https://github.com/gravityskunk) and [Alberto Duarte](https://github.com/betodute).

![JavaScript](https://img.shields.io/badge/-JavaScript-333333?logo=javascript) ![P5](https://img.shields.io/badge/-P5-333333?logo=p5.js) ![HTML5](https://img.shields.io/badge/-HTML5-333333?logo=HTML5) ![CSS](https://img.shields.io/badge/-CSS-333333?logo=css3)

<img width="600" alt="Picture for ReadMe" src="https://user-images.githubusercontent.com/20879642/214134617-38711b4d-c53c-4066-b6e7-feeeeb7aefd1.png">
   
Playful Shapes merges background and foreground animations by instantiating each as a class object and calling them inside of the p5 Draw() function in the main canvas.js file. The background class creates a new shape each time and places it randomly on the canvas within a range of x and y coordinates corresponding to window size. The color of each background shape is also selected randomly but within a range of RGB color values. The foreground class instantiates a new object 30 times per second and uses nested iterations to create the shapes. The shape is drawn and erased at each frame to achieve a no-trails movement effect using the background() inside of the draw() function. Interactive elements include allowing the user to select the shape, colors and to affect foregrund movement with the position of their cursor.

For general users, Playful Shapes is an aesthetically pleasing color coordinated interactive experience. For the creators, has been an opportunity to apply: [collaborative project planning on FigJam](https://www.figma.com/file/CWfoF63IoorAJmQqJWGczm/GenArtColabPrjct---Meeting-Notes?node-id=0%3A1&t=ZhXM7JwaabT7pTRr-1), version control on GitHub, and the integration of technologies to create a fully responsive web application. For other developers, it is a model for how p5 can be integrated with object oriented programing to make a generative art application.

### Be listed as a contributer by helping with these pending features and issues:

1. Each of the moving foreground shapes ascends in stacking order clockwise until it reaches the last shape. The last shape, however, is awkwardly stacked over both the previous and the first shape in the sequence. It is our desire to make each shape stack in the same way: over the previous but under the next.
2. The background shapes pale in complexity compared to the movement of the foreground shapes. Changing the attributes of each background shape instance to make it more dynamic while still being cohesive is a welcomed pull request.
3. At one point during the completion of the MVP adding a Hexagon shape button was talked about as a possible feature.

Don't be shy to reach out to talk about any other ideas you might have to improve the project. You can reach Beto at betodute@gmail.com and Matthew at gravityskunk@gmail.com or through our [group on Linked-In.](https://www.linkedin.com/groups/14100375/)


Special thanks to [The Coding Train](https://www.youtube.com/@TheCodingTrain) and [Gene Kogan](https://genekogan.com/) for inspiration, education, and code snippets.
