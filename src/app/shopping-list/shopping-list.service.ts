//service has no @service
import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomato', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);  //use spread operator
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  editIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index].name = newIngredient.name;
    this.ingredients[index].amount = newIngredient.amount;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
