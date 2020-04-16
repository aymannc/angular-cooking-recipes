import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {StarterComponentComponent} from './recipes/starter-component/starter-component.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import {RouterResolverService} from './shared/router-resolver.service';

const appRouting: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: StarterComponentComponent},
      {path: 'new', component: EditRecipeComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RouterResolverService]},
      {path: ':id/edit', component: EditRecipeComponent, resolve: [RouterResolverService]},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: 'recipes'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRouting)],
    exports: [RouterModule]
  }
)

export class AppRoutingModule {

}
