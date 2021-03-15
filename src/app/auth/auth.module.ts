import { NgModule } from "@angular/core";
import { AuthComponent } from "src/app/auth/auth.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations:[AuthComponent],
  imports:[
      SharedModule,
      FormsModule,
      RouterModule.forChild([{path:'',component:AuthComponent},
    ]) 
  ]  
})
export class AuthModule{}