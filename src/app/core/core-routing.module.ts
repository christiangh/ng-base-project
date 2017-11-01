import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Guards */
import { } from "app/shared/guards/index";

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full'},
  { path: 'default', loadChildren: './../modules/default/default.module#DefaultModule'},
  { path: '**', redirectTo: 'default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
