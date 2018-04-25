
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http : Http,
              private recipeService: RecipeService){}

  private url: String = "https://ng-recipe-book-c465c.firebaseio.com/";

  storeRecipes(){
    //must return because http methods are only "promise"
    return this.http.put(
      this.url + "recipes.json",   //URL
      this.recipeService.getRecipes()   //data
    );
  }

  fetchRecipes(){
    this.http.get(this.url + "recipes.json")
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}
