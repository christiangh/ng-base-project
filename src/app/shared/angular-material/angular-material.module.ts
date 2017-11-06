import { NgModule } from '@angular/core';

/** Environment **/
import { environment } from 'environments/environment';
const DATE_FORMAT: string = "es-es";

import {
	DateAdapter
} from "@angular/material";

import { CustomDateAdapter } from './custom-date-adapter';

@NgModule({
    imports: [],
	exports: [],
	providers: [{provide: DateAdapter, useClass: CustomDateAdapter }]
})

export class AngularMaterialModule {
	constructor(private dateAdapter: DateAdapter<Date>) {
		this.dateAdapter.setLocale(DATE_FORMAT);
	}
}
