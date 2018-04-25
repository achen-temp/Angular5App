import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef, OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('shoppingListForm') slForm: NgForm;

  subscription: Subscription = new Subscription();
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
      }
    )
  }

  onSubmit(editForm: NgForm){
    const newIngredient: Ingredient = new Ingredient(editForm.form.value.name,
      editForm.form.value.amount);
    if(!this.editMode) {
      this.slService.addIngredient(newIngredient);
    }else{
      //edit Mode
      this.slService.editIngredient(this.editedItemIndex, newIngredient);
    }
    editForm.reset();
    this.editMode = false;
  }

  onClear(editForm: NgForm){
    editForm.reset();
    this.editMode = false;
  }

  onDelete(){
    if(this.editMode) {
      this.slService.deleteIngredient(this.editedItemIndex);
      this.editMode = false;
      this.slForm.reset();
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
