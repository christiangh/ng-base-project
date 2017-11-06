import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "app/shared/angular-material/angular-material.module";

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default/default.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AngularMaterialModule,
		DefaultRoutingModule
	],
	declarations: [DefaultComponent]
})
export class DefaultModule { }
