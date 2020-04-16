import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {BackendStorageService} from '../../shared/backend-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  isLoading = false;
  recipesSubscription: Subscription;
  loadingSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private backendStorageService: BackendStorageService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesSubscription = this.recipeService.recipesEmitter.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.loadingSubscription = this.backendStorageService.loadingStatusEmitter.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }


  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
