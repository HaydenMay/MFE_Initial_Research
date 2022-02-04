import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService],
})
export class CalculatorComponent implements OnInit {
  @Input() total: number;
  toBeCalculated: number = 0;
  startingNumber: boolean = true;
  divideByZero

  constructor(private calcService: CalculatorService) {
    this.total = 0;
    this.divideByZero = false
  }
 
  ngOnInit(): void {
    this.total = 0
   
  }

  updateTotal(number: number) {
    this.total = this.calcService.total;
    this.startingNumber = false
    this.divideByZero = this.calcService.divideByZero;

    this.toBeCalculated = 0
  }

  onAdd(){
    this.updateTotal(this.calcService.add(this.toBeCalculated))
  }

  onSubtract() {
    this.updateTotal(this.calcService.subtract(this.toBeCalculated));
  }

  onMultiply() {
    this.updateTotal(this.calcService.multiply(this.toBeCalculated));
  }

  onDivide() {
    this.updateTotal(this.calcService.divide(this.toBeCalculated));
  }

  onClear(){
    this.calcService.clear()
    this.updateTotal(this.calcService.total)
  }
}
