import {
Component,
OnInit
} from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService]    //move to app.module, so that new added recipe will not be lost when switching from recipe tab to shopping list tab
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


}
