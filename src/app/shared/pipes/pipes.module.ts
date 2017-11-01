import { NgModule } from '@angular/core';

/** Services **/
import { PipesPackage } from "./pipes.package";

@NgModule({
    imports: [],
    declarations: [ PipesPackage ],
    exports: [ PipesPackage ]
})

export class PipesModule {}
