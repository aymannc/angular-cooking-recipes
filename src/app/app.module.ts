import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShowDroupdownDirective} from './shared/show-droupdown.directive';
import {StarterComponentComponent} from './recipes/starter-component/starter-component.component';
import {AppRoutingModule} from './app-routing.module';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import {ShortenPipePipe} from './recipes/recipe-list/recipe-item/shorten-pipe.pipe';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    ShowDroupdownDirective,
    StarterComponentComponent,
    EditRecipeComponent,
    ShortenPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
