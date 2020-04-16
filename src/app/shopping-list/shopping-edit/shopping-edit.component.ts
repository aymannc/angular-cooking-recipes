import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  index: number = null;
  shoppingForm: FormGroup;
  private sub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required,
        Validators.pattern('^[1-9]+[0-9]*$')])
    });
    this.sub = this.shoppingListService.ingredientIndexEmitter.subscribe((index: number) => {
      this.index = index;
      const ingredient = this.shoppingListService.getIngredient(index);
      this.shoppingForm.setValue({name: ingredient.name, amount: ingredient.amount});
    });
    console.log(this.shoppingForm.value.name || this.shoppingForm.value.name || (this.index != null));
  }

  addIngredient() {
    if (this.index != null) {
      const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
      this.shoppingListService.setIngredient(this.index, ingredient);
      this.index = null;
    } else {
      const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
      this.shoppingListService.addIngredient(ingredient);
    }

    this.clearFom();
  }

  clearFom() {
    this.shoppingForm.reset();
    this.index = null;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  delete() {
    if (confirm('Do you want to delete ?')) {
      if (this.index != null) {
        this.shoppingListService.deleteIngredient(this.index);
        this.clearFom();
      }
    }
  }

  canClear() {
    return !(this.shoppingForm.value.name || this.shoppingForm.value.name || (this.index != null));
  }
}
