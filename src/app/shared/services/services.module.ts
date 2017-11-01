import { NgModule } from '@angular/core';

/** Services **/
import { ServicesPackage } from "./services.package";

@NgModule({})
export class ServicesModule {
	static forRoot(){
		return {
			ngModule: ServicesModule,
			providers: [ ServicesPackage ]
		}
	}
}

