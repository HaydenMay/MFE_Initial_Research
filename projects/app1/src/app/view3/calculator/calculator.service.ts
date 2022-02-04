export class CalculatorService {

    total: number = 0
    divideByZero: boolean = false;

  add(number1: number) {
    this.total += number1;
    return this.total
  }
  subtract(number1: number) {
    this.total-= number1;
    return this.total
  }
  multiply(number1: number) {
    this.total *= number1;
    return this.total
  }
  divide(number1: number) {
    if (number1 != 0){
        this.total /= number1
    }
    else(console.log("can't divide by zero"),
    this.divideByZero = true)
    return this.total
  }
  clear(){
      this.total = 0;
      this.divideByZero = false
  }
}
