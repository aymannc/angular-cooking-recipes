import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';
import {ShoppingListService} from '../../shared/shopping-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeIndex: number;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  addToShopingList() {
    this.shoppingListService.appendToShopingList(this.recipe);
  }

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.recipeIndex = +p.id;
      this.recipe = this.recipeService.getRecipe(this.recipeIndex);
    });
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe() {
    if (confirm('Do you want to delete ?')) {
      this.recipeService.deleteRecipe(this.recipeIndex);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }
}
