import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'App 1 View 1'

  backgroundColor: string = 'transparent'

  background: string = 'transparent'

  setBackground(color: string){
    this.backgroundColor = color
  }

  getBackground(){
    return this.backgroundColor;
  }

}
