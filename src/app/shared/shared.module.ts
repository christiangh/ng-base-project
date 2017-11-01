import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule  } from '@angular/router';

/* Guards */
import { GuardsModule } from "./guards/guards.module";

@NgModule({
	imports: [
		CommonModule,
    	FormsModule,
    	RouterModule,
		GuardsModule
  	],
  	declarations: [],
  	exports: [
  		CommonModule,
		FormsModule,
		RouterModule,
		GuardsModule
	]
})
export class SharedModule { }
