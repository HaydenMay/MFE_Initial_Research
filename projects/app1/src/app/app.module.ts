import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { CalculatorComponent } from './view3/calculator/calculator.component';
import { View3Component } from './view3/view3.component';
import { BoardComponent } from './view4/TicTacToe/board/board.component';
import { SquareComponent } from './view4/TicTacToe/square/square.component';
import { View4Component } from './view4/view4.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    MainComponent,
    View3Component,
    CalculatorComponent,
    View4Component,
    BoardComponent,
    SquareComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
