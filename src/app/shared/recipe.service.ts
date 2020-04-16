import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipeService {
  /*[new Recipe('Tajin', 'A tajine or tagine (Arabic: طاجن ṭājin) is a Maghrebi dish which is named ' +
    'after the earthenware pot in which it is cooked. It is also called a Maraq/marqa in North Africa.',
    'https://www.auxdelicesdupalais.net/wp-content/uploads/2015/08/1-tajine-berb%C3%A8re-aux-l%C3%A9gumesDSC02343.jpg', [
      new Ingredient('Potato', 4),
      new Ingredient('carot', 1),
      new Ingredient('onion', 2),
      new Ingredient('olives', 5),
      new Ingredient('Tomato', 1),
    ]
  ),
    new Recipe('Spaghetti', 'This is a spaghetti dish',
      'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg',
      [
        new Ingredient('Tomato', 4),
        new Ingredient('onion', 2),
        new Ingredient('olives', 5),
      ]
    )];*/
  recipesEmitter = new Subject<Recipe[]>();
  private recipesList: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    if (recipe) {
      this.recipesList.push(recipe);
    }
    this.recipesEmitter.next(this.recipesList.slice());
  }

  getRecipe(i: number) {
    return this.recipesList[i];
  }

  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipesLength() {
    return this.recipesList.length;
  }

  setRecipes(recipes: Recipe[]) {
    // console.log(recipes);
    this.recipesList = recipes;
    this.recipesEmitter.next(this.recipesList ? this.recipesList.slice() : this.recipesList);
  }

  deleteRecipe(recipeIndex: number) {
    this.recipesList.splice(recipeIndex, 1);
    this.recipesEmitter.next(this.recipesList.slice());
  }

  modifyRecipe(recipeId: number, recipe: Recipe) {
    this.recipesList[recipeId] = recipe;
    this.recipesEmitter.next(this.recipesList.slice());
  }

  resetData() {
    this.recipesList = [];
    this.recipesEmitter.next(this.recipesList.slice());
  }
}
