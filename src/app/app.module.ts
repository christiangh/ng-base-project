import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* HammerJS for animations */
import 'hammerjs';

/* Services */
import { ServicesModule } from "./shared/services/services.module";

/** Core Mudule and Shell Component **/
import { CoreModule } from "./core/core.module";
import { ShellComponent } from "./core/shell/shell.component";

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		CoreModule,
		ServicesModule.forRoot()
	],
	providers: [],
	bootstrap: [ ShellComponent ]
})
export class AppModule { }
