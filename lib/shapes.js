// Shapes Constructor
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Square class
class Square extends Shape {
  render(){
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Triangle class
class Triangle extends Shape {
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class
class Circle extends Shape {
  render(){
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}


module.exports = { Square, Triangle, Circle };
