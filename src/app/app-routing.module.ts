import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { App1SharedModule } from 'projects/app1/src/app/app.module';


const routes: Routes = [
  {path: 'app1', loadChildren: () => import("projects/app1/src/app/app.module").then (m => m.App1SharedModule)},
  {path: 'app2', loadChildren: () => App2SharedModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading}), App1SharedModule.forRoot(), App2SharedModule.ForRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule { }

