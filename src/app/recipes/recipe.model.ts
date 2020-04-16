import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public id?: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imageUrl: string, ingredients: Ingredient[], id?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
