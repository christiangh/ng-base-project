import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

/** Services **/
import { DialogsPackage } from "./dialogs.package";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DialogsPackage ],
	entryComponents: [ DialogsPackage ],
	exports: [ DialogsPackage ]
})

export class DialogsModule {}
