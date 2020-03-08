import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesComponent]
})
export class RecipesComponent implements OnInit {
  recipesList: Recipe[] = [];
  // selectedRecipe: Recipe;

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipesList = this.recipeService.recipesList;
  }
}
