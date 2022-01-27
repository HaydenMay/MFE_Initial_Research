import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { MainComponent } from './main/main.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  {path: 'app1', component: MainComponent},
  {path: 'app1/view1', component: View1Component},
  {path: 'app1/view2', component: View2Component},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
