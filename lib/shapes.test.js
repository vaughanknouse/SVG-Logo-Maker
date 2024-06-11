// Importing the Square, Triangle, Circle shape classes
const { Square, Triangle, Circle } = require('./shapes.js');

// Testing Circle
describe('Circle test', () => {
  test('Shape renders correctly', () => {
    const shape = new Circle;
    shape.setColor('blue');
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="blue" />'
    );
  });
});

// Testing Square
describe('Square test', () => {
  test('Shape renders correctly', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});

// Testing Triangle
describe('Triangle test', () => {
  test('Shape renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});