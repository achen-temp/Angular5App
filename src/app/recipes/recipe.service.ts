//no decreator needed
import { EventEmitter, Injectable } from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
  	 new Recipe(
  	 'Noodle Recipe',
  	 'Noodle description',
  	 'http://www.vegkitchen.com/wp-content/uploads/2012/05/Singapore-noodles2.jpg',
  	 [
  	 	new Ingredient('spagetti', 20),
  	 	new Ingredient('shrimp', 5)
  	 ]
  	 ),

  	 new Recipe(
  	 'Burger Recipe',
  	 'BURGER description',
  	 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL19ZwMoreKiBi3vXUnMoV0ZWfcY8QLi9Q7lNmcLVsXHsJfePLvw',
  	 [
  	 	new Ingredient('meat', 2),
  	 	new Ingredient('bread', 2),
  	 	new Ingredient('vegetable', 1)
  	 ]
  	 )
  ];

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService){}

  getRecipes(){
  	return this.recipes.slice(); //return a copy of the recipe array
  }

  //recipeSelected = new EventEmitter<Recipe>();

  //ingredientsToShoppingList = new EventEmitter<Ingredient[]>();

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.slService.addIngredients(ingredients);
  }

  //return id for the recipe
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
