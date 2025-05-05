import Operation from './Operation';

export class Multiplication extends Operation {
    constructor(a, b) {
      super();
      this.a = a;
      this.b = b;
    }

    static generate() {
      if (Math.random() > 0.5)
        return new Multiplication(rand(2, 5), rand(2, 9));
      else
        return new Multiplication(rand(2, 9), rand(2, 5));
    }
  
    getResult() {
      return String(this.a * this.b);
    }
  
    format() {
      return `${this.a} × ${this.b}`;
    }
  }
  
  function rand(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  