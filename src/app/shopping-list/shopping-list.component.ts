import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription,Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.action'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients: Observable <{ingredients: Ingredient[]}>;

private igChangeSub:Subscription
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {

   this.ingredients= this.store.select('shoppingList')
    // this.ingredients=this.slService.getIngredients();
    // this.igChangeSub= this.slService.ingredientsChanged
    // .subscribe(
    //   (ingredients:Ingredient[])=>{
    //     this.ingredients=ingredients;
    //   }
    // );
  }
  onEditItem(index:number){
    // this.slService.startEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index))  
  }

  ngOnDestroy():void{
    // this.igChangeSub.unsubscribe();
  }

}
