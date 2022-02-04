import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

const routes: Routes = [

  { path: '', component: AppComponent},
  { path: 'view1', component: View1Component },
  { path: 'view2', component: View2Component },
  { path: 'view3', component: View3Component },
  { path: 'view4', component: View4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
