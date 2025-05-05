import Operation from './Operation';

export class Addition extends Operation {
    constructor(a, b, sous) {
      super();
      this.a = a;
      this.b = b;
      this.sous = sous;
    }

    static generate() {
      return new Addition(rand(1, 50), rand(1, 50), rand(0, 1));
    }
  
    getResult() {
      if (this.sous === 0) {
        return String(this.a + this.b);
      } else {
        return String(this.b);
      }
    }
  
    format() {
      if (this.sous === 0) {
        return `${this.a} + ${this.b}`;
      } else {
        return `${this.a + this.b} - ${this.a}`;
      }
    }
  }
  
  function rand(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  