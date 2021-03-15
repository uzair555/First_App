import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "src/app/shopping-list/shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path:'',component:ShoppingListComponent},
        ]),
        SharedModule

    ]

})
export class ShoppingListModule{

}