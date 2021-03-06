import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from "../shared/dropdown.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective
  ],

  imports: [
    CommonModule, //give access to common directives, so always add common module
    ReactiveFormsModule
  ]
})
export class RecipesModule {

}
