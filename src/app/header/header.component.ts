import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatastorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import {Store} from '@ngrx/store'
import * as fromApp from '../store/app.reducer'
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated=false;
  private userSub: Subscription;

  constructor(
    private dataStorageService:DatastorageService,
    private authService:AuthService ,
    private store:Store<fromApp.AppState>
  ) { }
  

  ngOnInit() {
    this.userSub  =  this.store.select('auth').pipe(map(authState => authState.user)).subscribe(user=>{
      //  this.isAuthenticated=!user ? false : true;
      //alternative of ternary expression
      this.isAuthenticated=!!user;
      console.log(!user);
      console.log(!!user)
    }

    ); 

  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }


  ngOnDestroy(){
    this.userSub.unsubscribe();
  }


}
