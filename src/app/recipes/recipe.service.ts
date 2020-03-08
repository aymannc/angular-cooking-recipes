import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipesList: Recipe[] = [new Recipe('Tajin', 'This is a tajin',
    'https://img.taste.com.au/SK8COUDH/taste/2016/11/beef-and-pear-tagine-1316-1.jpeg'
  ),
    new Recipe('Spaghetti', 'This is a spaghetti dish',
      'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg'
    )];
  selectedRecipe: Recipe;
  recipeEmiter = new EventEmitter<Recipe>();

  addRecipe() {
    this.recipesList.push(new Recipe('Spaghetti', 'This is a spaghetti dish',
      'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg'
    ));
  }

  clear() {
    this.selectedRecipe = null;
    this.recipeEmiter.emit(this.selectedRecipe);
  }
}
