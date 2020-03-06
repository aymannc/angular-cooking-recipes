import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipesList: Recipe[] = [];
  selectedRecipe: Recipe;

  constructor() {
    this.recipesList.push(
      new Recipe('Tajin', 'This is a tajin',
        'https://img.taste.com.au/SK8COUDH/taste/2016/11/beef-and-pear-tagine-1316-1.jpeg'
      ),
      new Recipe('Spaghetti', 'This is a spaghetti dish',
        'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg'
      )
    );
  }

  ngOnInit(): void {

  }

  changeSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;

  }
}
