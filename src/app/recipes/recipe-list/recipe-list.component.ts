import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recepices: Recipe[] = [
    new Recipe('Tajin', 'Moroccan and Algerian tajine dishes are slow-cooked savory stews, typically' +
      ' made with sliced meat, poultry or fish together with vegetables or fruit. Spices, nuts, and dried fruits are also used.' +
      ' Common spices include ginger, cumin, turmeric, cinnamon, and saffron', 'https://img.taste.com.au/SK8COUDH/taste' +
      '/2016/11/beef-and-pear-tagine-1316-1.jpeg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
