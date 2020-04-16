import {Injectable} from '@angular/core';
import {Ingredient} from './ingredient.model';
import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredientEmitter = new Subject<Ingredient[]>();
  ingredientIndexEmitter = new Subject<number>();
  private ingredients: Ingredient[] = [];
  private editedIngredientIndex: number;

  constructor() {
  }

  appendToShopingList(recipe: Recipe) {
    recipe.ingredients.forEach((i: Ingredient) => {
      this.ingredients.push(new Ingredient(i.name, i.amount));
    });
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  updateValues() {
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  setSelectedIngredient(i: number) {
    this.editedIngredientIndex = i;
    this.ingredientIndexEmitter.next(i);
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  setIngredient(index: any, ingredient: Ingredient) {
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientEmitter.next(this.ingredients.slice());
  }
}
