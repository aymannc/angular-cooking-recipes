import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recepices: Recipe[];
  @Output() recipeClicked = new EventEmitter<Recipe>();

  // @Output() recipeClicked: EventEmitter<Recipe>;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeItemClicked(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

  clearSelectedRecipe() {
    this.recipeClicked.emit(null);
  }
}
