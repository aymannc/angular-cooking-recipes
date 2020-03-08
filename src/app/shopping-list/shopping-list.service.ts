import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredients: Ingredient[] = [];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
