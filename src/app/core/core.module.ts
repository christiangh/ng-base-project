import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/** CORE **/
import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { LeftBarComponent } from './shell/left-bar/left-bar.component';
import { RightBarComponent } from './shell/right-bar/right-bar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

/** SHARED **/
import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CoreRoutingModule,
		SharedModule
	],
	declarations: [ShellComponent, HeaderComponent, LeftBarComponent, RightBarComponent, FooterComponent, MainContentComponent],
	exports: [ShellComponent, SharedModule]
})
export class CoreModule { }
