import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from './shopping-list.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
      this.ingredients = this.shoppingListService.getIngredients();
      this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
        (changedIngredients: Ingredient[]) => {
            this.ingredients = changedIngredients;
        }
      )
  }

  //must have to prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(id: number){
    this.shoppingListService.startedEditing.next(id);
  }

}
