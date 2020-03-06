import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  @Output() onIngredientCreated = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addIngredient() {
    if (this.name && this.amount) {
      this.onIngredientCreated.emit(new Ingredient(this.name, this.amount));
    }
    this.name = this.amount = null;
  }
}
