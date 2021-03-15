// import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs'
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startEditing= new Subject<number>();
   private ingredients: Ingredient[]=[
        new Ingredient('Apple',10),
        new Ingredient('Tomatoes',20),
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index: number){
          return this.ingredients[index]; 
      }
      addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); 
      }
      addIngredient(ingredients:Ingredient[]){
        //   for(let ingredient of ingredients){
        //       this.addIngredients(ingredient)
        //   }

         this.ingredients.push(...ingredients)
         this.ingredientsChanged.next(this.ingredients.slice())
      }

      updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());

      }
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}