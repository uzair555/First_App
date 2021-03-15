import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShoppingListModule } from 'src/app/shopping-list/shopping-list.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core.module';
import { AuthModule } from 'src/app/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
 
  bootstrap: [AppComponent],
  // entryComponents:[
  //   AlertComponent
  // ]

})
export class AppModule { }
