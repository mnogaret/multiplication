import Operation from "./Operation";
import { Addition } from "./Addition";
import { Multiplication } from "./Multiplication";

export class Exercice extends Operation {
  constructor(op) {
    super();
    this.op = op;
  }

  static operations = [
    { weight: 4, factory: Addition },
    { weight: 6, factory: Multiplication },
    // Ajoute ici : { weight: X, factory: AutreOperation }
  ];

  static generate() {
    const totalWeight = this.operations.reduce((sum, o) => sum + o.weight, 0);
    const rnd = Math.random() * totalWeight;
    let cumulated = 0;

    for (const { weight, factory } of this.operations) {
      cumulated += weight;
      if (rnd < cumulated) {
        const op = factory.generate();
        return new Exercice(op);
      }
    }

    // Fallback, ne devrait jamais arriver
    return new Exercice(this.operations[0].factory.generate());
  }

  getResult() {
    return this.op.getResult();
  }

  format() {
    return this.op.format();
  }

  getType() {
    return this.op.constructor.name;
  }
}
