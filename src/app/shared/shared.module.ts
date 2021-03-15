import { NgModule } from "@angular/core";
import { AlertComponent } from "src/app/shared/alert/alert.component";
import { LoadingSpinnerComponent } from "src/app/shared/loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "src/app/shared/placeholder/placeholder.directive";
import { DropdownDirective } from "src/app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule{}