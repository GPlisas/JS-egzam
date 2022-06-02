/**
 * /* ------------------------------ TASK 8 --------------------------------------------
 * Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
 * sum(a, b) - priima du skaičius ir grąžina jų sumą.
 * subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
 * multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
 * division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
 * ------------------------------------------------------------------------------------
 *
 * @format
 */

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  division() {
    return this.a / this.b;
  }
  multiplication() {
    return this.a * this.b;
  }
  substraction(a, b) {
    return this.a - this.b;
  }
}

let number1 = new Calculator(10, 6);
let number2 = new Calculator(6, 2);
console.log(number1.sum());
console.log(number2.multiplication());
console.log(number1.division());
console.log(number2.substraction());
