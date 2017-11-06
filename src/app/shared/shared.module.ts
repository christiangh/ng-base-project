import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule  } from '@angular/router';

/* Angular Material Own Module */
import { AngularMaterialModule } from "./angular-material/angular-material.module";

/* Guards */
import { GuardsModule } from "./guards/guards.module";

/* Dialogs */
import { DialogsModule } from "./dialogs/dialogs.module";

@NgModule({
	imports: [
		CommonModule,
    	FormsModule,
    	RouterModule,
		AngularMaterialModule,
		GuardsModule,
		DialogsModule
  	],
  	declarations: [],
  	exports: [
  		CommonModule,
		FormsModule,
		RouterModule,
		AngularMaterialModule,
		GuardsModule,
		DialogsModule
	]
})
export class SharedModule { }
