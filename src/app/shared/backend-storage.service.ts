import {Injectable} from '@angular/core';
import {RecipeService} from './recipe.service';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendStorageService {
  loadingStatusEmitter = new Subject<boolean>();

  constructor(private recipeService: RecipeService,
              private http: HttpClient) {
  }

  onFetchData() {
    this.loadingStatusEmitter.next(true);
    this.recipeService.resetData();
    return this.http.get<Recipe[]>('https://cooking-recipes-d4fb9.firebaseio.com/recipes.json')
      .pipe(map((recipes) => {
        return recipes.map(recipe => {
          return {
            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }), tap(recipes => {
        this.recipeService.setRecipes(recipes);
        this.loadingStatusEmitter.next(false);
      }));
  }

  onUploadData() {
    this.http.put<Recipe[]>('https://cooking-recipes-d4fb9.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .subscribe(recipes => {
          console.log(recipes);
        }
        , error => console.log(error));
  }

}
