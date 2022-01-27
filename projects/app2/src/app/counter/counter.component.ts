import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  

  ngOnInit(): void {}
  

  counter: number = 0;

  countUp() {
    this.counter++;
  }

  countDown() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  timesTwo() {
    this.counter *= 2;
  }

  divideTwo() {
    this.counter /= 2;
  }

  squareNum(){
    this.counter *= this.counter
  }

  squareRoot(){
    this.counter = Math.sqrt(this.counter)
  }

  clear(){
    this.counter = 0;
  }
}
