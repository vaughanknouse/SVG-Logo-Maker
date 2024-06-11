// Packages and classes to import
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes.js');

// Function using inquirer prompts to ask user to answer questions and save user input
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          'Please enter up to 3 characters for the logo text:',
        name: "text",
      },
      {
        type: "input",
        message:
          'Please enter a text color (color keyword or hexadecimal):',
        name: "textColor",
      },
      {
        type: "list",
        message: 'Please choose a shape for the logo:',
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          'Please enter a shape color (color keyword or hexadecimal):',
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error handling for text prompt (user must enter 3 characters or less)
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Calling write file function to generate SVG file
        writeToFile('./examples/logo.svg', answers);
      }
    });
}

// Calling promptUser function to run application
promptUser();

// Function to write the SVG file
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
 if (answers.shape === "Triangle") {
   shapeChoice = new Triangle();
   svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
 } else if (answers.shape === "Square") {
   shapeChoice = new Square();
   svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
 } else {
   shapeChoice = new Circle();
   svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
 }

   svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
   svgString += "</g>";
   svgString += "</svg>";
 
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}
