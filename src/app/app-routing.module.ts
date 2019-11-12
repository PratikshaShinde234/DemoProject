import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes = [{
  path : 'app-first-page',
  //loadChildren: "./first-page/first-page.module#FirstPageModule",
  component : FirstPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
