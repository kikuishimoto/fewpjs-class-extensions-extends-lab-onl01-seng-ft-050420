  
class Polygon {
    constructor(array) {
      this.sides = array;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, curr) => acc + curr, 0);
    }
  };
  
  class Triangle extends Polygon {
    get isValid() {
      const [a, b, c] = this.sides;
      return (a + b) > c && (a + c) > b && (b + c) > a;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      return this.sides.every(element => element === this.sides[0]);
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }